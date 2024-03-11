<script setup>
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const typedAnimation = () => {
  gsap.fromTo(
    ".cursor",
    { autoAlpha: 0, x: -10 },
    { autoAlpha: 1, duration: 0.5, repeat: -1, ease: "SteppedEase(1)" }
  );
  gsap.to(".typewriter", {
    text: "欢迎来到Windy的个人站！",
    duration: 2,
    ease: "power1.in",
  });
};

onMounted(() => {
  typedAnimation();
});
</script>
<template>
  <div h-screen absolute top-0 left-0 right-0 bottom-0 class="landing-wrap">
    <div
      absolute
      class="typed-wrap top-50% left-50% translate--50% sm:font-size-6 xs:font-size-3 md:font-size-8 lg:font-size-10 xl:font-size-12"
    >
      <span class="typewriter"></span>
      <span m0 inline-block class="cursor">|</span>
    </div>
    <div
      line-height-2
      font-size-10px
      absolute
      bottom-40px
      left-0
      right-0
      text-center
    >
      <p>向下滑动</p>
      <Icon class="down-icon" name="material-symbols:arrow-downward-rounded" />
    </div>
  </div>
</template>
