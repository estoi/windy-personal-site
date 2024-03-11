<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const createPanelAnimation = () => {
  const panels = gsap.utils.toArray(".timeline-panel");
  panels.forEach((panel) => {
    gsap.to(panel, {
      opacity: 0,
      scale: 0.9,
      y: 50,
      scrollTrigger: {
        trigger: panel,
        scrub: true,
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
      },
    });
  });
};

onMounted(() => {
  createPanelAnimation();
});
</script>
<template>
  <div
    absolute
    top-100vh
    overscroll-none
    dark:color-lightColor
    color-darkColor
    class="timeline-container w100% h100%"
  >
    <div
      text-center
      flex
      flex-items-center
      justify-center
      class="timeline-panel w100% h100%"
    >
      <div w25vw class="time xs:font-size-6 sm:font-size-10 md:font-size-10 lg:font-size-13">2014~2017</div>
      <div w35vw ml-50px text-left class="info xs:font-size-3 sm:font-size-5 lg:font-size-7">
        <p>毕业学校：鄂州职业大学</p>
        <p>专业：网站开发与管理</p>
        <p>课程：jQuery、JavaScript、.NET、C#、Flash等</p>
        <p>荣誉：计算机系网站开发大赛二等奖</p>
      </div>
    </div>
    <div
      text-center
      flex
      flex-items-center
      justify-center
      class="timeline-panel w100% h100%"
    >
      <div w25vw class="time xs:font-size-6 sm:font-size-10 md:font-size-10 lg:font-size-13">2017~2021</div>
      <div w35vw ml-50px text-left class="info xs:font-size-3 sm:font-size-5 lg:font-size-7">
        <p>公司：北京开课唯识技术股份有限公司</p>
        <p>部门：数金中心</p>
        <p>职位：WEB前端开发工程师</p>
        <p>
          职能：参与部门以及跨部门项目开发，负责开发各个项目的功能模块、与后端联调数据、与测试配合修改BUG等
        </p>
        <p>技能：angular、react、vue(2)、微信小程序 scss、less</p>
      </div>
    </div>
    <div
      text-center
      flex
      flex-items-center
      justify-center
      class="timeline-panel w100% h100%"
    >
      <div w25vw class="time xs:font-size-6 sm:font-size-10 md:font-size-10 lg:font-size-13">2021~2023</div>
      <div w35vw ml-50px text-left class="info xs:font-size-3 sm:font-size-5 lg:font-size-7">
        <p>公司：武汉格莱信息科技有限公司</p>
        <p>部门：软件研发及师训部</p>
        <p>职位：研发专员师</p>
        <p>
          职能：参与/主导公司各个平台的开发工作，负责开发各个项目的功能模块、与后端联调数据、修改BUG等
        </p>
        <p>技能：vue(2、3)、uni-app</p>
      </div>
    </div>
    <div
      text-center
      flex
      flex-items-center
      justify-center
      class="timeline-panel w100% h100%"
    >
      <div w25vw class="time xs:font-size-6 sm:font-size-10 md:font-size-10 lg:font-size-13">now</div>
      <div w35vw ml-50px text-left class="info xs:font-size-3 sm:font-size-5 lg:font-size-7">
        <p>状态：积极求职中</p>
        <p>
          其他：详细情况请联系我
          <!-- 答疑：关于为什么有近半年的空窗期？由于上一家公司经营情况的原因被迫加入事业大军，当时本人妻子正怀孕8个月左右在家修养没有人照顾，本人决定先在家照顾妻子到宝宝出生，顺便休息调整，10月底的时候宝宝出生后，开始着手找工作，彼时正值年末，本来机会久不是很多，也面试过几家公司，过程有好有坏，但是还是没有收到offer，最后想着年后可能机会多一些，所以年后又开始寻找机会。 -->
        </p>
      </div>
    </div>
  </div>
</template>
