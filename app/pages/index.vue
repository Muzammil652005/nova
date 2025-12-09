<template>
  <HomeHero />

  <HomeIntro />

  <HomeLocation />

  <HomeFeatures />

  <HomeRegister />

  <HomeFlow />

  <HomeWhyUsTwo />

  <HomeFaq />

  <Footer />
</template>

<script setup>
const { $gsap } = useNuxtApp();
let timeline = null;
onMounted(() => {
  timeline = $gsap.timeline();

  timeline.from(
    [".hero-mini", ".hero-title", ".hero-sub", ".hero-border", ".hero-group"],
    {
      rotationX: -100,
      transformOrigin: "50% 50% -160px",
      opacity: 0,
      duration: 1,
      ease: "power3",
      stagger: 0.2,
    },
    0,
  );

  timeline.to(
    ".tags_area",
    {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".tabs-section",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    },
    0,
  );

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
