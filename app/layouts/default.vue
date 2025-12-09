<template>
  <div
    v-show="loader"
    class="w-screen h-dvh bg-white fixed left-0 top-0 z-50 flex items-center justify-center"
  >
    <span class="icon-[svg-spinners--pulse-3] text-8xl text-primary"></span>
  </div>

  <div id="smooth-wrapper" class="w-screen h-dvh font-poppins overflow-hidden">
    <div id="smooth-content" class="flex flex-col">
      <slot />
    </div>
  </div>
</template>

<script setup>
const loader = ref(true);
const onTop = ref(false);
const count = ref(0);
const intervalId = ref(null);
const route = useRoute();

onMounted(() => {
  intervalId.value = setInterval(() => {
    scrollIt();
  }, 500);
});

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    loader.value = true;
    intervalId.value = setInterval(() => {
      scrollIt();
    }, 500);
  },
);

function scrollIt() {
  count.value++;
  onTop.value = !onTop.value;
  loader.value = true;

  if (onTop.value) {
    window.scrollTo(0, document.body.scrollHeight);
  }

  if (!onTop.value) {
    window.scrollTo(0, 0);
  }

  if (count.value >= 6) {
    clearInterval(intervalId.value);
    window.scrollTo(0, 0);

    setTimeout(() => {
      loader.value = false;
    }, 1200);
  }
}
</script>
