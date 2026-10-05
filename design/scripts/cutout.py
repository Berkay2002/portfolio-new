# cutout.py <in> <out.webp> <preview.png>: make edge-connected near-white background transparent
# From the Genomlyst pipeline. Needs numpy, pillow and scipy.
import sys
import numpy as np
from PIL import Image
from scipy import ndimage

src, out, prev = sys.argv[1:4]
a = np.asarray(Image.open(src).convert('RGB')).astype(float)
minc = a.min(2)
light = minc >= 232
lab, _ = ndimage.label(light)
border = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
bg = np.isin(lab, border[border > 0])
lum = a.mean(2)
alpha = np.where(bg, np.clip((255 - lum) * 5, 0, 255), 255.0)
# soften the hard edge of the kept region by one pixel
edge = ndimage.binary_dilation(bg) & ~bg
alpha[edge] = np.minimum(alpha[edge], np.clip((255 - lum[edge]) * 8, 120, 255))
af = alpha[..., None] / 255
rgb = np.where(af > 0, np.clip((a - 255 * (1 - af)) / np.maximum(af, 1e-3), 0, 255), 0)
rgba = np.dstack([rgb, alpha]).astype('uint8')
ys, xs = np.nonzero(alpha > 60)
box = (max(xs.min() - 8, 0), max(ys.min() - 8, 0), xs.max() + 9, ys.max() + 9)
im = Image.fromarray(rgba).crop(box)
im.save(out, quality=88)
print('crop box', box, 'size', im.size)
p = Image.new('RGBA', im.size, (200, 100, 59, 255)); p.alpha_composite(im); p.save(prev)
