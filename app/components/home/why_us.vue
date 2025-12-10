<template>
  <section
    class="w-full min-h-screen lg:min-h-[1150px] bg-white relative"
  >
    <div class="bottom-fade-grid"></div>

    <div class="absolute top-0 left-0 z-50 w-full h-auto max-lg:px-4 py-8 lg:py-16">
      <div class="max-w-[1440px] h-auto mx-auto flex flex-col">
        <span class="w-full flex items-center justify-between">
          <h4
            class="text-2xl md:text-4xl lg:font-semibold lg:leading-12 text-secondary"
          >
            Built for Startups <br />
            Designed for Growth
          </h4>

          <button class="btn btn-sm md:btn-lg btn-primary">
            Lets Talk
            <span class="icon-[solar--arrow-right-up-linear] text-xl"></span>
          </button>
        </span>

        <div class="w-full grid md:grid-cols-3 gap-3 mt-8">
          <template v-for="(i, k) in benefits.slice(0, 3)" :key="k">
            <div
              class="w-full h-auto bg-primary rounded-xl px-4 py-6 lg:px-8 lg:py-6 flex flex-col justify-between"
            >
              <span
                :class="i.logo"
                class="text-white text-5xl lg:text-6xl"
              ></span>

              <span class="w-full h-auto">
                <h4 class="lg:text-xl lg:font-bold text-white lg:mt-8">
                  {{ i.title }}
                </h4>
                <p class="lg:text-lg lg:text-white/80 lg:mt-3">
                  {{ i.description }}
                </p>
              </span>
            </div>
          </template>
        </div>

        <div class="w-full grid md:grid-cols-2 gap-3 mt-3">
          <template v-for="(i, k) in benefits.slice(3, 5)" :key="k">
            <div
              class="w-full h-auto bg-primary rounded-xl px-6 py-4 lg:px-8 lg:py-6 flex flex-col justify-between text-white"
            >
              <span :class="i.logo" class="text-5xl lg:text-6xl"></span>

              <span class="w-full h-auto">
                <h4 class="lg:text-xl font-semibold lg:font-bold lg:mt-8">
                  {{ i.title }}
                </h4>

                <p class="lg:text-lg lg:text-white/80 lg:mt-3 hidden lg:block">
                  {{ i.longDescription }}
                </p>

                <p class="lg:text-lg lg:text-white/80 lg:mt-3 block lg:hidden">
                  {{ i.description }}
                </p>
              </span>
            </div>
          </template>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
const benefits = [
  {
    title: "Fastest Virtual Office Setup",
    description: "Get started within just 3 working days after KYC approval.",
    logo: "icon-[solar--clock-square-bold]",
  },
  {
    title: "Dedicated Customer Support",
    description: "Ensuring customer satisfaction with trained CRM executives.",
    logo: "icon-[solar--help-bold]",
  },
  {
    title: "Lowest Price Assurance",
    description: "Guaranteed lowest prices with zero hidden charges.",
    logo: "icon-[solar--tag-price-bold]",
  },
  {
    title: "Full Refund Guarantee",
    description: "Hassle-free refund policy if registration is declined.",
    longDescription:
      "We stand by our promise of reliability. If your GST or company registration is declined, you’ll receive a full refund without hidden conditions or unnecessary delays—giving you complete peace of mind.",
    logo: "icon-[solar--shield-check-bold]",
  },
  {
    title: "Seamless Digital Process",
    description: "User-friendly online agreements and quick digital KYC.",
    longDescription:
      "Our end-to-end digital process makes it easy to complete KYC and agreements online. From verification to documentation, everything is simplified to save you time, so you can focus on growing your business.",
    logo: "icon-[solar--document-text-bold]",
  },
];
</script>
