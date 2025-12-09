<template>
  <section
    class="w-full lg:min-h-[760px] lg:h-auto xl:h-[70vh] relative pt-4 px-4"
  >
    <Nav />

    <div class="top_gem"></div>

    <div
      class="w-full h-[calc(100%-80px)] sticky z-30 max-lg:block max-md:py-12"
    >
      <div
        class="max-w-[1440px] max-md:min-h-[680px] h-auto lg:h-[420px] mx-auto flex flex-col lg:flex-row items-center justify-center max-md:pb-4 md:px-4 xl:px-0"
      >
        <div
          class="md:w-1/2 h-full flex flex-col justify-center text-center md:items-start gap-y-4"
        >
          <h1 class="text-4xl font-semibold">
            Register a Private <br />
            Limited Company
          </h1>
          <!-- <span class="text-xl font-medium"
            >in just ₹1,499 <span class="text-primary">+ Govt. Fee</span></span
          > -->
          <button class="btn btn-primary">Register your business</button>
        </div>
        <div
          class="lg:w-1/2 w-auto h-full flex flex-col justify-center items-start gap-y-4 max-md:mt-6"
        >
          <h6 class="text-primary font-medium text-lg">What’s Included?</h6>
          <ul
            v-for="(value, key) in list"
            :key="key"
            class="max-xl:text-sm max-xl:whitespace-nowrap max-md:pr-0 max-xl:pr-20 flex max-lg:flex-col max-lg:items-start max-lg:gap-y-4 gap-x-4 sub_list"
          >
            <li>
              <span class="icon-[charm--tick]"></span>
              <p v-html="value.list1"></p>
            </li>
            <template v-if="value.list2">
              <li>
                <span class="icon-[charm--tick]"></span>
                <p v-html="value.list2"></p>
              </li>
            </template>
            <template v-if="value.list3">
              <li>
                <span class="icon-[charm--tick]"></span>
                <p v-html="value.list3"></p>
              </li>
            </template>
          </ul>
          <span
            v-for="(value, key) in para"
            :key="key"
            class="flex items-center justify-center gap-x-2 max-md:text-sm"
          >
            <span
              class="icon-[material-symbols--star-rounded] text-primary"
            ></span>
            <p v-html="value" class="font-medium"></p>
          </span>
        </div>
      </div>
      <div
        class="max-w-[1440px] h-auto mx-auto flex max-md:flex-col md:flex-row items-start justify-center gap-x-2"
      >
        <div class="size-full space-y-6">
          <h1 class="text-4xl font-semibold">Made with ❤️ for founders</h1>
          <p class="pr-26 font-medium max-md:hidden">
            Nova Desk is an exclusive early-stage startup program that empowers
            founders by fostering vibrant communities, providing seamless
            company incorporation services & offering dedicated startup building
            programs & resources.
          </p>
        </div>
        <div
          class="size-full max-md:grid max-md:grid-cols-2 md:flex gap-4 max-md:mt-6"
        >
          <div class="space-y-2">
            <h1 class="font-semibold text-2xl md:text-4xl">5000+</h1>
            <p class="max-md:text-xs block font-medium">Companies Registered</p>
          </div>
          <div class="space-y-2">
            <h1 class="font-semibold text-2xl md:text-4xl">₹1+ Cr</h1>
            <p class="max-md:text-xs block font-medium">
              Money saved for Founders
            </p>
          </div>
          <div class="space-y-2">
            <h1 class="font-semibold text-2xl md:text-4xl">
              4.8
              <span
                class="icon-[material-symbols--star-rounded] text-primary text-lg"
              ></span
              >/5
            </h1>
            <p class="max-md:text-sm block font-medium">
              Customer Satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const list = ref({
  1: {
    list1: "Registration in 7-10 Business Days",
    list2: "Company PAN and TAN",
  },

  2: {
    list1: "Company Name Approval",
    list2: "MOA & AOA",
    list3: "Incorporation Certificate",
  },

  3: {
    list1: "DSC Tokens",
    list2: "DSC Support & Shipping",
    list3: "Digital Signature Certificate",
  },

  4: {
    list1: "Director’s Identification Number (DIN)",
  },
});

// const para = ref({
//   p1: "Up to 60% off on Payroll! Plans start at just ₹1499/mo",
//   p2: "Free NovaDesk platform for 1 year",
// });
</script>

