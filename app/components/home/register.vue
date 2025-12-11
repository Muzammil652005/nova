<template>
  <section class="w-full bg-white tabs-section px-4 py-10">
    <div
      class="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-y-8 md:gap-x-10"
    >
      <!-- LEFT: Text + Tabs -->
      <div
        class="w-full md:w-1/2 flex flex-col items-start gap-y-8 text-secondary"
      >
        <h4 class="text-4xl font-medium leading-tight">
          Your Paperwork, Made Easy
        </h4>

        <!-- Tabs -->
        <div class="w-full flex items-center gap-x-4">
          <template v-for="(item, index) in kycDocuments" :key="index">
            <button
              @click="currentIndex = index"
              class="tab-btn"
              :class="currentIndex === index ? 'tab-btn-active' : ''"
            >
              {{ item.btn }}
            </button>
          </template>
        </div>

        <!-- Tab Content -->
        <template v-for="(item, index) in kycDocuments" :key="index">
          <div
            v-if="currentIndex === index"
            class="w-full bg-primary/10 border border-primary/20 p-5 rounded-md"
          >
            <h5 class="text-xl lg:text-2xl text-primary font-semibold">
              {{ item.title }}
            </h5>

            <ul class="mt-4 space-y-4 list-disc pl-6 marker:text-primary text-base lg:text-lg">
              <template v-for="(list, key) in item.documents" :key="key">
                <li>{{ list }}</li>
              </template>
            </ul>
          </div>
        </template>
      </div>

      <!-- RIGHT: IMAGE -->
      <div class="w-full md:w-1/2 flex items-center justify-center">
        <div class="w-full relative rounded-xl overflow-hidden right-image-wrapper">
          
          <NuxtImg
            src="/img/assistant_2.webp"
            alt="Registration"
            class="rounded-xl object-cover w-full fixed-img"
          />

          <span
            class="size-16 md:size-32 lg:size-40 bg-white absolute bottom-0 right-0 rounded-tl-xl flex p-3 md:p-5"
          >
            <span
              class="size-full bg-primary rounded-xl flex items-center justify-center"
            >
              <span
                class="icon-[solar--arrow-right-up-linear] text-3xl md:text-5xl lg:text-7xl text-white"
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

<style scoped>
/* Remove unwanted gap */
.tabs-section {
  margin-top: 0 !important;
  padding-top: 20px !important;
}

/* Fix image layout and alignment */
.right-image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Prevent stretching and remove scrolling push */
.fixed-img {
  height: 480px;
  object-fit: cover;
  width: 100%;
}
</style>
