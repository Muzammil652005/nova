<template>
  <section class="h-auto sticky z-10 flex items-center justify-center">
    <nav class="navst">
      <NuxtImg class="max-md:h-6 md:h-10 w-auto" src="/img/novadesk.webp" />

      <ul class="nav-links">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services">Service</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/plans">Plans</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about-us">About Us</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact-us">Contact Us</NuxtLink>
        </li>
      </ul>

      <span class="flex items-center gap-x-3">
        <template v-if="!loggedIn">
          <button class="btn btn-ghost group/call hidden lg:flex">
            <span
              class="icon-[solar--phone-calling-linear] text-lg group-hover/call:rotate-12 transition-all duration-200 ease-linear"
            ></span>
            Call Us
          </button>

          <button class="btn btn-primary hidden md:flex">Lets Talk</button>
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

  <div
    :class="mobileNav ? 'left-0' : '-left-full'"
    class="absolute top-0 h-dvh w-screen z-50 bg-white/10 backdrop-blur-2xl flex flex-col items-start py-6 transition-all duration-300 ease-in-out"
  >
    <ul class="mobile_nav w-full">
      <li
        @click="mobileNav = !mobileNav"
        class="w-full flex items-center justify-between"
      >
        <p>Close</p>
        <span class="icon-[material-symbols--close-rounded]"></span>
      </li>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/services">Service</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/plans">Plans</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about-us">About Us</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const mobileNav = ref(false);
const { loggedIn } = useUserSession();
</script>
