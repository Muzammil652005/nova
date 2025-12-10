<template>
  <div class="w-full bg-primary overflow-hidden py-8">
    <div
      class="flex gap-6 animate-marquee group"
      :style="{
        animationDuration: `${speed}s`
      }"
    >
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="testimonial-card"
      >
        <span class="quote-icon">❝</span>
        <p class="testimonial-text">{{ item.text }}</p>
        <div class="testimonial-footer">
          <p class="font-semibold">{{ item.name }}</p>
          <p class="text-sm opacity-80">{{ item.company }}</p>
        </div>
      </div>

      <!-- Clone for infinite scroll -->
      <div
        v-for="(item, index) in testimonials"
        :key="'cloned-' + index"
        class="testimonial-card"
      >
        <span class="quote-icon">❝</span>
        <p class="testimonial-text">{{ item.text }}</p>
        <div class="testimonial-footer">
          <p class="font-semibold">{{ item.name }}</p>
          <p class="text-sm opacity-80">{{ item.company }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const speed = 35 // ⬅ slower + smooth scrolling

const testimonials = [
  {
    text: "Seamless experience. Quick response from Poorva who was handling our case",
    name: "Neeraj Sonaniya",
    company: "Kalpify Fashion"
  },
  {
    text: "Had a really smooth experience with all partners, special thanks to Ananya for support. As a first-time entrepreneur, I had low awareness on legals but I was well supported.",
    name: "Pulak Rijhwani",
    company: "Opsight AI"
  },
  {
    text: "Process was very good, quick team support from start & helped us with all doubts",
    name: "Vetriventhan K",
    company: "Bicameral Mind Technologies"
  }
]
</script>

<style scoped>
/* -----🔥 Smooth Continuous Scrolling ----- */
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee linear infinite;
}

/* FIX → No animation pause on hover */
.animate-marquee:hover {
  animation-play-state: running !important;
  pointer-events: none !important;
}

/* FIX → Prevent stopping on cursor */
* {
  pointer-events: auto;
}

/* ----- Card Style (Perfect Alignment) ---- */
.testimonial-card {
  width: 380px;
  min-height: 260px; /* ⬅ equal height */
  background: #ffffff10;
  border: 1px solid #ffffff20;
  border-radius: 12px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* ⬅ content bottom aligned */
}

.quote-icon {
  font-size: 24px;
  opacity: .9;
  color: white;
}

.testimonial-text {
  font-size: 15px;
  line-height: 1.5rem;
  color: white;
  margin: 8px 0;
}

.testimonial-footer {
  margin-top: 10px;
  color: white;
}

/* ----- Animation Keyframes ----- */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Responsive */
@media(max-width:768px){
  .testimonial-card {
    width: 300px;
    min-height: 240px;
  }
}
</style>
