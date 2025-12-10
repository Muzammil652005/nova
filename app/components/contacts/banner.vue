<template>
  <section
    class="w-full min-h-screen lg:min-h-[840px] xl:min-h-screen relative py-4 px-4"
  >
    <Nav />

    <div class="top_gem"></div>

    <!-- Removed sticky -->
    <div
      class="w-full h-auto z-30 max-lg:block max-w-[1440px] mx-auto pt-10"
    >
      <div
        class="w-full flex flex-col items-center justify-center py-4 space-y-4"
      >
        <span class="hero-mini flex items-center justify-center gap-x-2">
          <span class="icon-[solar--add-circle-broken]"></span>Let's Talk
        </span>

        <h1 class="text-6xl font-bold">Contact us</h1>
        <p class="text-center">Questions, ideas, or just saying hi</p>
      </div>

      <!-- FIXED HEIGHT SECTION -->
      <div
        class="w-full h-auto flex flex-col lg:flex-row items-center md:gap-x-4 md:mt-6"
      >
        <div
          class="h-auto w-full lg:w-[30%] flex lg:flex-col gap-x-2 lg:gap-y-2"
        >
          <div
            class="w-full h-auto bg-white/20 backdrop-blur-3xl border border-primary/20 rounded-3xl p-10 space-y-2 flex flex-col items-start"
          >
            <span class="hero-mini flex items-center justify-center gap-x-2">
              <span class="icon-[solar--magic-stick-broken]"></span>Hire Us
            </span>
            <p class="text-lg font-medium pr-8 lg:pr-20">
              Have something on your mind? We're all ears.
            </p>
            <div
              class="flex flex-col justify-end items-start gap-y-2 lg:font-medium lg:text-lg"
            >
              <span>
                <a href="mailto:support@novadesk.in" target="_blank">
                  support@novadesk.in
                </a>
              </span>
              <span>
                <a href="https://novadesk.in/" target="_blank"> novadesk.in </a>
              </span>
            </div>
          </div>

          <div
            class="max-md:hidden block w-full h-auto bg-white/20 backdrop-blur-3xl border border-primary/20 rounded-3xl overflow-hidden"
          >
            <NuxtImg
              class="image_assistant"
              src="/img/contact/contact2.jpg"
              alt=""
            />
          </div>
        </div>

        <div
          class="h-auto w-full lg:w-[40%] flex items-center justify-center max-lg:my-4"
        >
          <ContactsForm />
        </div>

        <div
          class="h-auto w-full lg:w-[30%] flex lg:flex-col gap-x-2 lg:gap-y-2"
        >
          <div
            class="max-md:hidden block w-full h-auto bg-white/20 backdrop-blur-3xl border border-primary/20 rounded-3xl overflow-hidden"
          >
            <NuxtImg
              class="image_assistant"
              src="/img/contact/contact1.jpg"
              alt=""
            />
          </div>

          <div
            class="w-full h-auto bg-white/20 backdrop-blur-3xl border border-primary/20 rounded-3xl p-10 space-y-2 flex flex-col items-start gap-y-2"
          >
            <span class="hero-mini flex items-center justify-center gap-x-2">
              <span class="icon-[solar--diagram-up-outline]"></span>Growth
            </span>
            <p class="text-lg font-medium pr-20">
              Marketing that drives impact and success
            </p>

            <div
              class="flex flex-col justify-end items-start gap-y-2 font-medium text-lg"
            >
              <progress class="progress h-3 w-24" value="0" max="100"></progress>
              <progress class="progress h-3 w-36" value="0" max="100"></progress>
              <progress class="progress h-3 w-48" value="0" max="100"></progress>
              <progress
                class="progress h-3 w-60 progress-primary"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
      <!-- END FIX -->
    </div>
  </section>
</template>

<script setup>
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
