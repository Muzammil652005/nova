<template>
  <section
    class="h-[100vh] md:min-h-[620px] md:max-h-[880px] bg-primary parallax-section"
  >
    <div
      class="max-w-[1440px] h-full lg:h-[80%] mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-x-10 px-4 xl:px-0"
    >
      <div
        class="w-full lg:w-1/2 h-2/5 lg:h-full relative flex items-center justify-center"
      >
        <div class="w-full h-[80%] relative rounded-xl overflow-hidden">
          <NuxtImg
            class="rounded-xl image_assistant"
            src="/img/assistant_1.webp"
          />

          <span
            class="size-24 md:size-32 lg:size-44 pt-5 pl-5 bg-primary absolute bottom-0 right-0 rounded-tl-xl flex"
          >
            <span
              class="size-full bg-white rounded-xl flex items-center justify-center"
            >
              <span
                class="icon-[solar--arrow-right-up-linear] text-3xl md:text-5xl lg:text-8xl text-primary"
              ></span>
            </span>
          </span>
        </div>
      </div>
      <div
        class="w-full lg:w-1/2 h-3/5 lg:h-full flex flex-col items-start justify-center gap-y-5 xl:gap-y-8 text-white"
      >
        <h4
          class="text-3xl md:text-4xl md:font-medium lg:font-semibold lg:leading-12"
        >
          Everything you need to register, scale, and manage your business—all
          in one Virtual Office
        </h4>
        <h5 class="text-2xl font-normal text-base-100/90">
          Everything Your Business Demands, All in One Place
        </h5>
        <p class="text-sm lg:text-lg text-base-100/60">
          A virtual office gives you the power to be present anywhere in the
          world without actually moving there. For small and medium businesses,
          this opens doors to new markets and customer opportunities—without the
          financial burden of setting up multiple offices.
        </p>

        <div class="w-full h-32 grid grid-cols-4 gap-6 counter-section mb-4">
          <template v-for="(i, k) in featureCount" :key="k">
            <div
              class="size-20 md:size-full flex flex-col items-center justify-center bg-white/10 border border-white/20 rounded-md max-lg:px-2 whitespace-nowrap"
            >
              <span
                :data-count="i.count"
                :data-time="i.time"
                :data-end="i.end"
                :class="i.title === 'support' ? '' : 'counter'"
                class="text-xl font-semibold lg:text-4xl lg:font-black"
              >
                {{ i.count }} {{ i.end }}
              </span>
              <p class="max-md:hidden block text-center text-sm lg:text-base">
                {{ i.title }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>

    <HomeMarquee
      :marquee="marqueeFeatures"
      class="max-md:mt-12 max-md:hidden block"
    />
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
  {
    title: "Location",
    count: "300",
    time: 10,
    end: "+",
  },
  {
    title: "Happy Client",
    count: "20",
    time: 400,
    end: "k",
  },
  {
    title: "support",
    count: "24/7",
    time: 0,
    end: "",
  },
  {
    title: "states",
    count: "8",
    time: 500,
    end: "+",
  },
];
</script>
