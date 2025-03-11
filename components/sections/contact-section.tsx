"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, Github, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button";
/// <reference path="../ui/input.tsx" />
/// <reference path="../ui/textarea.tsx" />
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialLinks } from "@/lib/data/portfolio-data";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/layout/language-provider";

// Define a simple validation schema since we're not using zod
interface ValidationError {
  message: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const EMAILJS_SERVICE_ID = "service_6clfcwo"; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = "template_lgv4lmj"; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = "5XqG2xQZMp9ecZEzx"; // Replace with your public key

export function ContactSection() {
  const { t, locale } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Update error messages based on locale
  const getErrorMessage = (field: keyof ContactFormData, value: string) => {
    let error = "";
    
    if (locale === "sv") {
      switch(field) {
        case "name":
          if (value.length < 2) error = "Namnet måste vara minst 2 tecken";
          break;
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) error = "Vänligen ange en giltig e-postadress";
          break;
        case "message":
          if (value.length < 10) error = "Meddelandet måste vara minst 10 tecken";
          break;
      }
    } else {
      switch(field) {
        case "name":
          if (value.length < 2) error = "Name must be at least 2 characters";
          break;
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) error = "Please enter a valid email address";
          break;
        case "message":
          if (value.length < 10) error = "Message must be at least 10 characters";
          break;
      }
    }
    
    return error;
  };

  const validateField = (field: keyof ContactFormData, value: string) => {
    const error = getErrorMessage(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
    return !error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactFormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrorMessage("");
    
    // Validate form
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Format current date for the email template
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      // Add current year for copyright in template
      const currentYear = new Date().getFullYear().toString();
      
      // Prepare template parameters - make sure these match your EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Berkay Orhan", // Your name as the recipient
        date: currentDate,
        year: currentYear
      };
      
      // Send email via EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log("EmailJS Result:", result);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom hook for detecting if a field has content
  const useHasContent = (value: string) => {
    const [hasContent, setHasContent] = useState(false);
    
    useEffect(() => {
      setHasContent(value.trim().length > 0);
    }, [value]);
    
    return hasContent;
  };
  
  // Check if fields have content
  const nameHasContent = useHasContent(formData.name);
  const emailHasContent = useHasContent(formData.email);
  const messageHasContent = useHasContent(formData.message);

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-background to-neutral-50/10 dark:to-neutral-900/30">
      <div className="container px-4 mx-auto">
        <SectionHeading 
          title={t("nav.contact")} 
          className="mb-8 sm:mb-10"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-6 sm:mt-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-6 order-2 md:order-1"
          >
            <div className="bg-card dark:bg-card/40 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/50 dark:border-border/30">
              <h3 className="text-lg font-semibold mb-4 text-foreground">{t("contact.sendMessage")}</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      "h-11 rounded-md pt-4 peer transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary placeholder-transparent",
                      errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500"
                    )}
                    aria-invalid={!!errors.name}
                  />
                  <label 
                    htmlFor="name" 
                    className={cn(
                      "absolute text-muted-foreground text-sm transition-all duration-200 transform top-3 left-4 z-10 origin-[0]",
                      "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base",
                      "peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary",
                      nameHasContent && "-translate-y-3 scale-75",
                      "pointer-events-none"
                    )}
                  >
                    {t("contact.nameLabel")}
                  </label>
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1.5">{errors.name}</p>
                  )}
                </div>
                
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      "h-11 rounded-md pt-4 peer transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary placeholder-transparent",
                      errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500"
                    )}
                    aria-invalid={!!errors.email}
                  />
                  <label 
                    htmlFor="email" 
                    className={cn(
                      "absolute text-muted-foreground text-sm transition-all duration-200 transform top-3 left-4 z-10 origin-[0]",
                      "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base",
                      "peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary",
                      emailHasContent && "-translate-y-3 scale-75",
                      "pointer-events-none"
                    )}
                  >
                    {t("contact.emailLabel")}
                  </label>
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1.5">{errors.email}</p>
                  )}
                </div>
                
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={cn(
                      "pt-5 resize-none rounded-md peer transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary placeholder-transparent",
                      errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500"
                    )}
                    aria-invalid={!!errors.message}
                  />
                  <label 
                    htmlFor="message" 
                    className={cn(
                      "absolute text-muted-foreground text-sm transition-all duration-200 transform top-3 left-4 z-10 origin-[0]",
                      "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base",
                      "peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary",
                      messageHasContent && "-translate-y-3 scale-75",
                      "pointer-events-none"
                    )}
                  >
                    {t("contact.messageLabel")}
                  </label>
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1.5">{errors.message}</p>
                  )}
                </div>
                
                <div className="flex items-center justify-end">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t("contact.sending")}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        {t("contact.send")} <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
                
                {/* Success/Error messaging */}
                {submitStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 text-green-700 dark:text-green-400 rounded-md flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{t("contact.successTitle")}</p>
                      <p className="text-sm mt-1">{t("contact.successMessage")}</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 text-red-700 dark:text-red-400 rounded-md flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{t("contact.errorTitle")}</p>
                      <p className="text-sm mt-1">{errorMessage || t("contact.errorMessage")}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="bg-card dark:bg-card/40 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/50 dark:border-border/30">
              <h3 className="text-lg font-semibold mb-4 text-foreground">{t("contact.connectWithMe")}</h3>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:Berkayorhan@hotmail.se`}
                  className="flex items-center p-3 border border-border/50 dark:border-border/30 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="h-10 w-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3 text-blue-600 dark:text-blue-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.email")}</p>
                    <p className="text-sm text-muted-foreground">Berkayorhan@hotmail.se</p>
                  </div>
                </a>
                
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-border/50 dark:border-border/30 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="h-10 w-10 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full mr-3 text-neutral-700 dark:text-neutral-300">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">@Berkay2002</p>
                  </div>
                </a>
                
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-border/50 dark:border-border/30 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="h-10 w-10 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 rounded-full mr-3 text-blue-600 dark:text-blue-400">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">{t("contact.connect")}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 