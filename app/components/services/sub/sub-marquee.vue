<template>
  <section
    class="w-full min-h-[420px] h-auto bg-primary flex flex-col items-start justify-center relative overflow-hidden"
  >
    <!-- Single Marquee Container -->
    <div class="marquee-container">
      <div class="marquee-track items-start justify-center">
        <!-- First set of reviews -->
        <div
          v-for="(value, key) in review"
          :key="key"
          class="marquee-card w-96 min-w-96 min-h-80 h-auto rounded-2xl border border-white/30 bg-white/20 p-8 text-white"
        >
          <h6 class="text-base font-medium">
            <span class="icon-[ri--double-quotes-l] text-2xl"></span>
            <p v-html="value.content"></p>
            <span class="icon-[ri--double-quotes-r] text-2xl"></span>
          </h6>
          <hr class="pb-4 mt-4 text-white/20" />
          <span class="font-semibold" v-html="value.author"></span>
          <p v-html="value.para"></p>
        </div>
        <!-- Duplicate set for infinite loop -->
        <div
          v-for="(value, key) in review"
          :key="'duplicate-' + key"
          class="marquee-card w-96 min-w-96 min-h-80 h-auto rounded-2xl border border-white/30 bg-white/20 p-8 text-white"
        >
          <h6 class="text-base font-medium">
            <span class="icon-[ri--double-quotes-l] text-2xl"></span>
            <p v-html="value.content"></p>
            <span class="icon-[ri--double-quotes-r] text-2xl"></span>
          </h6>
          <hr class="py-4 mt-4 text-white/20" />
          <span class="font-semibold" v-html="value.author"></span>
          <p v-html="value.para"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const review = ref({
  1: {
    content:
      "Amazing experience - especially Sneha Savalgi who helped us out with everything. Very proactive communication and patience on their end even after unresponsiveness on our side ",
    author: "Vetriventhan K",
    para: "Bicameral Mind Technologies",
  },
  2: {
    content:
      "Everything was so so soo smooth and quick. the team you partnered with was very helpful and it was something we did not expect at such low cost. I have referred razorpay to one of my friend and he will also be signing up soon. thanks to the whole team",
    author: "Archit Vats",
    para: "Muzzari Global",
  },
  3: {
    content:
      "Process was really fast and effortless, really happy with the whole team and will also go ahead with the same vendor post compliances",
    author: "Mayank Sharma",
    para: "Rapparel Solutions",
  },
  4: {
    content:
      "Seamless experience. Quick response from Poorva who was handling our case",
    author: "Neeraj Sonaniya",
    para: "Kalpify Fashion",
  },
  5: {
    content:
      "Had a really smooth experience with all the partners, I would like to specially appreciate Ananya for his consistent support.As a first time entrepreneur, I had low awareness on the legalities of starting up, but I was well supported throughout",
    author: "Pulak Rijhwani",
    para: "Opsight AI",
  },
  6: {
    content:
      "Process was very good, the team was active right from the start and helped us with all doubts",
    author: "Vetriventhan K",
    para: "Bicameral Mind Technologies",
  },
});
</script>
<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 60s linear infinite;
  gap: 1.5rem; /* 24px gap between cards */
}

.marquee-card {
  flex-shrink: 1;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Optional: Pause on hover */
.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}

/* Optional: Fade edges for smoother look */
.marquee-container::before,
.marquee-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 10;
  pointer-events: none;
}

.marquee-container::before {
  left: 0;
  background: linear-gradient(to right, var(--tw-bg-primary), transparent);
}

.marquee-container::after {
  right: 0;
  background: linear-gradient(to left, var(--tw-bg-primary), transparent);
}
</style>
