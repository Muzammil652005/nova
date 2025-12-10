<template>
  <section class="w-full bg-primary py-14 overflow-hidden">
    <div class="max-w-[1440px] mx-auto flex flex-col items-center gap-10 px-4">

      <!-- 📌 IMAGE BLOCK (Top) -->
      <div class="w-full max-w-[600px] relative rounded-xl overflow-hidden">
        <NuxtImg src="/img/assistant_1.webp" class="image_assistant rounded-xl w-full" />
        <span class="size-24 md:size-32 lg:size-44 pt-5 pl-5 bg-primary absolute bottom-0 right-0 rounded-tl-xl flex">
          <span class="size-full bg-white rounded-xl flex items-center justify-center">
            <span class="icon-[solar--arrow-right-up-linear] text-3xl md:text-5xl lg:text-8xl text-primary"></span>
          </span>
        </span>
      </div>

      <!-- 📌 TEXT SLIDER (Below image) -->
      <div class="w-full max-w-[900px] overflow-hidden">
        <div class="flex gap-6" :style="{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: 'transform 0.7s ease',
        }">
          <template v-for="(item, index) in contentArray" :key="index">
            <div class="min-w-full bg-white rounded-xl p-6 shadow-md space-y-3">
              <h1 class="text-lg font-bold" v-html="item.title"></h1>
              <p class="text-base" v-html="item.description"></p>
            </div>
          </template>
        </div>
      </div>

      <!-- Indicators -->
      <div class="flex items-center justify-center gap-2">
        <span v-for="(i, idx) in contentArray.length" :key="idx" class="h-2 rounded-full transition-all duration-300"
          :class="idx === currentSlide ? 'bg-white w-4' : 'bg-white/50 w-2'"></span>
      </div>

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
      "Conduct professional meetings and client interactions in our fully equipped meeting rooms across various locations in India.",
  },
  {
    title: "Business Support Services",
    description:
      "Enhance your business with call answering, receptionist services, and admin support.",
  },
];

const currentSlide = ref(0);
let autoScroll;

onMounted(() => {
  autoScroll = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % contentArray.length;
  }, 4500);
});

onBeforeUnmount(() => {
  clearInterval(autoScroll);
});
</script>

<!-- <style scoped>
/* 🔥 Makes image fill container properly */
.image_assistant {
  height: 100%;
  object-fit: cover;
}

/* 🔥 Prevents unwanted vertical stretch */
.max-w-\[600px\] {
  max-height: 420px;
}
</style> -->
<style scoped>
/* Make image cover full area inside container */
.image_assistant {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Ensures the image block height is consistent */
.max-w-\[600px\] {
  width: 100%;
  height: 450px;
  /* You can increase to 500/550 if needed */
}
</style>
