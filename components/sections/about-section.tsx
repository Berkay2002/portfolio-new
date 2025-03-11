"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileDown } from "lucide-react";

import { skills } from "@/lib/data/portfolio-data";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { BlurImage } from "../ui/blur-image";
import { useLanguage } from "../layout/language-provider";
import { cn } from "@/lib/utils";

// Import common technology icons
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiNextdotjs,
  SiTailwindcss, SiCplusplus, SiTensorflow, SiKeras, SiMongodb, SiFirebase,
  SiSupabase, SiVercel, SiD3Dotjs
} from "react-icons/si";
import { BsGraphUp, BsCodeSquare } from "react-icons/bs";
import { FaDatabase, FaServer, FaBrain, FaMicrochip, FaChartLine } from "react-icons/fa";

// Map of skill names to their icons
const skillIcons: Record<string, JSX.Element> = {
  "Python": <SiPython className="text-[#3776AB]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "React": <SiReact className="text-[#61DAFB]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  "Next.js": <SiNextdotjs className="text-[#000000]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "C++": <SiCplusplus className="text-[#00599C]" />,
  "TensorFlow": <SiTensorflow className="text-[#FF6F00]" />,
  "Keras": <SiKeras className="text-[#D00000]" />,
  "MongoDBAtlas": <SiMongodb className="text-[#47A248]" />,
  "Firebase": <SiFirebase className="text-[#FFCA28]" />,
  "Supabase": <SiSupabase className="text-[#3ECF8E]" />,
  "Vercel": <SiVercel className="text-[#000000]" />,
  "Machine Learning": <FaBrain className="text-purple-500" />,
  "Deep Learning": <FaBrain className="text-indigo-500" />,
  "Neural Networks": <FaBrain className="text-blue-500" />,
  "Algorithms": <BsGraphUp className="text-green-500" />,
  "Databases": <FaDatabase className="text-amber-500" />,
  "Deployment": <FaServer className="text-red-500" />,
  "Simulations (e.g. MATLAB/Simulink)": <BsCodeSquare className="text-[#0076A8]" />,
  "D3.js": <SiD3Dotjs className="text-[#F9A03C]" />,
  "Data Visualization": <FaChartLine className="text-teal-500" />,
  "Automatic control": <FaMicrochip className="text-orange-500" />,
};

export function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <Container id="about" size="small" className="relative">
      {/* Top gradient for smooth transition from hero section - adjusted for better blending with particles */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-transparent via-background/70 to-background -translate-y-full pointer-events-none" />
      
      <SectionHeading
        title={t("sections.about.title")}
      />

      <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="col-span-1"
        >
          <div className="sticky top-24 space-y-8">
            <motion.div 
              className="relative aspect-square overflow-hidden rounded-xl border shadow-md max-w-xs mx-auto md:mx-0"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <BlurImage
                src="/images/profile.png"
                alt="Profile"
                width={300}
                height={300}
                imageClassName="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </motion.div>
            <div className="space-y-4 max-w-xs mx-auto md:mx-0">
              <h3 className="text-xl font-semibold">{t("sections.about.technical")}</h3>
              <p className="text-muted-foreground">
                {t("sections.about.technicalText")}
              </p>
              
              {/* Resume Download Button */}
              <Button asChild variant="outline" className="w-full mt-4 group">
                <Link href="/Resume.pdf" target="_blank" download>
                  <FileDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  {t("common.download")}
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="col-span-2 space-y-12"
        >          
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">{t("sections.about.expertise")}</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full overflow-hidden border hover:shadow-lg transition-all dark:border-neutral-800 group">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4 border-b pb-2 border-neutral-200 dark:border-neutral-800 group-hover:border-blue-500/30 transition-colors">
                        {skillCategory.category}
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {skillCategory.items.map((skill) => (
                          <li 
                            key={skill} 
                            className="flex items-center text-muted-foreground group-hover:text-foreground/80 transition-colors"
                          >
                            <span className="mr-2 flex items-center justify-center h-6 w-6 text-lg">
                              {skillIcons[skill] || (
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors"></span>
                              )}
                            </span>
                            <span className={cn(
                              "transition-colors",
                              skillIcons[skill] ? "font-medium" : ""
                            )}>
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