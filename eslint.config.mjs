import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  { 
    rules: {
      indent: ["warn", 2],
      "linebreak-style": ["error", "windows"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": ["warn"],
      "no-unused-private-class-members": ["warn"]
    }
  },
];
