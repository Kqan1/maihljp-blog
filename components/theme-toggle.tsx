"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    const onClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <Button 
                variant="outline" 
                size="icon"
                onClick={onClick}
            >
                <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
                <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </>
    );
};
