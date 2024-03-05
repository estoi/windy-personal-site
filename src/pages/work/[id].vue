<script setup>
const { params } = useRoute();
</script>

<template>
  <ul class="text-base text-gray-600">
    <li>
      获取到的 id 是 <span class="text-green-500 text-xl">{{ params.id }}</span>
    </li>
  </ul>
</template>