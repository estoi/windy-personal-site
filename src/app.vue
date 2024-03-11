<script setup>
import ico from "~/assets/images/favicon.ico";

const { $toast } = useNuxtApp();

useHead({
  htmlAttrs: {
    lang: "zh-CN",
  },
  title: "Windy", //网站标题
  link: [{ rel: "icon", href: ico }],
});

const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  };

onMounted(() => {
  isMobile && $toast.warning("推荐使用PC端进行浏览", {
      position: "bottom-center",
    });
});
</script>
<template>
  <NuxtLayout>
    <!-- <NuxtLoadingIndicator color="#FFFEF8"/> -->
    <NuxtPage />
  </NuxtLayout>
</template>
