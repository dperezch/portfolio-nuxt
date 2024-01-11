<template>
  <div>
    <div class="flex lg:flex-row flex-col max-md:pt-11">
      <div class="lg:h-screen lg:w-1/4 flex justify-center items-center">
        <div class="flex lg:flex-col">
          <button
            class="my-5 lg:text-xl text-sm font-semibold transition-all duration-200 ease-in-out text-left pr-5"
            :class="front === true ? 'lg:border-r-8 border-fountain-700' : 'text-slate-500'"
            @click="change('front')"
          >
            Front-end
          </button>
          <button
            class="my-5 lg:text-xl text-sm font-semibold transition-all duration-200 ease-in-out text-left pr-5"
            :class="back === true ? 'lg:border-r-8 border-purple-700' : 'text-slate-500'"
            @click="change('back')"
          >
            Back-end
          </button>

          <button
            class="my-5 lg:text-xl text-sm font-semibold transition-all duration-200 ease-in-out text-left pr-5"
            :class="cloud === true ? 'lg:border-r-8 border-amber-600' : 'text-slate-500'"
            @click="change('cloud')"
          >
            Cloud Computing
          </button>

          <button
            class="my-5 lg:text-xl text-sm font-semibold transition-all duration-200 ease-in-out text-left pr-5"
            :class="devs === true ? 'lg:border-r-8 border-cyan-600' : 'text-slate-500'"
            @click="change('devs')"
          >
            Dev Tools
          </button>
          
        </div>
      </div>

      <!-- comienza skill -->

      <!-- FRONT -->
      <div
        v-show="front"
        class="lg:h-screen lg:w-3/4 flex justify-center items-center flex-col"
      >
        <h1
          class="lg:mt-[-15rem] mt-[-1rem] font-['Oswald'] lg:text-[400px] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-teal-600 to-transparent"
        >
          FRONT
        </h1>
        <div class="lg:mt-[-20rem] mt-[-8rem] flex lg:flex-row flex-col flex-wrap">
          <h1
            v-for="(skill, index) in skillStore.front"
            :key="index"
            class="lg:text-4xl font-bold my-4 tracking-widest m-7"
            :class="skill.font"
          >
            {{ skill.name }}
          </h1>
        </div>
      </div>

      <!-- BACK -->
      <div
        v-show="back"
        class="lg:h-screen lg:w-3/4 flex justify-center items-center flex-col"
      >
        <h1
          class="lg:mt-[-15rem] mt-[-1rem] font-['Oswald'] lg:text-[400px] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-purple-900 to-transparent"
        >
          BACK
        </h1>
        <div class="lg:mt-[-20rem] mt-[-8rem] flex lg:flex-row flex-col flex-wrap">
          <h1
            v-for="(skill, index) in skillStore.back"
            :key="index"
            class="lg:text-4xl font-bold my-4 tracking-widest m-7"
          >
            {{ skill.name }}
          </h1>
        </div>
      </div>

      <!-- CLOUD -->
      <div
        v-show="cloud"
        class="lg:h-screen lg:w-3/4 flex justify-center items-center flex-col"
      >
        <h1
          class="lg:mt-[-15rem] mt-[-1rem] font-['Oswald'] lg:text-[400px] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-amber-600 to-transparent"
        >
          CLOUD
        </h1>
        <div class="lg:mt-[-20rem] mt-[-8rem] flex lg:flex-row flex-col flex-wrap">
          <h1
            v-for="(skill, index) in skillStore.cloud"
            :key="index"
            class="lg:text-4xl font-bold my-4 tracking-widest m-7"
          >
            {{ skill.name }}
          </h1>
        </div>
      </div>

      <!-- DEV -->
      <div
        v-if="devs"
        class="lg:h-screen lg:w-3/4 flex justify-center items-center flex-col"
      >
        <h1
          class="lg:mt-[-15rem] mt-[-1rem] font-['Oswald'] lg:text-[400px] text-[140px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-cyan-600 to-transparent"
        >
          TOOLS
        </h1>
        <div class="lg:mt-[-20rem] mt-[-8rem] flex lg:flex-row flex-col flex-wrap">
          <h1
            v-for="(skill, index) in skillStore.devs"
            :key="index"
            class="lg:text-4xl font-bold my-4 tracking-widest m-7"
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
const front = ref(true);
const back = ref(false);
const cloud = ref(false)
const devs = ref(false)

const change = (key: string) => {
  switch (key) {
    case "back":
      back.value = true;
      front.value = false;
      cloud.value = false;
      devs.value = false;
      break;
    case "front":
      front.value = true;
      back.value = false;
      cloud.value = false;
      devs.value = false;
      break;
    case "cloud":
      cloud.value = true;
      front.value = false;
      back.value = false;
      devs.value = false;
      break;
    case "devs":
      devs.value = true;
      cloud.value = false;
      front.value = false;
      back.value = false;
      break;
    default:
      break;
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Afacad:wght@500&family=Agbalumo&family=Anton&family=Belanosima&family=Dhurjati&family=Gabarito:wght@600&family=Josefin+Sans:ital,wght@1,600&family=Merriweather:wght@700&family=Oswald:wght@700&family=Oxygen:wght@700&family=Square+Peg&display=swap");
</style>
