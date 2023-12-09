<template>
  <main class="p-7 flex flex-row">
    <div class="flex flex-col items-center justify-center">
      <!-- primera -->
      <div class="flex row mt-8">
        <div class="mx-16">
          <h1
            class="font-['Oswald'] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-teal-600 to-transparent"
          >
            FRONT
          </h1>
        </div>
        <div class="mx-16">
          <h1
            class="font-['Oswald'] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-purple-900 to-transparent"
          >
            BACK
          </h1>
        </div>
      </div>
      <!-- segunda -->
      <div class="mt-[-12rem] text-xl flex row">
        <div class="mr-52 text-center">
          <h1 v-for="(skill, index) in skillStore.front" :key="index" class="text-4xl font-semibold my-4 tracking-widest">
            {{ skill.name }}
          </h1>
        </div>
        <div class="ml-52">
          <h1 v-for="(skill, index) in skillStore.back" :key="index" class="text-4xl font-semibold my-4 tracking-widest">
            {{ skill.name }}
          </h1>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <!-- primera -->
      <div class="flex row mt-8">
        <div class="mx-16">
          <h1
            class="font-['Oswald'] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-amber-600 to-transparent"
          >
            CLOUD
          </h1>
        </div>
        <div class="mx-16">
          <h1
            class="font-['Oswald'] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-cyan-600 to-transparent"
          >
            TOOLS
          </h1>
        </div>
      </div>
      <!-- segunda -->
      <div class="mt-[-12rem] text-xl flex row">
        <div class="mr-52 text-center">
          <h1 v-for="(skill, index) in skillStore.cloud" :key="index" class="text-4xl font-semibold my-4 tracking-widest">
            {{ skill.name }}
          </h1>
        </div>
        <div class="ml-52">
          <h1 v-for="(skill, index) in skillStore.devs" :key="index" class="text-4xl font-semibold my-4 tracking-widest">
            {{ skill.name }}
          </h1>
        </div>
      </div>
    </div>

    
  </main>
</template>

<script setup lang="ts">
import { useSkillStore } from '~/stores/skillStore';

const skillStore = useSkillStore()
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
</style>
