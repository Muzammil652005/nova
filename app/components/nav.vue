<template>
  <nav class="navbar-bg fixed top-0 left-0 w-full z-50">
    <div class="navbar-box">

      <!-- LOGO -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
          src="/img/novadesk.webp"
          alt="Novadesk Logo"
          class="h-12 w-auto object-contain"
        />
        <!-- <span class="text-sm text-secondary">Where Your Business Begins</span> -->
      </NuxtLink>

      <!-- DESKTOP MENU -->
      <ul class="hidden md:flex items-center gap-10 text-[17px] font-medium">
        <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
        <NuxtLink to="/services" class="hover:text-primary">Service</NuxtLink>
        <NuxtLink to="/plans" class="hover:text-primary">Plans</NuxtLink>
        <NuxtLink to="/about-us" class="hover:text-primary">About Us</NuxtLink>
        <NuxtLink to="/contact-us" class="hover:text-primary">Contact Us</NuxtLink>
      </ul>

      <!-- RIGHT ACTIONS -->
      <div class="hidden md:flex items-center gap-4">
        <button class="flex items-center gap-2 font-medium text-secondary">
          <span class="icon-[solar--phone-outline] text-xl"></span> Call Us
        </button>

        <NuxtLink
          to="/contact-us"
          class="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/80"
        >
          Lets Talk
        </NuxtLink>
      </div>

      <!-- MOBILE MENU ICON -->
      <button @click="toggleMobileMenu" class="md:hidden text-3xl text-secondary">
        <span class="icon-[solar--menu-burger-linear]"></span>
      </button>
    </div>

    <!-- MOBILE DROPDOWN -->
    <transition name="slide-fade">
      <div
        v-if="mobileMenu"
        class="md:hidden w-full bg-white flex flex-col gap-4 px-6 py-5 shadow-xl"
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
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const mobileMenu = ref(false);
const toggleMobileMenu = () => (mobileMenu.value = !mobileMenu.value);
</script>

<style scoped>

/* 🌸 BACKGROUND LIKE FIRST IMAGE */
.navbar-bg {
  background: linear-gradient(to right, #ffe5e5, #fff4f4);
}

/* 🌸 CENTERED ROUNDED BOX */
.navbar-box {
  max-width: 1140px;
  margin: 20px auto;
  padding: 12px 24px;

  background: white;
  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 8px 22px rgba(255, 100, 80, 0.18);
  border: 1px solid rgba(255, 120, 100, 0.25);

  backdrop-filter: blur(6px);
}

/* Mobile animation */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .25s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
