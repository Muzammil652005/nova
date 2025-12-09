<template>
  <section
    class="w-full max-h-[1450px] h-auto bg-white tabs-section max-md:px-4 max-md:py-8"
  >
    <div
      class="max-w-[1440px] h-full mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-y-6 md:gap-x-10"
    >
      <div
        class="w-full md:w-1/2 h-full md:max-h-[80%] md:h-full flex flex-col items-start gap-y-8 text-secondary"
      >
        <h4 class="text-4xl font-medium leading-12">
          Your Paperwork, Made Easy
        </h4>

        <div class="w-full flex items-center gap-x-4">
          <template v-for="(item, index) in kycDocuments" :key="index">
            <button
              @click="currentIndex = index"
              class="tab-btn"
              :class="currentIndex == index ? 'tab-btn-active' : ''"
            >
              {{ item.btn }}
            </button>
          </template>
        </div>

        <template v-for="(item, index) in kycDocuments" :key="index">
          <div
            v-if="currentIndex == index"
            class="w-full bg-primary/10 border border-primary/20 p-5 rounded-md"
          >
            <h5 class="lg:text-2xl lg:text-primary lg:font-semibold">
              {{ item.title }}
            </h5>

            <ul class="mt-4 space-y-4 list-disc pl-6 marker:text-primary">
              <template v-for="(list, key) in item.documents" :key="key">
                <li>
                  {{ list }}
                </li>
              </template>
            </ul>
          </div>
        </template>
      </div>

      <div
        class="w-full md:w-1/2 h-[250px] md:h-[580px] relative flex items-center justify-center overflow-hidden"
      >
        <div
          class="w-full max-md:h-full md:h-[80%] relative rounded-xl overflow-hidden"
        >
          <NuxtImg class="rounded-xl tags_area" src="/img/assistant_2.webp" />

          <span
            class="size-20 md:size-44 pt-5 pl-5 bg-white absolute bottom-0 right-0 rounded-tl-xl flex"
          >
            <span
              class="size-full bg-primary rounded-xl flex items-center justify-center"
            >
              <span
                class="icon-[solar--arrow-right-up-linear] text-3xl lg:text-8xl text-white"
              ></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentIndex = ref(0);
const kycDocuments = [
  {
    title: "Sole Proprietor / Individual",
    btn: "Individual",
    documents: [
      "Aadhar Card Copy / Passport Copy",
      "PAN Card Copy",
      "One Photo / Passport Size Photo",
      "Cancelled Cheque / Passbook Front Page Copy",
    ],
  },
  {
    title: "LLP and Partnership Firms",
    btn: "Partnership",
    documents: [
      "Aadhar Card Copy / Passport Copy (All Partners)",
      "PAN Card Copy (All Partners)",
      "One Photo / Passport Size Photo (All Partners)",
      "Cancelled Cheque / Passbook Front Page Copy",
      "PAN Card Copy of the Business",
      "GST Certificate (if applicable)",
      "COI (Certificate of Incorporation) (if applicable)",
    ],
  },
  {
    title: "Company (Public and Private)",
    btn: "Company",
    documents: [
      "Aadhar Card Copy / Passport Copy (All Directors)",
      "PAN Card Copy (All Directors)",
      "One Photo / Passport Size Photo (All Directors)",
      "Cancelled Cheque / Passbook Front Page Copy",
      "PAN Card Copy of the Business",
      "GST Certificate (if applicable)",
      "COI (Certificate of Incorporation) (if applicable)",
    ],
  },
];
</script>
