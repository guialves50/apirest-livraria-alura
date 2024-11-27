import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
	{languageOptions: { globals: globals.browser }},
	pluginJs.configs.recommended,

  {
    env: {
      "browser": true,
      "es2021": true,
      "node": true
    },
		rules: {
			"no-unused-vars": "error",
			"no-undef": "error",
			"quotes": ["error", "double"],
			"indent": ["error", "4"],
			"semi": ["error", "always"],
			"linebreak-style": ["error", "unix"]
		}
	}
];