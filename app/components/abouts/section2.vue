<template>
  <section
    class="w-full max-h-[1150px] h-auto bg-white max-lg:px-4 py-8 lg:py-16"
  >
    <div class="max-w-[1440px] h-full mx-auto flex flex-col">
      <span class="w-full flex items-center justify-between">
        <h4
          class="text-2xl md:text-4xl lg:font-semibold lg:leading-12 text-primary"
        >
          Power Your With <br />
          Business Novadesk
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
            class="size-full bg-primary rounded-xl px-4 py-6 lg:px-8 lg:py-6 flex flex-col justify-between max-md:gap-y-4"
          >
            <span
              :class="i.logo"
              class="text-white text-5xl lg:text-6xl"
            ></span>

            <span class="w-full h-auto">
              <h4
                class="font-semibold lg:text-xl lg:font-bold text-white lg:mt-8"
              >
                {{ i.title }}
              </h4>
              <p class="lg:text-lg lg:text-white/60 lg:mt-3">
                {{ i.description }}
              </p>
            </span>
          </div>
        </template>
      </div>
      <div class="w-full md:h-1/2 grid md:grid-cols-2 grid-flow-row gap-3 mt-3">
        <template v-for="i in features.slice(3, 5)" :key="i">
          <div
            class="size-full bg-primary rounded-xl px-6 py-4 lg:px-8 lg:py-6 flex flex-col justify-between max-md:gap-y-4"
          >
            <span
              :class="i.logo"
              class="text-white text-5xl lg:text-6xl"
            ></span>

            <span class="w-full h-auto">
              <h4
                class="font-semibold lg:text-xl lg:font-bold text-white lg:mt-8"
              >
                {{ i.title }}
              </h4>
              <p class="lg:text-lg lg:text-white/60 lg:mt-3 hidden lg:block">
                {{ i.longDescription }}
              </p>
              <p class="lg:text-lg lg:text-white/60 lg:mt-3 block lg:hidden">
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
      "Project a polished and trustworthy image to clients and partners with a prestigious business address in prime Indian locations. Establish your reputation with credibility from day one.",
    logo: "icon-[solar--shield-star-bold]",
  },
  {
    title: "Seamless Support",
    description: "Reliable support to keep you focused.",
    longDescription:
      "Benefit from reliable administrative and customer support that ensures smooth business operations. From handling mail and calls to managing inquiries, our dedicated team lets you focus on growth.",
    logo: "icon-[solar--headphones-square-bold]",
  },
];
</script>
