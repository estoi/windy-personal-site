<template>
  <div
    h-screen
    dark:bg-darkColor
    light:bg-lightColor
    dark:color-lightColor
    light:color-darkColor
    class="layout-wrap theme-transition"
  >
    <NuxtLayout name="header"></NuxtLayout>
    <NuxtLayout name="content">
      <slot />
    </NuxtLayout>
  </div>
</template>
