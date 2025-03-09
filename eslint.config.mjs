import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Custom ESLint configuration
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-console": "warn",
      "react/no-unescaped-entities": "off", // Allow unescaped characters like ' or "
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
