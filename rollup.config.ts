import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "output",
    format: "es",
  },
  external: ["react", "react-dom/server"],
  plugins: [typescript({ isolatedModules: true })],
};
