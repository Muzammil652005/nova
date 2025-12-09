<template>
  <div class="marquee-container">
    <div class="marquee-content gap-x-4">
      <template v-for="(item, index) in marquee" :key="index">
        <span>{{ item }}</span>
        <p class="text-6xl text-center flex items-center justify-center">•</p>
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

const props = defineProps({
  marquee: Array,
});

onMounted(() => {
  const marqueeContent = ".marquee-content";

  gsap.to(marqueeContent, {
    xPercent: -50,
    ease: "none",
    duration: 40,

    repeat: -1,
  });
});
</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  color: #fff;
}

.marquee-content {
  display: flex;
  white-space: nowrap;
  width: fit-content;
}
</style>
