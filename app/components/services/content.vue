<template>
  <section
    class="w-full max-md:min-h-[1180px] max-md:max-h-[2100px] max-md:h-auto lg:min-h-[840px] lg:h-auto xl:h-[90vh] bg-primary max-md:px-4 pt-10 pb-6 md:py-12 lg:py-24"
  >
    <div
      class="max-w-[1440px] h-auto md:h-full mx-auto flex flex-col items-center justify-center"
    >
      <div class="flex items-center justify-center">
        <span class="space-y-4">
          <h1 class="text-4xl max-md:text-center md:text-5xl">
            Hassle-free
            <b class="text-white"> Company Registrations</b>
          </h1>
          <p class="text-center">
            Choose from the most popular company types and get seamless
            registration at No Hidden Charges
          </p>
        </span>
      </div>
      <div
        class="w-full mt-6 md:mt-14 grid md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-y-4 md:gap-x-4 md:py-10 max-lg:px-4"
      >
        <template v-for="(i, k) in companyData" :key="k">
          <div
            class="w-full h-auto md:min-h-[440px] bg-[#ff8a80] rounded-4xl p-8 flex flex-col items-start justify-between"
          >
            <div
              class="size-12 lg:size-16 bg-white rounded-xl flex items-center justify-center"
            >
              <span :class="i.icon" class="text-2xl lg:text-3xl"></span>
            </div>

            <div class="space-y-6 max-md:mt-4">
              <h1 class="text-3xl md:text-4xl" v-html="i.title"></h1>
              <p class="" v-html="i.description"></p>
              <NuxtLink :to="i.link" class="content-mini cursor-pointer">
                {{ i.buttonText }}
              </NuxtLink>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script setup>
const companyData = [
  {
    title: "Private Limited Company",
    description:
      "Suitable for startups seeking limited liability, fundraising options, and ESOP benefits.",
    icon: "icon-[solar--box-minimalistic-broken]",
    buttonText: "Learn More",
    bgColor: "#ff8a80",
    link: "/services/private_limited",
  },
  {
    title: "Limited Liability Partnership",
    description:
      "Suitable for professional services seeking limited liability but fewer post-incorporation compliances.",
    icon: "icon-[solar--chart-2-broken]",
    buttonText: "Learn More",
    bgColor: "#ff8a80",
    link: "/services/llp",
  },
  {
    title: "One Person Company",
    description:
      "Suitable for franchises and small businesses seeking limited liability with single ownership.",
    icon: "icon-[solar--hand-stars-broken]",
    buttonText: "Learn More",
    bgColor: "#ff8a80",
    link: "/services/opc",
  },
  {
    title: "Good's And Service Tax",
    description:
      "Goods and Services Tax simplifies indirect taxation with a unified, transparent system.",
    icon: "icon-[solar--buildings-broken]",
    buttonText: "Learn More",
    bgColor: "#ff8a80",
    link: "/services/private_limited",
  },
];
</script>
