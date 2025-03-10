"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-full"
          aria-label={t("common.language")}
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={locale === "en" ? "bg-muted" : ""}
          onClick={() => setLocale("en")}
        >
          <span className="mr-2">🇬🇧</span>
          {t("common.english")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={locale === "sv" ? "bg-muted" : ""}
          onClick={() => setLocale("sv")}
        >
          <span className="mr-2">🇸🇪</span>
          {t("common.swedish")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 