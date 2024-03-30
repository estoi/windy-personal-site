// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://windy-liu.cn/",
    name: "Windy的个人站",
    description: "欢迎来到Windy的个人站 Blog",
    defaultLocale: "cn"
  },
  devServer: {
    host: "0.0.0.0"
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
    "@nuxtjs/seo"
  ],
  build: {
    transpile: ["gsap"],
  },
  css: ["@unocss/reset/tailwind.css", "@/assets/styles/global.scss"],
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
      ]
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
      breakpoints: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        xxl: "1536px",
      },
    },
  },
});
