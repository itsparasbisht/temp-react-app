"use client";

import DeferInput from "@/components/DeferInput";
import { useTheme } from "@/context/ThemeProvider";

export default function Home() {
  const [themeState, updateTheme] = useTheme();

  return (
    <div
      style={{
        backgroundColor: themeState.theme === "dark" ? "black" : "white",
      }}
    >
      <h1 style={{ color: themeState.theme === "dark" ? "white" : "black" }}>
        Welcome to our website
      </h1>
      <DeferInput />
    </div>
  );
}
