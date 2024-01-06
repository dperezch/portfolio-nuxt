<template>
  <main class="fixed z-0 flex row items-center justify-around w-full h-full">
    <div class="w-1/3">
      <fwb-carousel :pictures="pictures" slide/>
    </div>

    <div class="w-1/3">
      <fwb-carousel :pictures="pictures2" slide/>
    </div>
    
  </main>
</template>

<script setup lang="ts">
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  {src: '/app1_1.png', alt: 'Image 1'},
  {src: '/app1_2.png', alt: 'Image 2'},
  {src: '/app1_3.png', alt: 'Image 3'},
  {src: '/app1_4.png', alt: 'Image 4'},
]

const pictures2 = [
  {src: '/app2_0.png', alt: 'Image 0'},
  {src: '/app2_1.png', alt: 'Image 1'},
  {src: '/app2_2.png', alt: 'Image 2'},
  {src: '/app2_3.png', alt: 'Image 3'},
  {src: '/app2_4.png', alt: 'Image 4'},
  {src: '/app2_5.png', alt: 'Image 5'},
  {src: '/app2_6.png', alt: 'Image 6'},
  {src: '/app2_7.png', alt: 'Image 7'},
]
</script>

<style scoped></style>
