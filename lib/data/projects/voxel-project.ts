import type { Project } from "@/types";

export const voxelProject: Project = {
  id: "voxel-project",
  title: "VoxelCraft: C++20 Voxel Game Engine",
  description:
    "From-scratch Minecraft-inspired voxel engine with infinite procedural terrain, cave systems, a multi-pass rendering pipeline, and multithreaded chunk generation — all in C++20 and OpenGL 4.6.",
  descriptionSv:
    "Egenutvecklad Minecraft-inspirerad voxelmotor med oändlig procedurell terräng, grottsystem, en flerpass-renderingspipeline och flertrådig chunk-generering — allt i C++20 och OpenGL 4.6.",
  technologies: [
    "C++20",
    "OpenGL 4.6",
    "GLAD",
    "CMake 3.28+",
    "GLFW 3.4",
    "GLM 1.0.1",
    "FastNoiseLite 1.1.1",
    "stb_image",
    "nlohmann/json",
    "BS::thread_pool",
    "Google Test",
  ],
  link: "https://github.com/Berkay2002/voxel-project",
  githubLink: "https://github.com/Berkay2002/voxel-project",
  image: "/images/projects/demo/demo_surface.gif",
  imageAlt: "Voxel Engine surface exploration with procedural terrain",
  detailedDescription:
    "A voxel game engine built from scratch in C++20, inspired by Minecraft. The core architecture splits engine subsystems (graphics, rendering, scene, atmosphere, settings) from game logic, with a state machine driving the full lifecycle: title screen, settings, world loading, and gameplay. The world generates infinite terrain using 3D Perlin noise with smoothstep biome blending (Plains, Mountains), carves spaghetti cave networks with natural water flooding, distributes ores at depth-appropriate strata, and cuts rivers using cellular noise. Rendering runs a multi-pass OpenGL 4.6 pipeline: shadow map depth pass with texel-boundary stabilization, half-resolution SSAO with a 64-sample hemisphere kernel and box blur, the main forward-lit pass with per-vertex AO and biome tinting, transparent water, volumetric clouds (2D and 3D modes), and instanced weather particles. Chunk generation and meshing happen on a thread pool, with GPU uploads capped at 4 per frame on the main thread. Blocks and textures are data-driven via a JSON-backed registry.",
  detailedDescriptionSv:
    "En voxelmotor byggd från grunden i C++20, inspirerad av Minecraft. Kärnarkitekturen separerar motorsystem (grafik, rendering, scen, atmosfär, inställningar) från spellogik, med en tillståndsmaskin som driver hela livscykeln: titelskärm, inställningar, världsladdning och spelande. Världen genererar oändlig terräng med 3D Perlin-brus och smoothstep-biomövergångar (Slätt, Berg), karvar spaghetti-grottnätverk med naturlig vattenöversvämning, distribuerar malmer på djupanpassade lager och skär floder med cellbrus. Rendering körs som en flerpass-OpenGL 4.6-pipeline: shadow map-djuppass med texelgränsstabilisering, SSAO i halv upplösning med 64-sampels hemisfärkärna och box-blur, huvudpasset med per-vertex AO och biomfärgning, transparent vatten, volymetriska moln (2D- och 3D-lägen) samt instanserade väderpartiklar. Chunk-generering och meshing sker på en trådpool, med GPU-uppladdningar begränsade till 4 per frame på huvudtråden. Block och texturer är datadrivna via ett JSON-baserat register.",
  features: [
    "Infinite procedural terrain with 3D Perlin noise, biome blending, spaghetti caves with water flooding, ore veins, and cellular-noise rivers",
    "Multi-pass rendering pipeline: shadow maps (with texel stabilization to prevent swimming), half-res SSAO, forward-lit pass, transparent water, volumetric clouds, and weather particles",
    "Multithreaded chunk generation on BS::thread_pool with a 5-state atomic lifecycle — mesh data is computed off-thread and GPU uploads are rate-limited to 4 per frame",
    "Per-vertex ambient occlusion computed during mesh building by sampling 3 neighbors per vertex, plus a sky-light attribute so caves keep a fixed ambient independent of the day/night cycle",
    "Data-driven block registry loaded from JSON, with all block properties (solid, opaque, transparent, tinted) queryable at runtime",
    "Full game UI rendered in OpenGL: title screen, settings with live-adjustable graphics options, and a loading screen with progress bar — all using pre-rendered PNG text to avoid font library dependencies",
    "Google Test suite running in CI via GitHub Actions, covering ray math, chunk storage, heightmaps, block registry, and DDA voxel raycasting",
  ],
  featuresSv: [
    "Oändlig procedurell terräng med 3D Perlin-brus, biomövergångar, spaghetti-grottor med vattenöversvämning, malmådror och floder med cellbrus",
    "Flerpass-renderingspipeline: shadow maps (med texelstabilisering mot flimmer), SSAO i halv upplösning, framåtbelyst pass, transparent vatten, volymetriska moln och väderpartiklar",
    "Flertrådig chunk-generering på BS::thread_pool med en 5-stegs atomär livscykel — mesh-data beräknas utanför huvudtråden och GPU-uppladdningar begränsas till 4 per frame",
    "Ambient occlusion per vertex beräknad under mesh-byggande genom sampling av 3 grannar per vertex, plus ett sky-light-attribut så att grottor behåller fast ambient oavsett dag/natt-cykel",
    "Datadriven blockregistrering laddad från JSON, med alla blockegenskaper (solid, opak, transparent, tonad) frågbara vid körning",
    "Komplett spel-UI renderat i OpenGL: titelskärm, inställningar med direktjusterbara grafikalternativ och en laddningsskärm med förloppsindikator — allt med förrenderade PNG-texter för att undvika fontbiblioteksberoenden",
    "Google Test-svit som körs i CI via GitHub Actions och täcker strålmatematik, chunk-lagring, höjdkartor, blockregister och DDA-voxel-raycasting",
  ],
  challenges: [
    "OpenGL is single-threaded, so chunk generation had to be split into a thread-safe compute phase and a main-thread-only GPU upload phase with a mutex-guarded queue between them — getting the 5-state atomic chunk lifecycle right without races or stalls took some iteration",
    "Shadow maps swim when the camera moves unless you snap the light-space frustum center to texel boundaries, which requires careful math in the projection setup",
    "Transparent water needs depth-write off and backface culling disabled, rendered strictly after opaques — and chunk boundaries need special handling to suppress water faces at seams between neighboring chunks",
    "The SSAO implementation required depth reconstruction from the depth buffer via inverse projection, a Gram-Schmidt TBN for hemisphere orientation, and range-checking to prevent distant surfaces from causing false darkening",
  ],
  challengesSv: [
    "OpenGL är entrådat, så chunk-generering behövde delas i en trådsäker beräkningsfas och en GPU-uppladdningsfas som bara kör på huvudtråden med en mutex-skyddad kö emellan — att få den 5-stegs atomära chunk-livscykeln rätt utan race conditions eller låsningar krävde en del iteration",
    "Shadow maps flimrar när kameran rör sig om man inte snappar ljusrymd-frustumets centrum till texelgränser, vilket kräver noggrann matematik i projektionsuppsättningen",
    "Transparent vatten kräver avstängd djupskrivning och inaktiverad backface-culling, renderat strikt efter opaka objekt — och chunk-gränser behöver specialhantering för att undertrycka vattenytor vid skarvar mellan grannchunks",
    "SSAO-implementationen krävde djuprekonstruktion från djupbufferten via inverterad projektion, Gram-Schmidt TBN för hemisfärorientering och avståndscheck för att förhindra att avlägsna ytor skapar falsk mörkning",
  ],
  solution:
    "The threading problem drove the biggest architectural decision: mesh generation is split so ChunkMeshBuilder does all geometry work (iterating 65k blocks, checking 6 faces each, computing per-vertex AO) on worker threads, then hands off the vertex data via std::move to a queue. The main thread picks up finished meshes in ProcessPendingMeshes, capped at 4 GPU uploads per frame to avoid stalls. The render pipeline runs passes in a fixed order — shadow depth, SSAO at half-res, sky (depth-write off), opaque geometry, block selection wireframe, transparent water, then weather particles — with each pass managing its own FBO, blend state, and cull-face toggling. Shadow stabilization snaps the orthographic projection to texel boundaries. The cave carver uses an ICaveCarver interface so the strategy is pluggable, and the current SpaghettiCaveCarver applies altitude-based fade-out with surface protection to avoid breaking terrain above.",
  solutionSv:
    "Trådningsproblemet drev det största arkitekturbeslutet: mesh-generering delas så att ChunkMeshBuilder gör allt geometriarbete (itererar 65k block, kontrollerar 6 ytor var, beräknar AO per vertex) på arbetartrådar och lämnar sedan över vertexdata via std::move till en kö. Huvudtråden hämtar färdiga meshes i ProcessPendingMeshes, begränsat till 4 GPU-uppladdningar per frame för att undvika hakningar. Renderingspipelinen kör pass i fast ordning — shadow-djup, SSAO i halv upplösning, himmel (djupskrivning av), opak geometri, blockvalswireframe, transparent vatten, sedan väderpartiklar — där varje pass hanterar sin egen FBO, blend-state och cull-face. Shadow-stabilisering snappar den ortografiska projektionen till texelgränser. Grottskäraren använder ett ICaveCarver-gränssnitt så strategin är utbytbar, och den nuvarande SpaghettiCaveCarver tillämpar höjdbaserad utsläckning med ytskydd för att undvika att bryta terrängen ovanför.",
  outcome:
    "The engine runs at 60+ FPS with a 20-chunk render distance, handling infinite terrain generation, caves, ores, and rivers without noticeable pop-in thanks to the rate-limited async pipeline. The multi-pass renderer produces pretty convincing lighting — shadow maps, SSAO, and per-vertex AO combine well, and the day/night cycle with 8 lunar phases and volumetric clouds adds a lot of atmosphere. The modular architecture kept things maintainable as the codebase grew to ~340k lines of C++ and ~25k lines of GLSL. The test suite runs automatically on every push via GitHub Actions, covering the non-GPU subsystems.",
  outcomeSv:
    "Motorn kör i 60+ FPS med 20 chunks renderingsavstånd och hanterar oändlig terränggenerering, grottor, malmer och floder utan märkbar pop-in tack vare den hastighetsbegränsade asynkrona pipelinen. Flerpass-renderaren producerar ganska övertygande belysning — shadow maps, SSAO och AO per vertex kombineras väl, och dag/natt-cykeln med 8 månfaser och volymetriska moln ger mycket atmosfär. Den modulära arkitekturen höll saker underhållbara allteftersom kodbasen växte till ~340k rader C++ och ~25k rader GLSL. Testsviten körs automatiskt vid varje push via GitHub Actions och täcker de icke-GPU-beroende delsystemen.",
  gallery: [
    {
      image: "/images/projects/demo/demo_surface.gif",
      alt: "Voxel Engine surface exploration showing procedural terrain with biomes",
      caption:
        "Surface exploration with procedural terrain generation and biome transitions",
      captionSv:
        "Ytutforskning med procedurell terränggenerering och biomövergångar",
    },
    {
      image: "/images/projects/demo/demo_caves.gif",
      alt: "Voxel Engine cave systems with natural water flooding",
      caption: "Spaghetti cave systems with natural entrances and water flooding",
      captionSv:
        "Spaghetti-grottsystem med naturliga ingångar och vattenöversvämning",
    },
    {
      image: "/images/projects/demo/demo.gif",
      alt: "Voxel Engine general gameplay demonstration",
      caption:
        "General gameplay showcasing terrain, lighting, and block interactions",
      captionSv:
        "Allmänt spelande som visar terräng, belysning och blockinteraktioner",
    },
  ],
};
