import { useTheme } from "next-themes";
import { Monitor, Moon, Sun, RotateCw } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

const MODES = ["system", "light", "dark"] as const;

const MODE_CONFIG = {
  system: {
    icon: Monitor,
    label: "System theme",
  },
  light: {
    icon: Sun,
    label: "Light theme",
  },
  dark: {
    icon: Moon,
    label: "Dark theme",
  },
} as const;

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const current = theme ?? "system";
  const nextMode = useMemo(() => {
    const index = MODES.indexOf(current as typeof MODES[number]);
    const nextIndex = (index + 1) % MODES.length;
    return MODES[nextIndex];
  }, [current]);

  const Icon = MODE_CONFIG[current as keyof typeof MODE_CONFIG]?.icon ?? RotateCw;

  return (
    <button
      type="button"
      onClick={() => setTheme(nextMode)}
      className={cn(
        "ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2",
        "bg-secondary/60 text-foreground/70 hover:text-foreground hover:bg-secondary/80 transition-all",
        "border border-border/60"
      )}
      aria-label={`Theme toggle. Current: ${MODE_CONFIG[current as keyof typeof MODE_CONFIG]?.label ?? current
        }. Click to switch to ${MODE_CONFIG[nextMode]?.label ?? nextMode}.`}
      title={`Theme: ${
        MODE_CONFIG[current as keyof typeof MODE_CONFIG]?.label ?? current
      } (next: ${MODE_CONFIG[nextMode]?.label ?? nextMode})`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm capitalize hidden sm:inline">
        {resolvedTheme ?? current}
      </span>
    </button>
  );
};

export default ThemeToggle;


