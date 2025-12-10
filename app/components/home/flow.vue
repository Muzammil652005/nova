<template>
  <section class="w-full min-h-screen bg-primary">
    <div class="max-w-[1440px] mx-auto px-4 py-12">
      <!-- Top -->
      <span class="w-full flex items-center justify-between">
        <h4 class="text-2xl md:text-4xl lg:font-semibold lg:leading-12 text-white">
          From Signup to Setup <br />
          Made Easy
        </h4>

        <button class="btn btn-sm md:btn-lg bg-white shadow-none">
          Lets Talk
          <span class="icon-[solar--arrow-right-up-linear] text-xl"></span>
        </button>
      </span>

      <!-- Desktop -->
      <div class="w-full h-auto md:rounded-2xl overflow-hidden max-md:hidden flex flex-row gap-0 mt-8">
        <template v-for="(item, index) in flowSteps" :key="index">
          <div
            @mouseenter="startAnimation"
            @mouseleave="stopAnimation"
            class="w-full md:w-1/5 relative group/flows transition-all duration-300 ease-linear overflow-hidden"
          >
            <NuxtImg
              class="size-full object-cover"
              :src="item.image"
              preload
              format="webp"
              loading="lazy"
            />

            <span class="absolute bottom-4 left-4 btn btn-square btn-primary max-md:hidden flex">
              {{ index + 1 }}
            </span>

            <div
              style="display: none"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-gradient-to-t from-primary/80 to-transparent
                     flex-col items-start justify-center pl-5"
            >
              <h4 class="text-xl lg:text-3xl text-white font-semibold whitespace-nowrap">
                {{ item.title }}
              </h4>
              <p class="text-white text-base lg:text-lg lg:whitespace-nowrap lg:mt-1">
                {{ item.description }}
              </p>
              <button class="btn btn-primary mt-4">Lets Talk</button>
            </div>

          </div>
        </template>
      </div>

      <!-- Mobile -->
      <div class="w-full h-auto md:rounded-2xl overflow-hidden max-md:flex hidden flex-col gap-4 mt-8">
        <template v-for="(item, index) in flowSteps" :key="index">
          <div class="w-full relative rounded-xl overflow-hidden flex flex-col">
            <NuxtImg
              class="size-full object-cover"
              :src="item.image"
              preload
              format="webp"
              loading="lazy"
            />
            <div class="absolute bottom-4 left-4 btn btn-square btn-primary flex">
              {{ index + 1 }}
            </div>
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] 
                        bg-gradient-to-t from-primary/80 to-transparent
                        flex flex-col items-start justify-center pl-5">
              <h4 class="text-xl text-white font-semibold">{{ item.title }}</h4>
              <p class="text-white text-sm mt-1">{{ item.description }}</p>
            </div>
          </div>
        </template>
      </div>

    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";

const flowSteps = [
  { image: "/img/flows/location.webp", title: "Choose Location", description: "Pick your business city easily" },
  { image: "/img/flows/plan.webp", title: "Select Plan", description: "Flexible plans to fit needs" },
  { image: "/img/flows/payment.webp", title: "Make Payment", description: "Secure and convenient payment methods" },
  { image: "/img/flows/document.webp", title: "Submit KYC", description: "Quick document verification process" },
  { image: "/img/flows/ready.webp", title: "Office Ready", description: "Get started within three days" },
];

function startAnimation(e) {
  const spanDiv = e.target.children[1];
  const childDiv = e.target.children[2];

  spanDiv.style.display = "none";
  gsap.to(e.target, {
    width: "60%",
    duration: 0.2,
    onComplete: childToggle(spanDiv, childDiv, "flex"),
  });
}

function stopAnimation(e) {
  const spanDiv = e.target.children[1];
  const childDiv = e.target.children[2];

  setTimeout(() => (spanDiv.style.display = "flex"), 200);
  gsap.to(e.target, {
    width: "20%",
    duration: 0.2,
    onComplete: childToggle(spanDiv, childDiv, "none"),
  });
}

function childToggle(spanDiv, childDiv, option) {
  if (childDiv && childDiv.style) {
    gsap.to(childDiv, { display: option, duration: 0.2 });
  }
}
</script>
