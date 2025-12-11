<template>
  <section
    class="w-full bg-white max-lg:px-4 py-8 lg:py-16"
  >
    <div class="max-w-[1440px] mx-auto flex flex-col">

      <span class="w-full flex items-center justify-between">
        <h4 class="text-2xl md:text-4xl lg:font-semibold text-primary">
          Power Your With <br />
          Business Novadesk
        </h4>

        <button class="btn btn-sm md:btn-lg bg-white shadow-none">
          Lets Talk
          <span class="icon-[solar--arrow-right-up-linear] text-xl"></span>
        </button>
      </span>

      <!-- ⭐ FIRST ROW (3 equal boxes) -->
      <div class="grid md:grid-cols-3 gap-4 mt-10 auto-rows-[1fr]">
        <div
          v-for="(i, k) in features.slice(0, 3)"
          :key="k"
          class="bg-primary rounded-xl p-6 lg:p-8 flex flex-col justify-between h-full"
        >
          <span :class="i.logo" class="text-5xl lg:text-6xl text-white"></span>

          <span class="mt-6">
            <h4 class="text-xl font-bold text-white">{{ i.title }}</h4>

            <p class="text-white/70 mt-3 hidden lg:block">
              {{ i.longDescription || i.description }}
            </p>

            <p class="text-white/70 mt-3 block lg:hidden">
              {{ i.description }}
            </p>
          </span>
        </div>
      </div>

      <!-- ⭐ SECOND ROW (2 equal boxes) -->
      <div class="grid md:grid-cols-2 gap-4 mt-4 auto-rows-[1fr]">
        <div
          v-for="(i, k) in features.slice(3, 5)"
          :key="k"
          class="bg-primary rounded-xl p-6 lg:p-8 flex flex-col justify-between h-full"
        >
          <span :class="i.logo" class="text-5xl lg:text-6xl text-white"></span>

          <span class="mt-6">
            <h4 class="text-xl font-bold text-white">{{ i.title }}</h4>

            <p class="text-white/70 mt-3 hidden lg:block">
              {{ i.longDescription }}
            </p>

            <p class="text-white/70 mt-3 block lg:hidden">
              {{ i.description }}
            </p>
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "Cost-Effectiveness",
    description:
      "Eliminate overhead with budget-friendly virtual office plans.",
    logo: "icon-[solar--sale-square-bold]",
  },
  {
    title: "Scalability",
    description:
      "Easily adapt your virtual office plan as your business expands.",
    logo: "icon-[solar--graph-new-up-bold]",
  },
  {
    title: "Flexibility",
    description: "Work from anywhere with a professional address.",
    logo: "icon-[solar--compass-bold]",
  },
  {
    title: "Enhanced Credibility",
    description: "Project a polished, professional image.",
    longDescription:
      "Project a polished and trustworthy image with a prestigious business address in prime Indian locations.",
    logo: "icon-[solar--shield-star-bold]",
  },
  {
    title: "Seamless Support",
    description: "Reliable support to keep you focused.",
    longDescription:
      "Benefit from reliable administrative and customer support ensuring smooth business operations.",
    logo: "icon-[solar--headphones-square-bold]",
  },
];
</script>
