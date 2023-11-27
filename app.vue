<template>
  <div class="">
    <h1 class="text-8xl">PAGE</h1>
    <UButton @click="colorMode.value = 'dark'" class="mx-3">dark</UButton>
    <UButton @click="colorMode.value = 'light'" class="mx-3">light</UButton>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>

<style lang="postcss">
body {
  @apply bg-slate-50 dark:bg-gray-800
}
</style>