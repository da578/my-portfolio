<template>
  <!-- Hero Section -->
  <section id="home" class="flex items-center min-h-screen pt-20">
    <div class="container flex flex-col items-center px-6 py-20 mx-auto md:py-32 md:flex-row">
      <div class="mb-12 md:w-1/2 md:mb-0 fade-in">
        <h1 class="mb-4 text-4xl font-bold md:text-6xl">Hi, I'm <span class="gradient-text">Dzulkifli Anwar</span></h1>
        <h2 class="mb-6 text-2xl font-semibold md:text-3xl">Software Engineer</h2>
        <p class="max-w-lg mb-8 text-gray-600 dark:text-gray-300">Software Engineer & Cross-Platform Developer from
          Pesawaran, Lampung, Indonesia
          I build modern, responsive web applications and cross-platform mobile apps using Flutter , focusing on clean
          code and user-centered design.
          Let's craft something amazing together! </p>
        <div class="flex space-x-4">
          <a href="#contact"
            class="px-6 py-3 font-medium text-white transition rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90">Hire
            Me</a>
          <a href="#projects"
            class="px-6 py-3 font-medium transition border border-gray-300 rounded-full dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">View
            Work</a>
        </div>
      </div>
      <div class="flex justify-center md:w-1/2 fade-in">
        <div class="relative hero-image">
          <div
            class="flex items-center justify-center w-64 h-64 rounded-full md:w-80 md:h-80 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
            <img src="/images/profile.png" alt="Profile"
              class="object-cover border-4 border-white rounded-full w-60 h-60 md:w-72 md:h-72 dark:border-gray-800">
          </div>
          <div class="absolute p-3 bg-white rounded-full shadow-lg -bottom-5 -right-5 dark:bg-gray-800">
            <div
              class="flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600">
              <LucideCode class="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>