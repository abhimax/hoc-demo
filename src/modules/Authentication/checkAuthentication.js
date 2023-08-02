import { useState } from "react";

// Simulated authentication check function
export const checkAuthentication = (password) => {
  const pwd = "abhiman";
  // Replace this logic with your actual authentication check (e.g., checking JWT, cookies, etc.)
  return pwd === password;
};
