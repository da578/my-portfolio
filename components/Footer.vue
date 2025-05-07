<template>
    <footer class="py-12 text-white bg-gray-900">
        <div class="container px-6 mx-auto">
            <div class="flex flex-col items-center justify-between md:flex-row">
                <div class="mb-6 md:mb-0">
                    <a href="#" class="text-2xl font-bold gradient-text">Portfolio</a>
                    <p class="mt-2 text-gray-400">© {{ new Date().getFullYear() }} Dzulkifli Anwar. All rights reserved.
                    </p>
                </div>

                <div class="flex space-x-6">
                    <a href="#home" class="text-gray-400 transition hover:text-white">Home</a>
                    <a href="#about" class="text-gray-400 transition hover:text-white">About</a>
                    <a href="#skills" class="text-gray-400 transition hover:text-white">Skills</a>
                    <a href="#projects" class="text-gray-400 transition hover:text-white">Projects</a>
                    <a href="#contact" class="text-gray-400 transition hover:text-white">Contact</a>
                </div>
            </div>

            <div class="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
                <p>Crafted with precision by DeepSite • Powered by Nuxt 3 </p>
            </div>
        </div>
    </footer>
</template>