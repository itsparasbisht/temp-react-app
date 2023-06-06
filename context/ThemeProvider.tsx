"use client";

import React, { createContext, useReducer } from "react";

const initialState = {
  theme: "light",
};

function reducer(state, action) {
  switch (state.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}

export const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
