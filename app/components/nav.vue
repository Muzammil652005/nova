<template>
  <nav class="navbar-wrapper fixed top-0 left-0 w-full z-50">
    <div class="navbar-box">

      <!-- LOGO -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
          src="/img/novadesk.webp"
          alt="Novadesk Logo"
          class="h-10 w-auto object-contain"
        />
      </NuxtLink>

      <!-- MOBILE HAMBURGER BUTTON (ONLY MOBILE) -->
      <button 
        @click="toggleMobileMenu" 
        class="hamburger-btn md:hidden"
      >
        <div class="burger-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <!-- DESKTOP MENU -->
      <ul class="hidden md:flex items-center gap-10 text-[17px] font-medium">
        <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
        <NuxtLink to="/services" class="hover:text-primary">Service</NuxtLink>
        <NuxtLink to="/plans" class="hover:text-primary">Plans</NuxtLink>
        <NuxtLink to="/about-us" class="hover:text-primary">About Us</NuxtLink>
        <NuxtLink to="/contact-us" class="hover:text-primary">Contact Us</NuxtLink>
      </ul>

      <!-- DESKTOP BUTTONS -->
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

    </div>

    <!-- MOBILE MENU DROPDOWN -->
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
/* Background like screenshot */
.navbar-wrapper {
  background: #ffd7d7;
  padding: 12px 0;
}

/* Rounded main navbar box */
.navbar-box {
  max-width: 600px;
  margin: 0 auto;
  padding: 12px 16px;

  background: white;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 4px 12px rgba(255, 100, 80, 0.25);
}

/* Desktop spacing */
@media (min-width: 768px) {
  .navbar-box {
    max-width: 1140px;
    margin-top: 10px;
    padding: 16px 24px;
  }
}

/* ---------- MOBILE HAMBURGER BUTTON ---------- */

.hamburger-btn {
  width: 50px;
  height: 42px;
  background: #f28b82;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 3 white horizontal bars */
.burger-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
}

.burger-lines span {
  width: 18px;
  height: 2.5px;
  background: white;
  border-radius: 2px;
}

/* FORCE HIDE HAMBURGER ON DESKTOP */
@media (min-width: 768px) {
  .hamburger-btn {
    display: none !important;
  }
}

/* Dropdown animation */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
