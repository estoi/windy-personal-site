<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SimplexNoise from "simplex-noise";

gsap.registerPlugin(ScrollTrigger);

const contentRef = ref();
const simplex = new SimplexNoise();

const createScrollEffect = () => {
  nextTick(() => {
    const Circles = contentRef.value.querySelectorAll(".circle");
    const main = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-wrap",
        scrub: 0.7,
        start: "top top",
        end: "bottom bottom",
        // pin: true,
        // markers: true,
      },
    });
    main.delay(2000);
    Circles.forEach((circle) => {
      main.to(circle, {
        opacity: 1,
      });
    });
  });
};

const createEffectDiv = () => {
  let els = [];
  for (let i = 0; i < 5000; i++) {
    const n1 = simplex.noise2D(i * 0.003, i * 0.0033);
    const n2 = simplex.noise2D(i * 0.002, i * 0.001);
    const style = {
      transform: `translate(${n2 * 300}px) rotate(${n2 * 270}deg) scale(${1.5 + n1 * 2}, ${1.5 + n2 * 2})`,
      boxShadow: `0 0 0 .2px hsla(${Math.floor(i * 0.3)}, 70%, 70%, .6)`,
      width: "20px",
      height: "20px",
      borderRadius: "40%",
      opacity: 0,
      margin: "-19px auto",
      transition: "transform 1s cubic-bezier(0.14, 0.15, 0.13, 0.99)",
    };
    els.push(
      h("div", {
        style,
        class: "circle",
      })
    );
  }
  return els;
};

onMounted(() => {
  createScrollEffect();
});
</script>
<template>
  <div overflow-x-hidden overflow-y-scroll class="main-wrap">
    <div ref="contentRef" class="animation-wrap">
      <ClientOnly>
        <component :is="createEffectDiv"></component>
      </ClientOnly>
    </div>
    <Landing />
    <TimeLine />
  </div>
</template>
