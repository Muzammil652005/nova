<template>
  <section
    class="w-full min-h-screen lg:min-h-[760px] xl:min-h-screen relative pt-4 px-4 overflow-visible"
  >
    <!-- <Nav /> -->

    <div class="top_gem"></div>

    <Transition name="fade" mode="out-in">
      <!-- FIX: always h-auto (not fixed height) -->
      <div class="w-full h-auto z-30">
        <div
          class="max-w-[1440px] h-auto mx-auto flex flex-col lg:flex-row items-center justify-center max-md:pb-4 md:px-4 xl:px-0"
        >
          <div
            class="w-full lg:w-1/2 h-auto flex flex-col items-center lg:items-start justify-center gap-y-4"
          >
            <h1
              class="text-3xl max-md:text-center max-md:font-semibold md:text-6xl"
              v-html="content.heading[count]"
            ></h1>

            <p
              class="text-sm max-md:text-center md:text-lg"
              v-html="content.paragraph[count]"
            ></p>

            <div class="flex gap-x-4">
              <template v-if="typeof content.button[count] === 'object'">
                <button class="btn btn-primary">
                  {{ content.button[count]["btn-1"] }}
                </button>
                <button class="btn btn-outline btn-primary">
                  {{ content.button[count]["btn-2"] }}
                </button>
              </template>

              <template v-else>
                <button class="btn btn-primary">
                  {{ content.button[count] }}
                </button>
              </template>
            </div>

            <div class="carousel_p space-x-4 mt-4 flex items-center">
              <span
                @click="prev"
                class="icon-[solar--alt-arrow-left-line-duotone] text-2xl cursor-pointer"
              ></span>

              <ul class="flex items-center justify-center gap-x-2">
                <li
                  :class="{ 'px-4': count === 0 }"
                  class="p-1 rounded-full bg-black"
                ></li>
                <li
                  :class="{ 'px-4': count === 1 }"
                  class="p-1 rounded-full bg-black"
                ></li>
                <li
                  :class="{ 'px-4': count === 2 }"
                  class="p-1 rounded-full bg-black"
                ></li>
              </ul>

              <span
                @click="next"
                class="icon-[solar--alt-arrow-right-line-duotone] text-2xl cursor-pointer"
              ></span>
            </div>
          </div>

          <div
            class="w-1/2 h-auto hidden lg:flex items-center justify-end relative pt-[40px] gap-x-4"
          >
            <NuxtImg
              class="drop-shadow-2xl rounded-xl"
              :src="content.img[count]"
              alt="novadesk"
            />
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
const count = ref(0);
const totalSlides = 3;

const content = ref({
  heading: {
    0: "Make it official. <br> Get Incorporated.",
    1: "Find your Perfect <br> Community here!",
    2: "Step into Success <br> Grow with NovaDesk",
  },
  paragraph: {
    0: "Seamless Company Registration service for early- <br class='max-md:hidden'> stage founders with No Hidden Charges.",
    1: "Explore our communities for founders, which offer <br class='max-md:hidden'> networking, resources, deals, and more.",
    2: "Smart workplace solutions tailored by experts to <br class='max-md:hidden'> support your business at every stage of growth.",
  },
  button: {
    0: {
      "btn-1": "Register your Business",
      "btn-2": "Learn More",
    },
    1: "Explore our Communities",
    2: "Learn More",
  },
  img: {
    0: "/img/services/office_1.jpg",
    1: "/img/services/office_2.jpg",
    2: "/img/services/office_3.jpg",
  },
});

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    next();
  }, 3000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

function next() {
  count.value = (count.value + 1) % totalSlides;
}
function prev() {
  count.value = (count.value - 1 + totalSlides) % totalSlides;
}
</script>
