<template>
  <section class="w-full min-h-screen lg:min-h-[760px] xl:min-h-screen bg-primary parallax-section py-6 px-4">
    <div class="top_gem"></div>

    <div class="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-x-10">

      <!-- Image Block -->
      <div class="w-full lg:w-1/2 mt-6 relative flex items-center justify-center">
        <div class="w-full h-[350px] md:h-[420px] lg:h-[450px] relative rounded-xl overflow-hidden">

          <!-- Image -->
          <NuxtImg src="/img/assistant_1.webp"
            class="absolute inset-0 w-full h-full object-cover object-center rounded-xl" />

          <!-- Icon Box -->
          <span class="absolute bottom-0 right-0 size-24 md:size-32 lg:size-44 bg-primary rounded-tl-xl flex p-4">
            <span class="size-full bg-white rounded-xl flex items-center justify-center">
              <span class="icon-[solar--arrow-right-up-linear] text-primary text-3xl md:text-5xl lg:text-7xl"></span>
            </span>
          </span>

        </div>
      </div>


      <!-- Content Block -->
      <div class="w-full lg:w-1/2 flex flex-col items-start justify-center gap-y-6 text-white mt-10 lg:mt-0">
        <h4 class="text-3xl md:text-3xl lg:text-3xl font-bold leading-snug tracking-wide">
          The Complete Solution to Register, Scale & Manage Your Business —
          All Through a Virtual Office
        </h4>

        <h5 class="text-xl md:text-2xl font-light text-base-100/90 tracking-wide">
          One Smart Platform. Every Essential Business Service.
        </h5>

        <p class="text-sm md:text-base lg:text-lg text-base-100/70 leading-relaxed">
          A virtual office empowers your business to establish a credible presence
          anywhere in the world—without the need for physical space. Ideal for
          startups and SMEs, it enables expansion into new markets, boosts brand
          trust, and opens opportunities—while keeping operational costs minimal.
        </p>

        <!-- Counter -->
        <div class="w-full grid grid-cols-4 gap-4 md:gap-5 counter-section mt-5">
          <template v-for="(i, k) in featureCount" :key="k">
            <div
              class="h-20 md:h-28 lg:h-32 flex flex-col items-center justify-center bg-white/10 border border-white/20 rounded-md px-2">
              <span :data-count="i.count" :data-time="i.time" :data-end="i.end"
                :class="i.title !== 'support' ? 'counter' : ''" class="text-xl lg:text-4xl font-bold">
                {{ i.count }} {{ i.end }}
              </span>
              <p class="text-xs md:text-sm lg:text-base mt-1 capitalize">
                {{ i.title }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
    <!-- Marquee -->
    <HomeMarquee :marquee="marqueeFeatures" speed="slow" class="mt-1 max-md:hidden" />
  </section>
</template>

<script setup>
const marqueeFeatures = [
  "Premium Business Address for GST & Bank Registrations",
  "Mail Handling & Forwarding Made Simple",
  "Seamless Business Registration Support",
  "Access Meeting Rooms & Workspaces on Demand",
  "Professional Presence Without the Overheads",
  "Expand into New Cities Without Physical Offices",
  "Trusted by Startups, Freelancers & Growing Enterprises",
  "Flexible Plans Tailored for Every Business Stage",
  "Setup in Just 3 Working Days",
  "Dedicated Support & Hassle-Free Compliance",
];

const featureCount = [
  { title: "Location", count: "300", time: 10, end: "+" },
  { title: "Happy Clients", count: "20", time: 400, end: "k" },
  { title: "Support", count: "24/7", time: 0, end: "" },
  { title: "States", count: "8", time: 500, end: "+" },
];
</script>
