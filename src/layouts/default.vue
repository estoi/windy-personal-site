<template>
  <div
    h-screen
    dark:bg-darkColor
    bg-lightColor
    dark:color-lightColor
    color-darkColor
    class="layout-wrap theme-transition"
  >
    <NuxtLayout name="header"></NuxtLayout>
    <NuxtLayout name="content">
      <slot />
    </NuxtLayout>
  </div>
</template>
