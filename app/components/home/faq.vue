<template>
  <section class="w-full max-h-[980px] h-auto md:min-h-[620px] bg-primary">
    <div
      class="max-w-[1440px] h-full mx-auto flex flex-col max-md:px-4 py-8 lg:py-16"
    >
      <span class="w-full flex items-center justify-between">
        <h4
          class="text-2xl md:text-4xl lg:font-semibold lg:leading-12 text-white"
        >
          Frequently Asked Questions
        </h4>

        <button class="btn btn-sm md:btn-lg bg-white shadow-none">
          See All
          <span class="icon-[solar--arrow-right-up-linear] text-xl"></span>
        </button>
      </span>

      <div class="w-full flex flex-col gap-y-4 mt-8">
        <template v-for="(i, k) in faqs" :key="k">
          <div
            class="collapse collapse-arrow bg-white/10 border border-white/30 backdrop-blur-sm text-white"
          >
            <input type="radio" name="my-accordion-2" :checked="k == 0" />
            <div class="collapse-title font-semibold">
              {{ i.question }}
            </div>
            <div class="collapse-content text-sm">
              {{ i.answer }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    question: "What is a Virtual Office?",
    answer:
      "A virtual office provides you with a premium business address and essential office services—without needing to rent or own a physical workspace.",
  },
  {
    question: "Can I use the Virtual Office for Company Registration?",
    answer:
      "Yes, our virtual office plans are fully compliant and include all necessary documentation for seamless company registration.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Once your KYC documents are verified, your virtual office can be activated in as little as 3 working days.",
  },
  {
    question: "Do you provide meeting rooms or workspace access?",
    answer:
      "Yes, depending on your plan, you can book professional meeting rooms and workspace access whenever required.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Absolutely. We follow strict data protection policies to ensure all your personal and business information is safe and confidential.",
  },
];
</script>
