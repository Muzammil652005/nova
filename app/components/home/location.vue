<template>
  <section
    class="w-full min-h-screen flex flex-col items-center justify-between relative py-10 px-4"
  >
    <div class="top-fade-grid"></div>

    <div
      class="max-w-[1440px] w-full h-auto mx-auto flex flex-col justify-start items-center gap-y-8 py-8 lg:py-16 px-4 relative z-20"
    >
      <!-- Heading + Button -->
      <div class="w-full flex items-center justify-between">
        <h4 class="text-2xl md:text-4xl font-semibold leading-tight text-black">
          Build Presence <br />
          Expand Influence
        </h4>

        <button class="btn btn-md md:btn-lg btn-secondary">
          Lets Talk
          <span class="icon-[solar--arrow-right-up-linear] text-xl"></span>
        </button>
      </div>

      <!-- Cities Grid -->
      <div class="w-full h-auto flex flex-col gap-6">
        <!-- Top Row -->
        <div
          class="w-full flex flex-col lg:flex-row items-center justify-start gap-4"
        >
          <template v-for="(item, index) in cities.slice(0, 3)" :key="index">
            <div
              class="w-full lg:w-1/3 aspect-[5/3] lg:hover:w-[45%] transition-all duration-200 ease-in-out rounded-xl overflow-hidden relative group/city"
            >
              <NuxtImg
                class="w-full h-full object-cover"
                :src="item.image"
                alt="novadesk virtual office"
                preload
                quality="60"
              />

              <div
                class="group-hover/city:hidden absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] flex items-center justify-center py-2 rounded-md bg-primary"
              >
                <h6 class="text-xl text-white font-semibold text-center">
                  {{ item.name }}
                </h6>
              </div>

              <div
                class="group-hover/city:flex hidden absolute inset-0 bg-primary/20 backdrop-blur-lg text-white items-center justify-center"
              >
                <h4 class="text-3xl font-semibold">{{ item.name }}</h4>
              </div>
            </div>
          </template>
        </div>

        <!-- Bottom Row -->
        <div
          class="w-full flex flex-col lg:flex-row items-center justify-start gap-4"
        >
          <template v-for="(item, index) in cities.slice(3, 6)" :key="index">
            <div
              class="w-full lg:w-1/3 aspect-[5/3] lg:hover:w-[45%] transition-all duration-200 ease-in-out rounded-xl overflow-hidden relative group/city"
            >
              <NuxtImg
                class="w-full h-full object-cover"
                :src="item.image"
                alt="novadesk virtual office"
                preload
                quality="60"
              />

              <div
                class="group-hover/city:hidden absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] flex items-center justify-center py-2 rounded-md bg-primary"
              >
                <h6 class="text-xl text-white font-semibold text-center">
                  {{ item.name }}
                </h6>
              </div>

              <div
                class="group-hover/city:flex hidden absolute inset-0 bg-primary/20 backdrop-blur-lg text-white items-center justify-center"
              >
                <h4 class="text-3xl font-semibold">{{ item.name }}</h4>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cities = [
  { name: "Tamil Nadu", image: "/img/citys/chennai.webp" },
  { name: "Delhi", image: "/img/citys/delhi.jpg" },
  { name: "Bengaluru", image: "/img/citys/bangalore.jpg" },
  { name: "Kolkata", image: "/img/citys/kolkata.jpg" },
  { name: "Mumbai", image: "/img/citys/mumbai.jpg" },
  { name: "Pune", image: "/img/citys/pune.webp" },
];
</script>
