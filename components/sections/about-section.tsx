"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import Link from "next/link";
import { BsCodeSquare, BsGraphUp } from "react-icons/bs";
import {
  FaBrain,
  FaChartLine,
  FaDatabase,
  FaMicrochip,
  FaServer,
} from "react-icons/fa";
// Import common technology icons
import {
  SiCplusplus,
  SiD3Dotjs,
  SiFirebase,
  SiJavascript,
  SiKeras,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { skills } from "@/lib/data/portfolio-data";
import { cn } from "@/lib/utils";
import { useLanguage } from "../layout/language-provider";
import { BlurImage } from "../ui/blur-image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

// Map of skill names to their icons
const skillIcons: Record<string, JSX.Element> = {
  Python: <SiPython className="text-[#3776AB]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  React: <SiReact className="text-[#61DAFB]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  "Next.js": <SiNextdotjs className="text-[#000000]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "C++": <SiCplusplus className="text-[#00599C]" />,
  TensorFlow: <SiTensorflow className="text-[#FF6F00]" />,
  Keras: <SiKeras className="text-[#D00000]" />,
  MongoDBAtlas: <SiMongodb className="text-[#47A248]" />,
  Firebase: <SiFirebase className="text-[#FFCA28]" />,
  Supabase: <SiSupabase className="text-[#3ECF8E]" />,
  Vercel: <SiVercel className="text-[#000000]" />,
  "Machine Learning": <FaBrain className="text-purple-500" />,
  "Deep Learning": <FaBrain className="text-indigo-500" />,
  "Neural Networks": <FaBrain className="text-blue-500" />,
  Algorithms: <BsGraphUp className="text-green-500" />,
  Databases: <FaDatabase className="text-amber-500" />,
  Deployment: <FaServer className="text-red-500" />,
  "Simulations (e.g. MATLAB/Simulink)": (
    <BsCodeSquare className="text-[#0076A8]" />
  ),
  "D3.js": <SiD3Dotjs className="text-[#F9A03C]" />,
  "Data Visualization": <FaChartLine className="text-teal-500" />,
  "Automatic control": <FaMicrochip className="text-orange-500" />,
};

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <Container className="relative" id="about" size="small">
      {/* Top gradient for smooth transition from hero section - adjusted for better blending with particles */}
      <div className="-translate-y-full pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-transparent via-background/70 to-background" />

      <SectionHeading title={t("sections.about.title")} />

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="sticky top-24 space-y-8">
            <motion.div
              className="relative mx-auto aspect-square max-w-xs overflow-hidden rounded-xl border shadow-md md:mx-0"
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              whileHover={{ scale: 1.03 }}
            >
              <BlurImage
                alt="Profile"
                height={300}
                imageClassName="object-cover w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="/images/profile.png"
                width={300}
              />
            </motion.div>
            <div className="mx-auto max-w-xs space-y-4 md:mx-0">
              <h3 className="font-semibold text-xl">
                {t("sections.about.technical")}
              </h3>
              <p className="text-muted-foreground">
                {t("sections.about.technicalText")}
              </p>

              {/* Resume Download Button */}
              <Button asChild className="group mt-4 w-full" variant="outline">
                <Link download href="/Resume.pdf" target="_blank">
                  <FileDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  {t("common.download")}
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-2 space-y-12"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="space-y-8">
            <h3 className="font-semibold text-2xl">
              {t("sections.about.expertise")}
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {skills.map((skillCategory, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  key={skillCategory.category}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Card className="group h-full overflow-hidden border transition-all hover:shadow-lg dark:border-neutral-800">
                    <CardContent className="p-6">
                      <h4 className="mb-4 border-neutral-200 border-b pb-2 font-semibold text-lg transition-colors group-hover:border-blue-500/30 dark:border-neutral-800">
                        {skillCategory.category}
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {skillCategory.items.map((skill) => (
                          <li
                            className="flex items-center text-muted-foreground transition-colors group-hover:text-foreground/80"
                            key={skill}
                          >
                            <span className="mr-2 flex h-6 w-6 items-center justify-center text-lg">
                              {skillIcons[skill] || (
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-colors group-hover:bg-blue-400" />
                              )}
                            </span>
                            <span
                              className={cn(
                                "transition-colors",
                                skillIcons[skill] ? "font-medium" : ""
                              )}
                            >
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
