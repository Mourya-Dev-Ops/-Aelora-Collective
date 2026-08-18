"use client";

import { useEffect, useState } from "react";

const themes = [
  { id: "default", name: "Balenciaga", class: "" },
  { id: "emerald", name: "Rolex", class: "theme-emerald" },
  { id: "arctic", name: "Apple", class: "theme-arctic" },
  { id: "navy", name: "Patek", class: "theme-navy" },
  { id: "noir", name: "Tom Ford", class: "theme-noir" },
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove(
      "theme-emerald",
      "theme-arctic",
      "theme-navy",
      "theme-noir"
    );

    // Add the selected theme class if it exists
    if (activeTheme.class) {
      document.documentElement.classList.add(activeTheme.class);
    }
  }, [activeTheme]);

  return (
    <div className="fixed bottom-6 right-6 z-[10000] flex flex-col items-end gap-2">
      {isOpen && (
        <div className="flex flex-col gap-2 p-4 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 shadow-2xl">
          <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2 font-mono">Select Theme</p>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(theme)}
              className={`text-xs text-left px-3 py-2 rounded-md transition-all duration-300 ${
                activeTheme.id === theme.id ? "bg-white text-black font-medium" : "text-white hover:bg-white/10"
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 px-6 bg-black text-white rounded-full text-xs font-mono tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-2xl border border-white/20"
      >
        {activeTheme.name}
      </button>
    </div>
  );
}
