<template>
    <section id="about" class="py-20 bg-white dark:bg-gray-800">
        <div class="container px-6 mx-auto">
            <h2 class="mb-16 text-3xl font-bold text-center fade-in">About <span class="gradient-text">Me</span></h2>
            <div class="flex flex-col items-center gap-12 md:flex-row fade-in">
                <div class="flex justify-center md:w-1/3">
                    <div class="w-64 h-64 overflow-hidden shadow-lg rounded-xl">
                        <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Working" class="object-cover w-full h-full">
                    </div>
                </div>
                <div class="md:w-2/3">
                    <h3 class="mb-4 text-2xl font-semibold">Who am I?</h3>
                    <p class="mb-6 text-gray-600 dark:text-gray-300">I'm a passionate software engineer and
                        cross-platform developer from Pesawaran, Lampung, Indonesia.
                        With a strong foundation in both frontend and mobile development, I specialize in building
                        modern web applications using Vue.js and Nuxt.js,
                        as well as creating high-performance cross-platform mobile apps with Flutter.</p>
                    <div class="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                        <div>
                            <h4 class="flex items-center mb-2 font-medium">
                                <LucideUser class="mr-2 text-blue-500" />
                                <span>Personal Info</span>
                            </h4>
                            <ul class="space-y-1 text-gray-600 dark:text-gray-300">
                                <li><strong>Name:</strong> Dzulkifli Anwar</li>
                                <li><strong>Age:</strong>{{ age }}</li>
                                <li><strong>Email:</strong> dzulkiflianwar2@gmail.com</li>
                                <li><strong>Location:</strong>Lampung, Indonesia</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="flex items-center mb-2 font-medium">
                                <LucideGraduationCap class="mr-2 text-purple-500" />
                                <i class="mr-2 text-purple-500 fas fa-graduation-cap"></i>
                                <span>Education</span>
                            </h4>
                            <ul class="space-y-1 text-gray-600 dark:text-gray-300">
                                <li><strong>2022-2025:</strong> SMK Swadhipa 2 Natar</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-4">
                        <a href="#"
                            class="flex items-center px-4 py-2 text-blue-600 rounded-full bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300">
                            <LucideDownload class="mr-2" />
                            Download CV
                        </a>
                        <a href="#contact"
                            class="flex items-center px-4 py-2 text-purple-600 rounded-full bg-purple-50 dark:bg-purple-900/30 dark:text-purple-300">
                            <LucideSend class="mr-2" />
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const age = ref(new Date().getFullYear() - 2006)
</script>