<template>
  <section
    class="w-full min-h-screen lg:min-h-[680px] bg-primary py-14"
  >
    <div
      class="max-w-[1440px] h-auto mx-auto flex max-md:flex-col flex-row items-center justify-center gap-y-6 md:gap-x-6 max-md:px-4"
    >
      <!-- LEFT IMAGE -->
      <div
        class="w-full md:w-1/2 h-auto md:h-full relative flex items-center justify-center"
      >
        <div class="size-full relative rounded-xl overflow-hidden">
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

      <!-- RIGHT AUTO HEIGHT FIXED -->
      <div
        class="w-full md:w-1/2 h-auto rounded-2xl bg-[#ff8a80] p-8 overflow-hidden relative"
      >
        <div
          class="w-full flex flex-col items-center justify-start gap-y-4 animate-marquee-vertical"
        >
          <template v-for="(i, k) in contentArray" :key="k">
            <div class="w-full h-auto bg-white rounded-lg p-4 space-y-4">
              <h1 class="text-lg font-semibold" v-html="i.title"></h1>
              <p v-html="i.description"></p>
            </div>
          </template>

          <!-- extra groups keep same for animation -->
          <template v-for="(i, k) in contentArray" :key="'b-'+k">
            <div class="w-full h-auto bg-white rounded-lg p-4 space-y-4">
              <h1 class="text-lg font-semibold" v-html="i.title"></h1>
              <p v-html="i.description"></p>
            </div>
          </template>

          <template v-for="(i, k) in contentArray" :key="'c-'+k">
            <div class="w-full h-auto bg-white rounded-lg p-4 space-y-4">
              <h1 class="text-lg font-semibold" v-html="i.title"></h1>
              <p v-html="i.description"></p>
            </div>
          </template>

          <template v-for="(i, k) in contentArray" :key="'d-'+k">
            <div class="w-full h-auto bg-white rounded-lg p-4 space-y-4">
              <h1 class="text-lg font-semibold" v-html="i.title"></h1>
              <p v-html="i.description"></p>
            </div>
          </template>
        </div>
      </div>
      <!-- END FIX -->
    </div>
  </section>
</template>

<script setup>
const contentArray = [
  {
    title: "Virtual Office Address",
    description:
      "Establish a prestigious business address in prime Indian locations to elevate your brand image. This address can be used for official correspondence, marketing materials, and registering your business.",
  },
  {
    title: "Mail Handling",
    description:
      "Get peace of mind with secure mail forwarding and handling services. We'll receive your business mail at our virtual office address and promptly forward it to your designated location.",
  },
  {
    title: "Meeting Room Access",
    description:
      "Conduct professional meetings and client interactions in our fully equipped meeting rooms available across various locations in India. Enjoy the convenience of booking meeting spaces online for seamless scheduling.",
  },
  {
    title: "Business Support Services",
    description:
      "Enhance your virtual office experience with additional services like call answering, receptionist services, and administrative support (mention these services are optional if they are not included in all plans).",
  },
];

const { $gsap } = useNuxtApp();
let timeline = null;
onMounted(() => {
  timeline = $gsap.timeline();

  timeline.to(
    ".image_assistant",
    {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-section",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    },
    0,
  );
});

onUnmounted(() => {
  if (timeline) {
    timeline.kill();
  }
});
</script>
