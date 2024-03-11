<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = ref();
const { $toast } = useNuxtApp();

const goToWechat = () => {
  const { copy } = useClipboard({ legacy: true });
  copy("molika_94").then(() => {
    // window.location.href =
    //   "weixin://addfriend/?nickname=&verify=&ticket=&scene=&sourceid=&uin=&key=&from=&isappinstalled=0&version=7.0.5&lang=zh_CN&pass_ticket=&wechatid=molika_94";
    $toast.success("微信号复制成功，快去添加我的好友吧^_^", {
      position: "bottom-center",
    });
  });
};


onMounted(() => {
  tl.value = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about-wrap",
        scrub: 0.5,
        pin: true,
        start: "top top",
        end: "100%"
      },
    })
    .to(".line", {
      opacity: 1,
      force3D: true,
      duration: 1,
      ease: "power1.inOut",
      y: 0,
      marginTop: 0,
      stagger: {
        amount: 1,
      },
    })
    .to(".card", {
      ease: "power1.inOut",
      duration: 1,
    })
    .to(".mask", {
      opacity: 1,
    })
    .to(".avatar", {
      opacity: 1,
      y: 0,
    })
    .to(".name", {
      opacity: 1,
      y: 0,
    })
    .to(".career", {
      opacity: 1,
      y: 0,
    })
    .to(".contact", {
      opacity: 1,
      y: 0,
    });
});

onUnmounted(() => {
});
</script>

<template>
  <div
    absolute
    top-500vh
    w100vw
    h100vh
    flex
    flex-items-center
    justify-center
    class="about-wrap"
  >
    <div overflow-hidden text-center class="card w50vw h50vh">
      <div
        absolute
        opacity-0
        class="mask w50vw h50vh shadow-[20px_20px_60px_#d9d9d9,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#000,-20px_-20px_60px_#333]"
      ></div>
      <div absolute z-1 class="about w50vw h50vh xs:pt10 lg:pt12">
        <div
          opacity-0
          overflow-hidden
          translate-y--10px
          class="avatar xs:w30 xs:h30 md:w35 md:h35 m[0_auto] border-rounded-50%"
        >
          <img
            object-cover
            class="w100% h100%"
            src="~/assets/images/avatar.jpeg"
          />
        </div>
        <h1
          translate-y--10px
          opacity-0
          font-bold
          font-size-60px
          class="name mt-20px"
        >
          刘广
        </h1>
        <p translate-y--10px opacity-0 class="career">前端工程师</p>
        <div
          translate-y--10px
          opacity-0
          flex
          flex-items-center
          justify-center
          gap-10px
          class="contact h50px"
        >
          <a href="https://github.com/estoi" target="_blank">
            <Icon
              name="mdi:github"
              size="30px"
              class="dark:color-lightColor color-darkColor"
            />
          </a>
          <a href="javascript:;" @click="goToWechat">
            <Icon
              name="mdi:wechat"
              size="30px"
              class="dark:color-lightColor color-darkColor"
            />
          </a>
          <a href="mailto:rainbow94720@outlook.com">
            <Icon
              name="mdi:email"
              size="30px"
              class="dark:color-lightColor color-darkColor"
            />
          </a>
        </div>
      </div>
      <div
        opacity-0
        translate-y-50
        z-1
        class="line h1.2vh w100% mt--0.2vh dark:bg-black/60 bg-white/80"
        v-for="(item, index) of 50"
        :key="index"
      ></div>
    </div>
  </div>
</template>
