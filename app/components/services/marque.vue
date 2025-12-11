<template>
  <section class="w-full h-auto min-h-[420px] pt-4 overflow-x-hidden">
    <div
      class="relative flex items-center justify-center bg-white border border-white overflow-hidden w-full"
    >
      <div class="marquee-container">
        <ul class="marquee-track items-center h-20">
          <li
            v-for="logo in logos"
            :key="logo.alt"
            class="w-40 flex items-center justify-center"
          >
            <img class="max-h-28" :src="logo.src" :alt="logo.alt" />
          </li>
          <!-- duplicate for seamless infinite scroll -->
          <li
            v-for="logo in logos"
            :key="logo.alt + '_2'"
            class="w-40 flex items-center justify-center"
          >
            <img class="max-h-28" :src="logo.src" :alt="logo.alt" />
          </li>
          <!-- duplicate for seamless infinite scroll -->
          <li
            v-for="logo in logos"
            :key="logo.alt + '_3'"
            class="w-40 flex items-center justify-center"
          >
            <img class="max-h-28" :src="logo.src" :alt="logo.alt" />
          </li>
          <!-- duplicate for seamless infinite scroll -->
          <li
            v-for="logo in logos"
            :key="logo.alt + '_4'"
            class="w-40 flex items-center justify-center"
          >
            <img class="max-h-28" :src="logo.src" :alt="logo.alt" />
          </li>
           <li
            v-for="logo in logos"
            :key="logo.alt + '_5'"
            class="w-40 flex items-center justify-center"
          >
            <img class="max-h-28" :src="logo.src" :alt="logo.alt" />
          </li>
        </ul>
      </div>
    </div>
    <div class="relative">
      <div class="top-fade-grid"></div>
      <div
        class="max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-start justify-center gap-x-10 sticky z-20 max-md:px-4 py-2 md:py-4 lg:py-24"
      >
        <div class="size-full space-y-6">
          <h1 class="text-4xl font-semibold">Why Novadesk?</h1>
          <p>
            At Novadesk, we go beyond office space—building communities,
            enabling seamless incorporation, and providing resources that fuel
            your journey from idea to success.
          </p>
        </div>
        <div class="size-full flex max-md:justify-between gap-x-4 max-md:mt-6">
          <div class="space-y-2">
            <h1 class="font-semibold text-2xl md:text-4xl">1000+</h1>
            <p class="max-md:hidden block">Founders in the Community</p>
            <p class="max-md:block hidden">Community</p>
          </div>
          <div class="space-y-2">
            <h1 class="font-semibold text-2xl md:text-4xl">5000+</h1>
            <p class="max-md:hidden block">Company Registrations</p>
            <p class="max-md:block hidden">Registered</p>
          </div>
          <div class="space-y-2">
            <h1 class="font-semibold text-2xl md:text-4xl">11+</h1>
            <p class="max-md:hidden block">Backed Startups</p>
            <p class="max-md:block hidden">Startups</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  { src: "/img/company_logos/black_r_m.png", alt: "company_logo" },
  { src: "/img/company_logos/blue_cherry.png", alt: "company_logo" },
  { src: "/img/company_logos/blue_forx.png", alt: "company_logo" },
  { src: "/img/company_logos/blue_t.png", alt: "company_logo" },
  { src: "/img/company_logos/green_nova.png", alt: "company_logo" },
  { src: "/img/company_logos/Avertium.png", alt: "company_logo" },
  {src: "/img/company_logos/oracle.png", alt: "company_logo" },
  {src: "/img/company_logos/matrix.png", alt: "company_logo" },
  {src: "/img/company_logos/intel.png", alt: "company_logo" },
  {src: "/img/company_logos/hp.png", alt: "company_logo" },
  
];
</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 80s linear infinite;
  gap: 1.5rem;
  /* 24px gap between cards */
}

.marquee-card {
  flex-shrink: 1;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(10);
  }

  100% {
    transform: translateX(-40%);
  }
}

/* Optional: Pause on hover */
/* .marquee-container:hover .marquee-track {
  animation-play-state: paused;
} */

/* Optional: Fade edges for smoother look */
.marquee-container::before,
.marquee-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 10;
  pointer-events: none;
}

.marquee-container::before {
  /* left: 0; */
  background: linear-gradient(to right, var(--tw-bg-primary), transparent);
}

.marquee-container::after {
  right: 0;
  background: linear-gradient(to left, var(--tw-bg-primary), transparent);
}
</style>

