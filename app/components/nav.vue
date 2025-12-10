<template>
  <!-- Navbar -->
  <section class="h-auto sticky top-0 z-50 flex items-center justify-center">
    <nav class="navst">
      <!-- Logo -->
      <NuxtLink to="/">
        <NuxtImg class="max-md:h-6 md:h-10 w-auto" src="/img/novadesk.webp" />
      </NuxtLink>

      <!-- Desktop Links -->
      <ul class="nav-links">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/services">Service</NuxtLink></li>
        <li><NuxtLink to="/plans">Plans</NuxtLink></li>
        <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
        <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
      </ul>

      <!-- Right Buttons -->
      <span class="flex items-center gap-x-3">
        <template v-if="!loggedIn">
          <!-- Call Us (Mobile Call Support) -->
          <a href="tel:+919876543210"
            class="btn btn-ghost group/call hidden lg:flex"
          >
            <span
              class="icon-[solar--phone-calling-linear] text-lg group-hover/call:rotate-12 transition-all duration-200 ease-linear"
            ></span>
            Call Us
          </a>

          <!-- Lets Talk Button -->
          <NuxtLink to="/contact-us" class="btn btn-primary hidden md:flex">
            Lets Talk
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileNav = !mobileNav"
            class="btn btn-primary btn-square max-md:flex hidden"
          >
            <span class="icon-[solar--hamburger-menu-linear] text-lg"></span>
          </button>
        </template>

        <template v-else>
          <NuxtLink to="/dashboard" class="btn btn-primary max-md:hidden flex">
            Dashboard
          </NuxtLink>
          <button
            @click="mobileNav = !mobileNav"
            class="btn btn-primary btn-square max-md:flex hidden"
          >
            <span class="icon-[solar--hamburger-menu-linear] text-lg"></span>
          </button>
        </template>
      </span>
    </nav>
  </section>

  <!-- Mobile Navigation Menu -->
  <div
    :class="mobileNav ? 'left-0 opacity-100' : '-left-full opacity-0'"
    class="fixed top-0 h-dvh w-screen z-50 bg-white/40 backdrop-blur-xl flex flex-col items-start py-6 transition-all duration-300 ease-in-out"
  >
    <ul class="mobile_nav w-full">
      <!-- Close Button -->
      <li
        @click="mobileNav = false"
        class="w-full flex items-center justify-between px-6"
      >
        <p>Close</p>
        <span class="icon-[material-symbols--close-rounded]"></span>
      </li>

      <!-- Mobile Links -->
      <li><NuxtLink @click="mobileNav=false" to="/">Home</NuxtLink></li>
      <li><NuxtLink @click="mobileNav=false" to="/services">Service</NuxtLink></li>
      <li><NuxtLink @click="mobileNav=false" to="/plans">Plans</NuxtLink></li>
      <li><NuxtLink @click="mobileNav=false" to="/about-us">About Us</NuxtLink></li>
      <li><NuxtLink @click="mobileNav=false" to="/contact-us">Contact Us</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup>
const mobileNav = ref(false)
const { loggedIn } = useUserSession()
</script>
