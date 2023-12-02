<template>
    <div class="w-screen flex justify-end">
        <UButton class="m-3" :icon="isDark ? 'i-fontisto-lightbulb' : 'i-fontisto-night-clear'" size="lg"
            color="fountain"
            @click="isDark = !isDark">
        </UButton>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<style scoped></style>