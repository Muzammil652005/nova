<template>
  <div class="w-full relative">
    <!-- <div class="h-full top-fade-grid"></div> -->
     <div class="top-fade-grid"></div>

    <!-- <div
      class="w-full max-h-[680px] h-[540px] max-w-[1440px] mx-auto flex gap-x-4 sticky z-50 md:py-12"
    > -->
    <div
      class="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start justify-center gap-x-10 max-md:px-4 py-4 md:py-8 lg:py-10">

      <div class="w-full md:w-1/2 h-[450px] md:h-full relative flex items-center justify-center">
        <div class="size-full relative rounded-xl overflow-hidden">
          <NuxtImg class="rounded-xl image_assistant" src="/img/assistant_2.jpg" />

          <span class="size-4 md:size-32 lg:size-44 pt-5 pl-5 bg-white absolute bottom-0 right-0 rounded-tl-xl flex">
            <span class="size-full bg-primary rounded-xl flex items-center justify-center">
              <span class="icon-[solar--arrow-right-up-linear] text-3xl md:text-5xl lg:text-8xl text-white"></span>
            </span>
          </span>
        </div>
      </div>

      <span class="w-1/2 flex flex-col items-start justify-start gap-y-4 max-md:px-4">
        <h3 class="text-2xl md:text-3xl lg:text-4xl max-w-[750px] font-semibold">
          {{ title }}
        </h3>
        <p class="max-md:text-xs md:text-lg lg:max-w-[750px] leading-7">
          {{ long }}
          <br class="mb-4" />
          {{ small }}
        </p>
      </span>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();

const props = defineProps({
  title: String,
  small: String,
  long: String,
});

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

function scrollTo(id) {
  let cele = document.getElementById(id);
  cele.scrollIntoView();

  currentView.value = id;
}
</script>
