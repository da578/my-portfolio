<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container px-6 mx-auto">
      <h2 class="mb-4 text-3xl font-bold text-center fade-in">Get In <span class="gradient-text">Touch</span></h2>
      <p class="max-w-2xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300 fade-in">
        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
      </p>
      <div class="flex flex-col gap-12 md:flex-row fade-in">
        <!-- Contact Form -->
        <div class="md:w-1/2">
          <div class="p-8 bg-white shadow-sm dark:bg-gray-800 rounded-xl">
            <h3 class="mb-6 text-xl font-semibold">Send me a message</h3>
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="block mb-2 text-gray-700 dark:text-gray-300">Your Name</label>
                <input type="text" id="name" v-model="formData.name"
                  class="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  required />
              </div>
              <div class="mb-4">
                <label for="email" class="block mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
                <input type="email" id="email" v-model="formData.email"
                  class="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  required />
              </div>
              <div class="mb-4">
                <label for="subject" class="block mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" v-model="formData.subject"
                  class="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  required />
              </div>
              <div class="mb-6">
                <label for="message" class="block mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" v-model="formData.message" rows="4"
                  class="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  required></textarea>
              </div>
              <button :disabled="sending" type="submit"
                class="w-full px-6 py-3 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <!-- Contact Info -->
        <div class="md:w-1/2">
          <div class="h-full p-8 bg-white shadow-sm dark:bg-gray-800 rounded-xl">
            <h3 class="mb-6 text-xl font-semibold">Contact Information</h3>
            <p class="mb-8 text-gray-600 dark:text-gray-300">
              I'm available for freelance work and full-time positions. Don't hesitate to contact me for any inquiries.
            </p>
            <div class="space-y-6">
              <!-- Location -->
              <div class="flex items-start">
                <div
                  class="flex items-center justify-center w-10 h-10 mt-1 mr-4 bg-blue-100 rounded-full dark:bg-blue-900/30">
                  <LucideMapPin class="text-blue-500" />
                </div>
                <div>
                  <h4 class="font-medium">Location</h4>
                  <p class="text-gray-600 dark:text-gray-300">Lampung, Indonesia</p>
                </div>
              </div>
              <!-- Email -->
              <div class="flex items-start">
                <div
                  class="flex items-center justify-center w-10 h-10 mt-1 mr-4 bg-purple-100 rounded-full dark:bg-purple-900/30">
                  <LucideMail class="text-purple-500" />
                </div>
                <div>
                  <h4 class="font-medium">Email</h4>
                  <p class="text-gray-600 dark:text-gray-300">dzulkiflianwar2@gmail.com</p>
                </div>
              </div>
              <!-- Phone -->
              <div class="flex items-start">
                <div
                  class="flex items-center justify-center w-10 h-10 mt-1 mr-4 bg-green-100 rounded-full dark:bg-green-900/30">
                  <LucidePhone class="text-green-500" />
                </div>
                <div>
                  <h4 class="font-medium">Phone</h4>
                  <p class="text-gray-600 dark:text-gray-300">+62 (878) 7823-5416</p>
                </div>
              </div>
              <!-- Working Hours -->
              <div class="flex items-start">
                <div
                  class="flex items-center justify-center w-10 h-10 mt-1 mr-4 bg-yellow-100 rounded-full dark:bg-yellow-900/30">
                  <LucideClock class="text-yellow-500" />
                  <i class="text-yellow-500 fas fa-clock"></i>
                </div>
                <div>
                  <h4 class="font-medium">Working Hours</h4>
                  <p class="text-gray-600 dark:text-gray-300">Mon-Fri: 9AM - 5PM</p>
                </div>
              </div>
            </div>
            <!-- Social Media -->
            <div class="mt-8">
              <h4 class="mb-4 font-medium">Follow Me</h4>
              <div class="flex space-x-4">
                <a href="https://www.linkedin.com/in/dzulkifli-anwar/"
                  class="flex items-center justify-center w-10 h-10 text-gray-600 transition bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600">
                  <LucideLinkedin />
                </a>
                <a href="https://github.com/da578"
                  class="flex items-center justify-center w-10 h-10 text-gray-600 transition bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-600">
                  <LucideGithub />
                </a>
                <a href="https://www.instagram.com/dzul_578/"
                  class="flex items-center justify-center w-10 h-10 text-gray-600 transition bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-300">
                  <LucideInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const sending = ref(false)
const responseMessage = ref('')

const submitForm = async () => {
  // if (!formData.value.name || !formData.value.email || !formData.value.message) {
  //   responseMessage.value = 'Please fill all required fields.'
  //   return
  // }

  // sending.value = true
  // responseMessage.value = ''

  // try {
  //   await useFetch('/api/send-email', {
  //     method: 'POST',
  //     body: formData.value
  //   })

  //   responseMessage.value = 'Pesan berhasil dikirim!'
  //   formData.value = {
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   }
  // } catch (err) {
  //   responseMessage.value = 'Gagal mengirim pesan. Silakan coba lagi.'
  // } finally {
  //   sending.value = false
  // }
}
</script>