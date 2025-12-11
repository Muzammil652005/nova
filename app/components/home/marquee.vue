<template>
  <div class="marquee-container">
    <div class="marquee-content">

      <!-- LOOP ITEMS -->
      <template v-for="(item, index) in doubledMarquee" :key="index">
        <div class="marquee-item">
          <span class="marquee-text">{{ item }}</span>

          <!-- Dot only between items -->
          <span v-if="index !== doubledMarquee.length - 1" class="dot">•</span>
        </div>
      </template>

    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import gsap from "gsap";

const props = defineProps({
  marquee: Array,
});

// Duplicate list for infinite scrolling
const doubledMarquee = computed(() => [...props.marquee, ...props.marquee]);

onMounted(() => {
  gsap.to(".marquee-content", {
    xPercent: -40,       // slower movement
    ease: "none",
    duration: 60,        // reduced speed (was too fast before)
    repeat: -1,
  });
});
</script>

<style scoped>
/* Marquee container */
.marquee-container {
  width: 100%;
  overflow: hidden;
  padding: 18px 0; /* softer padding for eyes */
  background: #e85c41; /* same as your theme primary */
}

/* Scroll flex wrapper */
.marquee-content {
  display: flex;
  white-space: nowrap;
  width: max-content;
  gap: 40px; /* spacing between repeated chunks */
}

/* Individual group of item + dot */
.marquee-item {
  display: flex;
  align-items: center;
  gap: 24px; /* space between text and dot */
}

/* Main text */
.marquee-text {
  font-size: 2.3rem;         /* softer than huge bold text */
  font-weight: 600;
  color: white;
}

/* Dot appearance */
.dot {
  font-size: 3rem;           /* smaller = less visual irritation */
  opacity: 0.5;              /* softer visual effect */
  color: white;
}
</style>
