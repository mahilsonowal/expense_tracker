import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace "Expense-Tracker" with your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: "/Expense-Tracker/",
});
