<template>
    <section id="projects" class="py-20 bg-white dark:bg-gray-800">
        <div class="container px-6 mx-auto">
            <h2 class="mb-4 text-3xl font-bold text-center fade-in">My <span class="gradient-text">Projects</span></h2>
            <p class="max-w-2xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300 fade-in">These are some of
                the projects I’ve worked on recently. They reflect my journey through various technologies and domains,
                always aiming to solve problems efficiently and creatively.</p>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 fade-in">
                <div v-for="project in projects.slice(0, limit)" :key="project.name"
                    class="overflow-hidden transition bg-white shadow-md project-card dark:bg-gray-900 rounded-xl hover:shadow-xl">
                    <div class="h-48 overflow-hidden">
                        <img :src="project.image" :alt="project.name"
                            class="object-cover w-full h-full transition duration-500 hover:scale-110">
                    </div>
                    <div class="p-6">
                        <div class="flex items-start justify-between mb-2">
                            <h3 class="text-xl font-semibold">{{ project.name }}</h3>
                            <span
                                class="px-2 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">{{
                                    project.label }}</span>
                        </div>
                        <p class="mb-4 text-gray-600 dark:text-gray-300">{{ project.description }}</p>
                        <div class="flex items-center justify-between">
                            <a :href="project.link"
                                class="font-medium text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">View
                                Project</a>
                            <a :href="project.link" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <LucideGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 text-center fade-in">
                <button @click="showAll = !showAll"
                    class="inline-flex items-center px-6 py-3 font-medium transition border border-gray-300 rounded-full dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <LucideArchive class="mr-2" />
                    {{ showAll ? 'Show Less' : 'View All Projects' }}
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const projects = [
    {
        image: 'assets/images/todayly.png',
        name: 'ToDayLy',
        description: 'A simple yet powerful to-do list app built with Flutter, designed to help users manage tasks efficiently with features like notifications, task prioritization, and a clean, modern UI.',
        label: 'Flutter',
        link: 'https://github.com/da578/todayly'
    },
    {
        image: 'assets/images/dart.png',
        name: 'YAML API Dart',
        description: 'A Dart REST API using YAML instead of JSON for all responses.',
        label: 'Dart',
        link: 'https://github.com/da578/yaml_api_dart'
    },
    {
        image: 'assets/images/dart.png',
        name: 'Dart Reimplementation',
        description: 'A C-based reimplementation of Dart\'s core data structures (List, Set, Map) for educational and systems programming use cases. This project provides a hands-on exploration of memory management, function pointers, and modular C design to simulate object-oriented behavior in a low-level language.',
        label: 'Laravel',
        link: 'https://github.com/da578/dart-reimplementation'
    },
    {
        image: 'assets/images/laravel.png',
        name: 'PPDB SWD',
        description: 'A Laravel-based website developed during a 5-month internship at SMK Swadhipa 2 Natar. This system streamlines the new student enrollment (PPDB) process by digitizing registration, data validation, document submission, and administrative management. The application provides separate user roles (admin, students), real-time data tracking, and form validation to ensure smooth operation for both applicants and school staff.',
        label: 'Laravel',
        link: 'https://github.com/da578/ppdb-swd'
    },
    {
        image: 'assets/images/laravel.png',
        name: 'Prestasi SWD',
        description: 'A Laravel-built information system created as part of a 5-month internship program at SMK Swadhipa 2 Natar. This web application serves as a centralized database for recording, managing, and displaying student achievements. It allows teachers and administrators to easily add, edit, and showcase academic and extracurricular accomplishments, improving transparency and documentation efficiency within the school environment.',
        label: 'Laravel',
        link: 'https://github.com/da578/prestasi-swd'
    }
]

const showAll = ref(false)
const limit = computed(() => showAll.value ? projects.length : 3)
</script>