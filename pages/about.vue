<template>
  <main>
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-1 mt-16 text-center">
        <h1
          class="font-['Oswald'] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-teal-600 to-transparent"
        >
          FRONT
        </h1>
      </div>
      <div class="col-span-1 mt-16 text-center">
        <h1
          class="font-['Oswald'] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-purple-900 to-transparent"
        >
          BACK
        </h1>
      </div>
      <div class="col-span-1 mt-16 text-center">
        <h1
          class="font-['Oswald'] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-amber-600 to-transparent"
        >
          CLOUD
        </h1>
      </div>
      <div class="col-span-1 mt-16 text-center">
        <h1
          class="font-['Oswald'] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-cyan-600 to-transparent"
        >
          TOOLS
        </h1>
      </div>
      <div class="col-span-1 text-center mt-[-8rem]">
        <h1
          v-for="(skill, index) in skillStore.front"
          :key="index"
          class="text-4xl font-semibold my-4 tracking-widest"
        >
          {{ skill.name }}
        </h1>
      </div>
      <div class="col-span-1 text-center mt-[-8rem]">
        <h1
          v-for="(skill, index) in skillStore.back"
          :key="index"
          class="text-4xl font-semibold my-4 tracking-widest"
        >
          {{ skill.name }}
        </h1>
      </div>
      <div class="col-span-1 text-center mt-[-8rem]">
        <h1
          v-for="(skill, index) in skillStore.cloud"
          :key="index"
          class="text-4xl font-semibold my-4 tracking-widest"
        >
          {{ skill.name }}
        </h1>
      </div>
      <div class="col-span-1 text-center mt-[-8rem]">
        <h1
          v-for="(skill, index) in skillStore.devs"
          :key="index"
          class="text-4xl font-semibold my-4 tracking-widest"
        >
          {{ skill.name }}
        </h1>
      </div>
      <div class="col-span-1"></div>
      <div class="col-span-1"></div>
      <div class="col-span-1"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useSkillStore } from "~/stores/skillStore";

const skillStore = useSkillStore();
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
</style>
