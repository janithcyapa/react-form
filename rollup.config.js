import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
  // ES Modules
  {
    input: "src/index.tsx",
    output: {
      file: "dist/index.es.js",
      format: "es",
    },
    external: ["react", , "lodash"],
    plugins: [typescript(), babel({ extensions: [".ts"] })],
  },

  // UMD
  {
    input: "src/index.tsx",
    output: {
      file: "dist/index.umd.min.js",
      format: "umd",
      name: "reactForm",
      indent: false,
      globals: {
        react: "React",
        lodash: "_",
      },
    },
    external: ["react", "react-icons/cg", "react-icons/bi", "lodash"],
    plugins: [typescript(), babel({ extensions: [".ts"], exclude: "node_modules/**" }), terser()],
  },
];
