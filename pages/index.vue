<template>
  <main class="fixed z-0 flex flex-col justify-between w-full h-full">
    <div></div>
    <div class="flex items-center justify-around lg:flex-row flex-col">
      <div class="m-6">
        <section class="text-gray-700 dark:text-slate-300">
          <h1
            class="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-7xl text-gray-800 dark:text-slate-100"
          >
            David Pérez Ch<span class="text-fountain-600">.</span>
          </h1>
          <h2 class="text-2xl lg:text-3xl font-semibold">
            Programador Web Full-Stack
          </h2>
        </section>
        <section class="my-3 text-gray-700 dark:text-slate-400">
          <article class="text-lg font-normal">
            Experiencia en desarrollo de aplicaciones web utilizando tecnologías
            front-end y back-end.
          </article>
        </section>
      </div>
      <div class="m-6">
        <section>
          <UButton
            class="dark:hover:text-sky-300"
            icon="i-fontisto-github"
            size="xl"
            :color="isDark ? 'sky' : 'fountain'"
            square
            variant="link"
          />

          <UButton
            class="dark:hover:text-sky-300"
            icon="i-heroicons-envelope"
            size="xl"
            :color="isDark ? 'sky' : 'fountain'"
            square
            variant="link"
          />

          <UButton
            class="dark:hover:text-sky-300"
            icon="i-heroicons-chat-bubble-oval-left-ellipsis"
            size="xl"
            :color="isDark ? 'sky' : 'fountain'"
            square
            variant="link"
          />

          <UButton
            class="dark:hover:text-sky-300"
            icon="i-fontisto-linkedin"
            size="xl"
            :color="isDark ? 'sky' : 'fountain'"
            square
            variant="link"
          />
        </section>
      </div>
    </div>

    <!--Waves Container-->
    <footer class="self">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            :fill="isDark ? '#1e7380' : '#79e3e7'"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            :fill="isDark ? '#1d8e9d' : '#b0eff1'"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            :fill="isDark ? '#3bccd5' : '#d5f8f8'"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="7"
            :fill="isDark ? '#0f343d' : '#1fadb7'"
          />
        </g>
      </svg>
    </footer>
    <!--Waves end-->
  </main>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<style scoped>
.waves {
  /* position:relative; */
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}
/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
}
</style>
