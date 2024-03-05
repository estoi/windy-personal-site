<script setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header
    fixed
    left-0
    right-0
    h-80px
    flex
    justify-between
    flex-items-center
    pl-40px
    z-10
    class="layout-header-wrap"
  >
    <div
      w-40px
      h-40px
      border-rounded-50%
      overflow-hidden
      bg-gray-500
      class="avatar-wrap"
    ></div>
    <div class="nav-wrap">
      <div flex flex-items-center class="list">
        <div ml-20px mr-20px cursor-pointer class="item">首页</div>
        <div ml-20px mr-20px cursor-pointer class="item">联系我</div>
        <div
          ml-20px
          mr-20px
          cursor-pointer
          class="item"
          @click="toggleDark()"
          :key="Math.random()"
        >
          <Icon
            v-if="!isDark"
            name="material-symbols:dark-mode-outline-rounded"
            class="dark:color-lightColor light:color-darkColor"
          />
          <Icon
            v-if="isDark"
            name="material-symbols:light-mode-outline-rounded"
            class="dark:color-lightColor light:color-darkColor"
          />
        </div>
      </div>
    </div>
  </header>
</template>
