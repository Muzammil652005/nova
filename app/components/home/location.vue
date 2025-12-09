<template>
  <section
    class="w-full max-md:h-[1308px] md:min-h-[850px] md:h-[80vh] flex flex-col items-center justify-between relative"
  >
    <div class="h-full top-fade-grid"></div>
    <div
      class="max-w-[1440px] mx-auto w-full h-full flex flex-col justify-center items-center gap-y-8 py-8 lg:py-16 px-4 size-full absolute z-20 top-0 left-1/2 -translate-x-1/2"
    >
      <span class="w-full flex items-center justify-between">
        <h4
          class="text-2xl md:text-4xl font-medium lg:font-semibold lg:leading-12 text-black"
        >
          Build Presence <br />
          Expand Influence
        </h4>

        <button class="btn btn-md md:btn-lg btn-secondary">
          Lets Talk
          <span class="icon-[solar--arrow-right-up-linear] text-xl"></span>
        </button>
      </span>

      <div class="w-full h-[90%] md:h-[80%] flex flex-col gap-y-4">
        <div
          class="w-full h-1/2 flex flex-col lg:flex-row items-center justify-start gap-y-3 lg:gap-x-2"
        >
          <template v-for="(item, index) in cities.slice(0, 3)" :key="index">
            <div
              class="h-full w-full lg:w-1/3 lg:hover:w-3/5 transition-all duration-200 ease-in-out rounded-xl overflow-hidden relative group/city"
            >
              <NuxtImg
                class="size-full object-center object-cover"
                :src="item.image"
                alt="novadesk all in one virtual office"
                preload
                quality="60"
              />

              <div
                class="group-hover/city:hidden absolute bottom-4 left-1/2 -translate-x-1/2 h-auto w-[90%] flex items-center justify-center py-2 rounded-md bg-primary"
              >
                <h6 class="text-xl text-white text-center font-semibold">
                  {{ item.name }}
                </h6>
              </div>

              <div
                class="group-hover/city:absolute top-0 left-0 size-full bg-primary/20 backdrop-blur-lg text-white flex items-center justify-center transition-all duration-100 ease-in-out"
              >
                <h4 class="text-3xl">{{ item.name }}</h4>
              </div>
            </div>
          </template>
        </div>

        <div
          class="w-full h-1/2 flex flex-col lg:flex-row items-center justify-start gap-y-3 lg:gap-x-2"
        >
          <template v-for="(item, index) in cities.slice(3, 6)" :key="index">
            <div
              class="h-full w-full lg:w-1/3 lg:hover:w-3/5 transition-all duration-200 ease-in-out rounded-xl overflow-hidden relative group/city"
            >
              <NuxtImg
                class="size-full object-center object-cover"
                :src="item.image"
                alt="novadesk all in one virtual office"
                preload
                quality="60"
              />

              <div
                class="group-hover/city:hidden absolute bottom-4 left-1/2 -translate-x-1/2 h-auto w-[90%] flex items-center justify-center py-2 rounded-md bg-primary"
              >
                <h6 class="text-xl text-white text-center font-semibold">
                  {{ item.name }}
                </h6>
              </div>

              <div
                class="group-hover/city:absolute top-0 left-0 size-full bg-primary/20 backdrop-blur-lg text-white flex items-center justify-center transition-all duration-100 ease-in-out"
              >
                <h4 class="text-3xl">{{ item.name }}</h4>
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
  {
    name: "Tamil Nadu",
    image: "/img/citys/chennai.webp",
  },
  {
    name: "Delhi",
    image: "/img/citys/delhi.jpg",
  },
  {
    name: "Bengaluru",
    image: "/img/citys/bangalore.jpg",
  },
  {
    name: "Kolkata",
    image: "/img/citys/kolkata.jpg",
  },
  {
    name: "Mumbai",
    image: "/img/citys/mumbai.jpg",
  },
  {
    name: "Pune",
    image: "/img/citys/pune.webp",
  },
];
</script>
