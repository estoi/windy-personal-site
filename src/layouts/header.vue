<script setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);

const goToPage = (path) => navigateTo(path)

</script>

<template>
  <header
    fixed
    left-0
    right-0
    h-80px
    flex
    justify-end
    flex-items-center
    pl-40px
    z-10
    class="layout-header-wrap"
  >
    <!-- <div
      w-40px
      h-40px
      border-rounded-50%
      overflow-hidden
      bg-gray-500
      class="avatar-wrap"
    >
      <img src="~/assets/images/avatar.jpeg" />
    </div> -->
    <div class="nav-wrap">
      <div flex flex-items-center class="list">
        <!-- <div ml-20px mr-20px cursor-pointer class="item" @click="goToPage('/')">首页</div>
        <div ml-20px mr-20px cursor-pointer class="item" @click="goToPage('/about')">联系我</div> -->
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
            size="30"
            class="dark:color-lightColor color-darkColor"
          />
          <Icon
            v-if="isDark"
            name="material-symbols:light-mode-outline-rounded"
            size="30"
            class="dark:color-lightColor color-darkColor"
          />
        </div>
      </div>
    </div>
  </header>
</template>
