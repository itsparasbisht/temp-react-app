"use client";

import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

export default function Home() {
  const [themeState, updateTheme] = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: themeState.theme === "dark" ? "black" : "white",
      }}
    >
      <h1 style={{ color: themeState.theme === "dark" ? "white" : "black" }}>
        Welcome to our website
      </h1>
    </div>
  );
}
