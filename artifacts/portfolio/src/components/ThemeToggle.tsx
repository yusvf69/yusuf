import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="rounded-full w-10 h-10 border border-white/10 dark:border-white/10 backdrop-blur-md interactive"
    >
      {theme === "dark" ? <Moon className="h-5 w-5 interactive" /> : <Sun className="h-5 w-5 interactive" />}
    </Button>
  );
}
