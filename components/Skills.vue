<template>
    <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-900">
        <div class="container px-6 mx-auto">
            <h2 class="mb-4 text-3xl font-bold text-center fade-in">My <span class="gradient-text">Skills</span></h2>
            <p class="max-w-2xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300 fade-in">My development
                toolkit includes a range of modern technologies and frameworks that allow me to build high-quality,
                scalable, and user-friendly web and mobile applications tailored to each project’s needs. </p>
            <div class="grid grid-cols-2 gap-6 md:grid-cols-4 fade-in">
                <!-- Frontend Skills -->
                <div class="p-6 bg-white shadow-sm dark:bg-gray-800 rounded-xl">
                    <div class="flex items-center mb-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 mr-3 bg-blue-100 rounded-full dark:bg-blue-900/30">
                            <LucideLaptop class="text-blue-500" />
                        </div>
                        <h3 class="font-semibold">Programming Language</h3>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="programmingLanguage in programmingLanguages"
                            class="px-3 py-1 text-sm text-blue-600 rounded-full skill-badge bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300">{{
                                programmingLanguage }}
                        </span>
                    </div>
                </div>
                <!-- Framework -->
                <div class="p-6 bg-white shadow-sm dark:bg-gray-800 rounded-xl">
                    <div class="flex items-center mb-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 mr-3 bg-purple-100 rounded-full dark:bg-purple-900/30">
                            <LucideServer class="text-purple-500" />
                        </div>
                        <h3 class="font-semibold">Framework</h3>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="framework in frameworks"
                            class="px-3 py-1 text-sm text-purple-600 rounded-full skill-badge bg-purple-50 dark:bg-purple-900/30 dark:text-purple-300">{{
                            framework }}</span>
                    </div>
                </div>
                <!-- Tools -->
                <div class="p-6 bg-white shadow-sm dark:bg-gray-800 rounded-xl">
                    <div class="flex items-center mb-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 mr-3 bg-green-100 rounded-full dark:bg-green-900/30">
                            <LucideDraftingCompass class="text-green-500" />
                        </div>
                        <h3 class="font-semibold">Tools</h3>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tool in tools"
                            class="px-3 py-1 text-sm text-green-600 rounded-full skill-badge bg-green-50 dark:bg-green-900/30 dark:text-green-300">{{
                            tool }}</span>
                    </div>
                </div>
                <!-- Other -->
                <div class="p-6 bg-white shadow-sm dark:bg-gray-800 rounded-xl">
                    <div class="flex items-center mb-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 mr-3 bg-yellow-100 rounded-full dark:bg-yellow-900/30">
                            <LucideStar class="text-yellow-500" />
                        </div>
                        <h3 class="font-semibold">Other</h3>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="other in others"
                            class="px-3 py-1 text-sm text-yellow-600 rounded-full skill-badge bg-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-300">{{
                                other }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const programmingLanguages = [
    'Dart', 'TypeScript', 'JavaScript', 'Go', 'C', 'C++', 'C#', 'PHP'
]

const frameworks = [
    'Flutter', 'Nuxt ', 'Elysia', 'Vue.js', 'Laravel', 'DaisyUI'
]

const tools = [
    'Visual Studio Code', 'Visual Studio', 'Laragon', 'GitHub', 'Git', 'Postman', 'Canva'
]

const others = ['UI/UX', 'Testing']
</script>