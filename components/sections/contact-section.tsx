"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialLinks } from "@/lib/data/portfolio-data";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

// Email validation regex at top level for performance
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAIL_REGEX_STRICT = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

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
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Simplified validation helpers
  const validateName = (value: string) => {
    if (value.length < 2) {
      return locale === "sv"
        ? "Namnet måste vara minst 2 tecken"
        : "Name must be at least 2 characters";
    }
    return "";
  };

  const validateEmail = (value: string) => {
    if (!EMAIL_REGEX.test(value)) {
      return locale === "sv"
        ? "Vänligen ange en giltig e-postadress"
        : "Please enter a valid email address";
    }
    return "";
  };

  const validateMessage = (value: string) => {
    if (value.length < 10) {
      return locale === "sv"
        ? "Meddelandet måste vara minst 10 tecken"
        : "Message must be at least 10 characters";
    }
    return "";
  };

  // Update error messages based on locale
  const getErrorMessage = (field: keyof ContactFormData, value: string) => {
    switch (field) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  };

  const validateField = (field: keyof ContactFormData, value: string) => {
    const error = getErrorMessage(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
    return !error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactFormData, value);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX_STRICT.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrorMessage("");

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Format current date for the email template
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
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
        year: currentYear,
      };

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Error handled through UI feedback
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
    <section
      className="bg-gradient-to-b from-background to-neutral-50/10 py-16 sm:py-20 dark:to-neutral-900/30"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <SectionHeading className="mb-8 sm:mb-10" title={t("nav.contact")} />

        <div className="mt-6 grid h-full grid-cols-1 gap-8 sm:mt-8 md:min-h-[420px] md:grid-cols-2 md:gap-10">
          {/* Contact Form */}
          <motion.div
            className="order-2 flex h-full flex-col space-y-5 sm:space-y-6 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="flex h-full flex-col justify-between rounded-xl border border-border/50 bg-card p-6 shadow-sm backdrop-blur-sm dark:border-border/30 dark:bg-card/40">
              <h3 className="mb-4 font-semibold text-foreground text-lg">
                {t("contact.sendMessage")}
              </h3>
              <form className="space-y-5" onSubmit={handleSubmit} ref={formRef}>
                <div className="relative">
                  <Input
                    aria-invalid={!!errors.name}
                    className={cn(
                      "peer h-11 rounded-md pt-4 placeholder-transparent transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary",
                      errors.name &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500"
                    )}
                    id="name"
                    name="name"
                    onChange={handleChange}
                    placeholder=" "
                    type="text"
                    value={formData.name}
                  />
                  <label
                    className={cn(
                      "absolute top-3 left-4 z-10 origin-[0] transform text-muted-foreground text-sm transition-all duration-200",
                      "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base",
                      "peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary",
                      nameHasContent && "-translate-y-3 scale-75",
                      "pointer-events-none"
                    )}
                    htmlFor="name"
                  >
                    {t("contact.nameLabel")}
                  </label>
                  {errors.name && (
                    <p className="mt-1.5 text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div className="relative">
                  <Input
                    aria-invalid={!!errors.email}
                    className={cn(
                      "peer h-11 rounded-md pt-4 placeholder-transparent transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary",
                      errors.email &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500"
                    )}
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder=" "
                    type="email"
                    value={formData.email}
                  />
                  <label
                    className={cn(
                      "absolute top-3 left-4 z-10 origin-[0] transform text-muted-foreground text-sm transition-all duration-200",
                      "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base",
                      "peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary",
                      emailHasContent && "-translate-y-3 scale-75",
                      "pointer-events-none"
                    )}
                    htmlFor="email"
                  >
                    {t("contact.emailLabel")}
                  </label>
                  {errors.email && (
                    <p className="mt-1.5 text-red-500 text-sm">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <Textarea
                    aria-invalid={!!errors.message}
                    className={cn(
                      "peer resize-none rounded-md pt-5 placeholder-transparent transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary",
                      errors.message &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500"
                    )}
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder=" "
                    rows={4}
                    value={formData.message}
                  />
                  <label
                    className={cn(
                      "absolute top-3 left-4 z-10 origin-[0] transform text-muted-foreground text-sm transition-all duration-200",
                      "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base",
                      "peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary",
                      messageHasContent && "-translate-y-3 scale-75",
                      "pointer-events-none"
                    )}
                    htmlFor="message"
                  >
                    {t("contact.messageLabel")}
                  </label>
                  {errors.message && (
                    <p className="mt-1.5 text-red-500 text-sm">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-end">
                  <Button
                    className="bg-blue-600 text-white hover:bg-blue-700"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Loading</title>
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            fill="currentColor"
                          />
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
                  <div className="mt-4 flex items-start rounded-md border border-green-200 bg-green-50 p-3 text-green-700 dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-400">
                    <CheckCircle className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{t("contact.successTitle")}</p>
                      <p className="mt-1 text-sm">
                        {t("contact.successMessage")}
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-4 flex items-start rounded-md border border-red-200 bg-red-50 p-3 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400">
                    <AlertCircle className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{t("contact.errorTitle")}</p>
                      <p className="mt-1 text-sm">
                        {errorMessage || t("contact.errorMessage")}
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="order-1 flex h-full flex-col space-y-6 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="flex h-full flex-col rounded-xl border border-border/50 bg-card p-6 shadow-sm backdrop-blur-sm dark:border-border/30 dark:bg-card/40">
              <h3 className="mb-2 font-semibold text-foreground text-lg">
                {t("contact.connectWithMe")}
              </h3>
              <div className="space-y-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        className="flex items-center rounded-lg border border-border/50 p-3 transition-colors hover:bg-accent/50 dark:border-border/30"
                        href={"mailto:Berkayorhan@hotmail.se"}
                      >
                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">{t("contact.email")}</p>
                          <p className="text-muted-foreground text-sm">
                            Berkayorhan@hotmail.se
                          </p>
                        </div>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Send me an email</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        className="flex items-center rounded-lg border border-border/50 p-3 transition-colors hover:bg-accent/50 dark:border-border/30"
                        href={socialLinks.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                          <Github className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">GitHub</p>
                          <p className="text-muted-foreground text-sm">
                            @Berkay2002
                          </p>
                        </div>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View my code repositories</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        className="flex items-center rounded-lg border border-border/50 p-3 transition-colors hover:bg-accent/50 dark:border-border/30"
                        href={socialLinks.linkedin}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                          <Linkedin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <p className="text-muted-foreground text-sm">
                            {t("contact.connect")}
                          </p>
                        </div>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with me professionally</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
