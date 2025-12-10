<template>
  <nav class="w-full bg-white border-b border-primary/20 shadow-sm fixed top-0 left-0 z-50">
    <div class="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-4">

      <!-- 🔹 LOGO -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
          src="~/assets/img/novadesk.webp"
          alt="Novadesk Logo"
          class="h-10 w-auto object-contain"
        />
      </NuxtLink>

      <!-- 🔹 DESKTOP MENU -->
      <ul class="hidden md:flex items-center gap-8 text-base font-medium">
        <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
        <NuxtLink to="/services" class="hover:text-primary">Service</NuxtLink>
        <NuxtLink to="/plans" class="hover:text-primary">Plans</NuxtLink>
        <NuxtLink to="/about-us" class="hover:text-primary">About Us</NuxtLink>
        <NuxtLink to="/contact-us" class="hover:text-primary">Contact Us</NuxtLink>
      </ul>

      <!-- 🔹 RIGHT SIDE -->
      <div class="hidden md:flex items-center gap-3">
        <button class="flex items-center gap-2 font-medium">
          <span class="icon-[solar--phone-outline] text-lg"></span> Call Us
        </button>

        <NuxtLink
          to="/contact-us"
          class="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/80"
        >
          Lets Talk
        </NuxtLink>
      </div>

      <!-- 🔹 MOBILE HAMBURGER -->
      <button @click="toggleMobileMenu" class="md:hidden text-2xl">
        <span class="icon-[solar--menu-burger-linear]"></span>
      </button>

    </div>

    <!-- 🔹 MOBILE MENU -->
    <div
      v-if="mobileMenu"
      class="md:hidden w-full bg-white flex flex-col gap-4 px-6 py-4 shadow-lg"
    >
      <NuxtLink @click="toggleMobileMenu" to="/" class="hover:text-primary">Home</NuxtLink>
      <NuxtLink @click="toggleMobileMenu" to="/services" class="hover:text-primary">Service</NuxtLink>
      <NuxtLink @click="toggleMobileMenu" to="/plans" class="hover:text-primary">Plans</NuxtLink>
      <NuxtLink @click="toggleMobileMenu" to="/about-us" class="hover:text-primary">About Us</NuxtLink>
      <NuxtLink @click="toggleMobileMenu" to="/contact-us" class="hover:text-primary">Contact Us</NuxtLink>

      <NuxtLink
        to="/contact-us"
        class="bg-primary text-white px-4 py-2 rounded-md text-center font-medium"
        @click="toggleMobileMenu"
      >
        Lets Talk
      </NuxtLink>
    </div>

  </nav>
</template>

<script setup>
import { ref } from "vue";

const mobileMenu = ref(false);
const toggleMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value;
};
</script>

<style scoped>
nav {
  backdrop-filter: blur(6px);
}
</style>
