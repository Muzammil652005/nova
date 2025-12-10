<template>
  <section class="w-full min-h-screen bg-primary px-4 py-12 lg:py-20">
    <div class="max-w-[1440px] mx-auto flex flex-col gap-10">
      <!-- Heading + Button -->
      <div class="w-full flex items-center justify-between">
        <h4 class="text-2xl md:text-4xl font-semibold text-white leading-tight">
          Built for Startups <br />
          Designed for Growth
        </h4>

        <button class="btn btn-sm md:btn-lg bg-white shadow-none">
          Lets Talk
          <span class="icon-[solar--arrow-right-up-linear] text-xl"></span>
        </button>
      </div>

      <!-- Top Grid -->
      <div class="grid md:grid-cols-3 gap-4">
        <template v-for="(i, k) in features.slice(0, 3)" :key="k">
          <div
            class="bg-white rounded-xl px-6 py-8 flex flex-col justify-start gap-4 h-auto"
          >
            <span :class="i.logo" class="text-primary text-6xl"></span>

            <div>
              <h4 class="font-semibold text-xl text-primary mt-4">
                {{ i.title }}
              </h4>
              <p class="text-primary/60 mt-2 text-lg">
                {{ i.description }}
              </p>
            </div>
          </div>
        </template>
      </div>

      <!-- Bottom Grid -->
      <div class="grid md:grid-cols-2 gap-4">
        <template v-for="i in features.slice(3, 5)" :key="i">
          <div
            class="bg-white rounded-xl px-6 py-8 flex flex-col justify-start gap-4 h-auto"
          >
            <span :class="i.logo" class="text-primary text-6xl"></span>

            <div>
              <h4 class="font-semibold text-xl text-primary mt-4">
                {{ i.title }}
              </h4>

              <!-- Desktop Long Text -->
              <p class="text-primary/60 mt-3 text-lg hidden lg:block">
                {{ i.longDescription }}
              </p>

              <!-- Mobile Short Text -->
              <p class="text-primary/60 mt-3 text-lg lg:hidden">
                {{ i.description }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "Professional Business Address",
    description:
      "Establish a credible presence with a prime virtual office address.",
    logo: "icon-[solar--map-arrow-square-bold]",
  },
  {
    title: "Bank/GST Verification",
    description: "Ensure smooth compliance with verified bank and GST details.",
    logo: "icon-[solar--verified-check-bold]",
  },
  {
    title: "Cost Effective",
    description: "Budget-friendly solutions for growing businesses.",
    logo: "icon-[solar--sale-square-bold]",
  },
  {
    title: "Access to Meeting Rooms",
    description: "Flexible meeting spaces for teams and clients.",
    longDescription:
      "Our virtual office plans include access to fully equipped meeting rooms designed for client presentations, team discussions, and collaborations. With modern amenities and professional environments.",
    logo: "icon-[solar--camera-square-bold]",
  },
  {
    title: "Dedicated Customer Support",
    description: "Quick resolutions with round-the-clock support.",
    longDescription:
      "Get access to a dedicated support team committed to resolving your queries quickly and efficiently. Whether it’s assistance with documentation, compliance, or day-to-day queries.",
    logo: "icon-[solar--help-bold]",
  },
];
</script>
