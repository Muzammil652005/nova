<template>
  <section
    class="w-full max-h-[1550px] max-md:h-auto md:min-h-[580px] md:h-[60vh] bg-primary"
  >
    <div class="max-w-[1440px] h-full mx-auto max-md:px-4 py-8 lg:py-10">
      <span class="w-full flex items-center justify-between">
        <h4
          class="text-2xl md:text-4xl lg:font-semibold lg:leading-12 text-white"
        >
          From Signup to Setup <br />
          Made Easy
        </h4>

        <button class="btn btn-sm md:btn-lg bg-white shadow-none">
          Lets Talk
          <span class="icon-[solar--arrow-right-up-linear] text-xl"></span>
        </button>
      </span>

      <div
        class="w-full md:max-h-96 h-full md:rounded-2xl overflow-hidden max-md:hidden flex flex-col md:flex-row max-md:gap-y-4 mt-8"
      >
        <template v-for="(item, index) in flowSteps" :key="index">
          <div
            @mouseenter="startAnimation"
            @mouseleave="stopAnimation"
            class="h-full w-full md:w-1/5 relative group/flows transition-all duration-300 ease-linear max-md:rounded-xl rounded-none overflow-hidden"
          >
            <NuxtImg
              class="size-full object-cover"
              :src="item.image"
              preload
              format="webp"
              loading="lazy"
            />

            <span
              class="absolute bottom-4 left-4 btn btn-square btn-primary max-md:hidden flex"
            >
              {{ index + 1 }}
            </span>

            <div
              style="display: none"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-gradient-to-t from-primary/80 to-transparent transition-all duration-700 ease-linear max-md:!flex flex-col items-start justify-center pl-5"
            >
              <h4
                class="text-xl lg:text-3xl text-white font-semibold whitespace-nowrap"
              >
                {{ item.title }}
              </h4>
              <p
                class="text-white text-base lg:text-lg lg:whitespace-nowrap lg:mt-1"
              >
                {{ item.description }}
              </p>
              <button class="btn btn-primary mt-4">Lets Talk</button>
            </div>
          </div>
        </template>
      </div>

      <div
        class="w-full lg:max-h-96 h-full md:rounded-2xl overflow-hidden max-md:flex hidden flex-col md:flex-row max-md:gap-y-4 mt-8"
      >
        <template v-for="(item, index) in flowSteps" :key="index">
          <div
            class="h-full w-full md:w-1/5 relative group/flows transition-all duration-300 ease-linear max-md:rounded-xl rounded-none overflow-hidden"
          >
            <NuxtImg
              class="size-full object-cover"
              :src="item.image"
              preload
              format="webp"
              loading="lazy"
            />

            <span
              class="absolute bottom-4 left-4 btn btn-square btn-primary max-md:hidden flex"
            >
              {{ index + 1 }}
            </span>

            <div
              style="display: none"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-gradient-to-t from-primary/80 to-transparent transition-all duration-700 ease-linear max-md:!flex flex-col items-start justify-center pl-5"
            >
              <h4
                class="text-xl lg:text-3xl text-white font-semibold whitespace-nowrap"
              >
                {{ item.title }}
              </h4>
              <p
                class="text-white text-base lg:text-lg lg:whitespace-nowrap lg:mt-1"
              >
                {{ item.description }}
              </p>
              <button class="btn btn-primary mt-4">Lets Talk</button>
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
  {
    image: "/img/flows/location.webp",
    title: "Choose Location",
    description: "Pick your business city easily",
  },
  {
    image: "/img/flows/plan.webp",
    title: "Select Plan",
    description: "Flexible plans to fit needs",
  },
  {
    image: "/img/flows/payment.webp",
    title: "Make Payment",
    description: "Secure and convenient payment methods",
  },
  {
    image: "/img/flows/document.webp",
    title: "Submit KYC",
    description: "Quick document verification process",
  },
  {
    image: "/img/flows/ready.webp",
    title: "Office Ready",
    description: "Get started within three days",
  },
];

function startAnimation(e) {
  const spanDiv = e.target.children[1];
  const childDiv = e.target.children[2];

  spanDiv.style.display = "none";

  gsap.to(e.target, {
    width: "60%",
    duration: 0.2,
    overwrite: "auto",
    onComplete: childToggle(spanDiv, childDiv, "flex"),
  });
}

function stopAnimation(e) {
  const spanDiv = e.target.children[1];
  const childDiv = e.target.children[2];

  setTimeout(() => {
    spanDiv.style.display = "flex";
  }, 200);

  gsap.to(e.target, {
    width: "20%",
    duration: 0.2,
    overwrite: "auto",
    onComplete: childToggle(spanDiv, childDiv, "none"),
  });
}

function childToggle(spanDiv, childDiv, option) {
  if (childDiv && childDiv.style) {
    gsap.to(childDiv, {
      display: option,
      duration: 0.2,
      overwrite: "auto",
    });
  }
}
</script>
