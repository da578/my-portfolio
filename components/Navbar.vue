<template>
  <nav class="fixed z-50 w-full bg-white shadow-sm dark:bg-gray-800">
    <div class="container px-6 py-4 mx-auto">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold gradient-text">Portfolio</NuxtLink>
        <div class="flex items-center space-x-6">
          <!-- Theme Toggle -->
          <button @click="toggleTheme" class="p-2 rounded-full theme-toggle focus:outline-none">
            <LucideMoon v-if="isDark" />
            <LucideSun v-else class="text-gray-700" />
          </button>

          <!-- Desktop menu -->
          <div class="hidden space-x-8 md:flex">
            <NuxtLink v-for="header in headers" :to="header.link">{{ header.name }}</NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-800 md:hidden dark:text-gray-200 focus:outline-none">
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="mobileMenuOpen" class="mt-4 md:hidden">
        <div class="flex flex-col space-y-3">
          <NuxtLink v-for="header in headers" :to="header.link" @click="mobileMenuOpen = false">{{ header.name }}</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const headers = [
  {
    name: 'Home',
    link: '#home'
  },
  {
    name: 'About',
    link: '#about'
  },
  {
    name: 'Skills',
    link: '#skills'
  },
  {
    name: 'Projects',
    link: '#projects'
  },
  {
    name: 'Contact',
    link: '#contact'
  },
] 

const isDark = ref(false)
const mobileMenuOpen = ref(false)

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>