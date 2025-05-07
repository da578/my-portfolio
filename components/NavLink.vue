<template>
    <a :href="href" class="font-medium text-gray-800 nav-link dark:text-gray-200" @click="$emit('click')">
        <slot />
    </a>
</template>

<script setup>
defineProps({
    href: String
})
</script>