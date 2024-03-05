import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    assetsInclude: [/\.glb/]
  },
  srcDir: "src/",
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: [
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/html-validator",
    "@unocss/nuxt",
    "@tresjs/nuxt",
    "@nuxt/devtools"
  ],
  tres: {
    devtools: true,
  },
  build: {
    transpile: ["gsap"],
  },
  css: [
    "@unocss/reset/tailwind.css",
    "@/assets/styles/global.scss",
  ],
  htmlValidator: {
    usePrettier: false,
    logLevel: "verbose",
    failOnError: false,
    options: {
      extends: [
        "html-validate:document",
        "html-validate:recommended",
        "html-validate:standard",
      ],
      rules: {
        "svg-focusable": "off",
        "no-unknown-elements": "error",
        // Conflicts or not needed as we use prettier formatting
        "void-style": "off",
        "no-trailing-whitespace": "off",
        // Conflict with Nuxt defaults
        "require-sri": "off",
        "attribute-boolean-style": "off",
        "doctype-style": "off",
        // Unreasonable rule
        "no-inline-style": "off",
      },
    },
  },
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
      script: [
        // { src: "//repo.bfw.wiki/bfwrepo/js/simplex-noise.min.js" },
      //   { src: "//cdnjs.cloudflare.com/ajax/libs/gsap/3.0.1/gsap.min.js" },
      //   {
      //     src: "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js",
      //   },
      //   {
      //     src: "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js",
      //   },
      //   process.env.NODE_ENV !== "production"
      //     ? {
      //         src: "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js",
      //       }
      //     : {},
      ],
    },
  },
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    preflight: true,
    webFonts: true,
    typography: true,
    tagify: true,
    theme: {
      colors: {
        darkColor: "#0f1423",
        lightColor: "#FFFEF8",
      },
    },
  },
});
