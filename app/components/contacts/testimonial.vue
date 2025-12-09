<template>
  <section
    class="w-full h-auto lg:min-h-[740px] lg:h-auto xl:h-[80vh] bg-primary px-4 py-6 md:py-12 lg:py-24"
  >
    <div
      class="max-w-[1440px] h-auto mx-auto flex flex-col md:flex-row items-center md:items-start justify-evenly gap-x-4"
    >
      <div class="w-full flex flex-col items-start justify-center gap-y-4">
        <span
          class="bg-white/10 p-3 border border-white/30 rounded-md text-white flex items-center justify-center gap-x-2"
          ><span class="icon-[solar--add-circle-broken]"></span>Client
          Stories</span
        >
        <h1 class="text-4xl font-semibold text-white">What they think</h1>
      </div>
      <div class="w-full">
        <p class="text-base md:text-xl text-white font-medium max-md:mt-4">
          From startups to global brands, we’ve delivered impactful solutions.
          Explore some of our latest projects
        </p>
      </div>
      <div
        class="w-full hidden md:flex items-center justify-end gap-x-4 text-2xl text-white"
      >
        <button
          @click="prev"
          class="bg-white/10 border border-white/30 rounded-md p-4 flex items-center justify-center cursor-pointer"
        >
          <span class="icon-[solar--arrow-left-broken]"></span>
        </button>
        <button
          @click="next"
          class="bg-white/10 border border-white/30 rounded-md p-4 flex items-center justify-center cursor-pointer"
        >
          <span class="icon-[solar--arrow-right-broken]"></span>
        </button>
      </div>
    </div>
    <div
      :style="'transform: translateX(' + value + 'px)'"
      class="max-w-[1440px] size-full mx-auto flex items-center justify-start gap-x-6 transition-all ease-in-out duration-500 testimonial max-md:mt-6"
    >
      <div
        v-for="(value, key) in testimonial"
        :key="key"
        class="min-w-[380px] md:min-w-[420px] h-auto aspect-square rounded-md bg-white/10 border border-white/30 p-8"
      >
        <div class="w-full flex items-start justify-between">
          <div class="w-full flex flex-col items-start justify-center gap-y-2">
            <span class="flex items-end justify-start gap-x-2 text-base">
              <h1 class="text-4xl font-medium" v-html="value.rating"></h1>
              /5
            </span>
            <div class="rating rating-xs">
              <div class="mask mask-star" aria-label="1 star"></div>
              <div class="mask mask-star" aria-label="2 star"></div>
              <div class="mask mask-star" aria-label="3 star"></div>
              <div class="mask mask-star" aria-label="4 star"></div>
              <div
                class="mask mask-star"
                aria-label="5 star"
                aria-current="true"
              ></div>
            </div>
          </div>
          <img class="size-30 rounded-lg" :src="value.img" alt="" />
        </div>
        <div class="w-full py-8 md:py-12 lg:py-20">
          <h1 class="text-lg font-semibold" v-html="value.text"></h1>
        </div>
        <span class="font-medium text-lg">
          <h5 v-html="value.author"></h5>
          <h5 v-html="value.designation"></h5>
        </span>
      </div>
    </div>

    <div
      class="w-full flex md:block items-center justify-between gap-x-4 text-2xl text-white max-md:mt-6"
    >
      <button
        @click="prev"
        class="bg-white/10 border border-white/30 rounded-md p-4 flex items-center justify-center cursor-pointer"
      >
        <span class="icon-[solar--arrow-left-broken]"></span>
      </button>
      <button
        @click="next"
        class="bg-white/10 border border-white/30 rounded-md p-4 flex items-center justify-center cursor-pointer"
      >
        <span class="icon-[solar--arrow-right-broken]"></span>
      </button>
    </div>
  </section>
</template>
<script setup>
const value = ref(0);

onMounted(() => {
  setTimeout(() => {
    let width = 0;
    let query = document.getElementsByClassName("testimonial")[0];

    query.childNodes.forEach((element) => {
      if (element && element.scrollWidth) {
        width += element.scrollWidth;
      }
    });
    console.log(width + 80);
  }, 300);
});

function next() {
  if (value.value <= -1580) {
    value.value = 0;
  } else {
    value.value = value.value - 260;
  }
}

function prev() {
  if (value.value >= 0) {
    value.value = -1580;
  } else {
    value.value = value.value + 260;
  }
}

const testimonial = ref({
  1: {
    rating: "5.0",
    img: "/img/testimonial/testimonial1.webp",
    text: "From the first call to final delivery, the process was seamless. We now have a brand that truly reflects who we are",
    author: "Julian Meyer",
    designation: "Marketing at NovaTech",
  },

  2: {
    rating: "3.9",
    img: "/img/testimonial/testimonial2.webp",
    text: "They completely reshaped the way we present ourselves online. The clarity, execution were flawless",
    author: "Amanda More",
    designation: "Founder of Bloom Agency",
  },

  3: {
    rating: "4.7",
    img: "/img/testimonial/testimonial3.webp",
    text: "Professional, strategic, and highly creative. They felt more like a partner than a service provider, highly recommended",
    author: "Ava Rossi",
    designation: "Head at Horizon Ventures",
  },

  4: {
    rating: "4.2",
    img: "/img/testimonial/testimonial4.webp",
    text: "The team brought bold ideas and real results. Our site traffic has doubled, and the feedback has been incredible",
    author: "Leo Daniels",
    designation: "CEO of Frame & Co.",
  },

  5: {
    rating: "5.0",
    img: "/img/testimonial/testimonial5.webp",
    text: "They understood our vision immediately and delivered beyond expectations. A real game changer for our brand",
    author: "Sophie Tran",
    designation: "Manager at Stellar Works",
  },
});
</script>

