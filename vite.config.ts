import { defineConfig } from "vite";
import { resolve } from "path"
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true
        })
    ],
    build: {
        lib: {
            entry: {
                core: resolve(__dirname, "src/index.ts"),
                react: resolve(__dirname, "src/react/index.ts"),
                vue: resolve(__dirname, "src/vue/index.ts"),
                svelte: resolve(__dirname, "src/svelte/index.ts"),
                angular: resolve(__dirname, "src/angular/index.ts")
            },
            formats: ["es", "cjs"],
            fileName: (format, entryName) => `${entryName}.${format === "es" ? "js" : "cjs"}`
        },
        rolldownOptions: {
            external: [
                "react",
                "vue",
                "svelte",
                "svelte/store",
                "@angular/core",
                "rxjs"
            ]
        },
        sourcemap: true,
        minify: true
    }
})