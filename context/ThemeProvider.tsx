"use client";

import React, { createContext, useReducer, useContext } from "react";

type ThemeType = "light" | "dark";

type ThemeStateType = {
  theme: ThemeType;
};

type ThemeActionsType = {
  type: "CHANGE_THEME";
  payload: ThemeType;
};

const initialState: ThemeStateType = {
  theme: "light",
};

function reducer(state: ThemeStateType, action: ThemeActionsType) {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}

const ThemeContext = createContext(initialState);

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
