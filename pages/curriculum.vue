<template>
  <div>
    <div class="flex row">
      <div class="h-screen w-1/4 flex justify-center items-center">
        <h1 class="text-3xl">HOLA</h1>
      </div>

      <div class="h-screen w-3/4 flex justify-center items-center flex-col">
        <h1
          class=" font-['Oswald'] text-[400px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-teal-600 to-transparent"
        >
          FRONT
        </h1>
        <div class="mt-[-20rem]">
          <h1
            v-for="(skill, index) in skillStore.front"
            :key="index"
            class="text-4xl my-4 tracking-widest"
            :class="skill.font"
          >
            {{ skill.name }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSkillStore } from "~/stores/skillStore";

const skillStore = useSkillStore();
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Afacad:wght@500&family=Agbalumo&family=Anton&family=Belanosima&family=Dhurjati&family=Gabarito:wght@600&family=Josefin+Sans:ital,wght@1,600&family=Merriweather:wght@700&family=Oswald:wght@700&family=Oxygen:wght@700&family=Square+Peg&display=swap');
</style>