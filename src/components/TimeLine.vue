<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

</script>
<template>
  <div
    absolute
    top-100vh
    left-0
    right-0
    box-content
    h-screen
    pt-200px
    dark:color-lightColor
    light:color-darkColor
    class="timeline-container"
  >
  </div>
</template>
