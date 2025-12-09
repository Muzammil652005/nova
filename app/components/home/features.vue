<template>
  <section
    class="w-full max-h-[1150px] h-auto bg-primary max-lg:px-4 py-8 lg:py-16"
  >
    <div class="max-w-[1440px] h-full mx-auto flex flex-col">
      <span class="w-full flex items-center justify-between">
        <h4
          class="text-2xl md:text-4xl lg:font-semibold lg:leading-12 text-white"
        >
          Built for Startups <br />
          Designed for Growth
        </h4>

        <button class="btn btn-sm md:btn-lg bg-white shadow-none">
          Lets Talk
          <span class="icon-[solar--arrow-right-up-linear] text-xl"></span>
        </button>
      </span>

      <div class="w-full md:h-1/2 grid md:grid-cols-3 grid-flow-row gap-3 mt-8">
        <template v-for="(i, k) in features.slice(0, 3)" :key="k">
          <div
            :class="i > 4 ? 'col-span-2' : ''"
            class="size-full bg-white rounded-xl px-4 py-6 lg:px-8 lg:py-6 flex flex-col justify-between max-md:gap-y-4"
          >
            <span
              :class="i.logo"
              class="text-primary text-5xl lg:text-6xl"
            ></span>

            <span class="w-full h-auto">
              <h4
                class="font-semibold lg:text-xl lg:font-bold text-primary lg:mt-8"
              >
                {{ i.title }}
              </h4>
              <p class="lg:text-lg lg:text-primary/60 lg:mt-3">
                {{ i.description }}
              </p>
            </span>
          </div>
        </template>
      </div>
      <div class="w-full md:h-1/2 grid md:grid-cols-2 grid-flow-row gap-3 mt-3">
        <template v-for="i in features.slice(3, 5)" :key="i">
          <div
            class="size-full bg-white rounded-xl px-6 py-4 lg:px-8 lg:py-6 flex flex-col justify-between max-md:gap-y-4"
          >
            <span
              :class="i.logo"
              class="text-primary text-5xl lg:text-6xl"
            ></span>

            <span class="w-full h-auto">
              <h4
                class="font-semibold lg:text-xl lg:font-bold text-primary lg:mt-8"
              >
                {{ i.title }}
              </h4>
              <p class="lg:text-lg lg:text-primary/60 lg:mt-3 hidden lg:block">
                {{ i.longDescription }}
              </p>
              <p class="lg:text-lg lg:text-primary/60 lg:mt-3 block lg:hidden">
                {{ i.description }}
              </p>
            </span>
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
