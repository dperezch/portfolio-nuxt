<template>
  <nav
    class="fixed z-50 w-screen dark:bg-fountain-950 bg-fountain-50 border-b dark:border-fountain-600 border-fountain-400"
  >
    <!-- DESKTOP -->
    <div class="px-2 sm:px-6 lg:px-8">
      <div
        class="relative flex h-12 md:h-16 lg:h-16 items-center justify-between"
      >
        <!-- BOTÓN MENU MOBILE -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-fountain-950 dark:text-fountain-500 hover:bg-fountain-700 hover:text-fountain-50 dark:hover:bg-fountain-500 dark:hover:text-fountain-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="setMenuMobile"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- LINKS NAVBAR DESKTOP -->
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <!-- DESKTOP -->
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <NuxtLink
                v-for="(link, index) in navbarStore.links"
                :key="index"
                :to="link.href"
                exactActiveClass="text-fountain-100 dark:text-gray-950 bg-gradient-to-r from-fountain-600 to-fountain-800 dark:bg-gradient-to-r dark:from-fountain-400 dark:to-fountain-600 "
                class="hover:text-fountain-50 dark:text-fountain-200 hover:bg-fountain-600 dark:hover:bg-fountain-300 dark:hover:text-fountain-950 rounded-md px-3 py-2 font-medium text-sm"
                aria-current="page"
              >
                {{ link.name }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- BOTÓN DARMODE -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- DARK MODE BUTTON -->
          <button
            type="button"
            class="relative rounded-full dark:bg-fountain-950 bg-fountain-50 p-1 dark:text-fountain-400 text-fountain-900 dark:hover:text-white hover:text-black"
            @click="isDark = !isDark"
          >
            <UIcon
              class="h-5 w-5"
              :name="isDark ? 'i-fontisto-lightbulb' : 'i-fontisto-night-clear'"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu" v-if="mobile">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <NuxtLink
          v-for="(link, index) in navbarStore.links"
          :key="index"
          @click="setNavigationMobile(link.href)"
          class="text-fountain-600 hover:bg-fountain-700 hover:text-fountain-50 block rounded-md px-3 py-2 text-base font-medium"
          exactActiveClass="text-fountain-100  bg-fountain-900 dark:bg-fountain-600"
          aria-current="page"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const navbarStore = useNavbarStore();
const mobile = ref(false);

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const setMenuMobile = () => {
  mobile.value = !mobile.value;
};

const setNavigationMobile = async (path: string) => {
  mobile.value = false;
  await navigateTo(`${path}`);
};
</script>

<style scoped></style>
