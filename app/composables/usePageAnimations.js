export function usePageAnimations() {
  const { $gsap, $ScrollSmoother, $ScrollTrigger } = useNuxtApp();

  let timeline;
  let smoother;

  onMounted(() => {
    smoother = $ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 1.5,
      normalizeScroll: true,
    });
  });

  onUnmounted(() => {
    const triggers = $ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });
    timeline && timeline.kill();
    smoother && smoother.kill();
  });
}
