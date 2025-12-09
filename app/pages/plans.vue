<template>
  <section
    class="w-full max-h-[5500px] h-auto lg:min-h-[760px] lg:h-auto relative pt-4 px-4"
  >
    <Nav />

    <div class="top_gem"></div>
    <div
      class="max-w-[1440px] w-full h-[calc(100%-80px)] mx-auto sticky z-30 py-4 lg:py-6"
    >
      <div
        class="w-full flex flex-col items-center justify-start gap-y-4 py-10 lg:py-20"
      >
        <h2 class="text-2xl font-medium lg:text-3xl lg:font-semibold">
          Your Next Step, Made Simple
        </h2>
        <p class="max-w-[650px] text-center text-sm">
          From idea to execution, our flexible pricing adapts to every stage of
          your journey—no hidden fees, just growth-focused solutions.
        </p>

        <div
          class="w-auto p-2 rounded-full space-x-2 plan_switcher lg:my-4 relative"
        >
          <button
            @click="planType = true"
            :class="planType ? 'btn-primary' : 'btn-soft'"
          >
            Monthly
          </button>
          <button
            @click="planType = false"
            :class="!planType ? 'btn-primary' : 'btn-soft'"
          >
            Yearly
          </button>

          <div
            class="badge badge-primary rounded-md absolute -right-24 top-1/2 -translate-y-1/2"
          >
            Save 5%
          </div>
        </div>

        <div class="w-full grid lg:grid-cols-3 grid-flow-row gap-4 max-md:mb-4">
          <template v-for="(v, index) in plansTile" :key="index">
            <div
              :class="
                v.featured
                  ? 'bg-primary/10 border border-primary'
                  : 'bg-white/10 border border-primary/30'
              "
              class="size-full p-6 backdrop-blur-2xl rounded-xl relative"
            >
              <span class="w-full flex items-center gap-x-2 relative">
                <span
                  :class="v.bg"
                  class="p-2 flex items-center justify-center rounded-md"
                >
                  <span :class="v.icon" class="text-white text-2xl"></span>
                </span>
                <h4 class="text-2xl font-semibold">{{ v.title }}</h4>

                <div
                  v-if="v.featured"
                  class="badge badge-primary rounded-md max-lg:hidden absolute top-1/2 -translate-y-1/2 right-0"
                >
                  Most Popular
                </div>
              </span>

              <p class="text-sm lg:text-lg my-4">
                {{ v.description }}
              </p>

              <span class="w-full flex items-center gap-x-1 mb-2">
                <template v-if="planType">
                  <h4 class="text-2xl lg:text-4xl font-semibold">
                    ₹{{ v.price }}
                  </h4>
                </template>
                <template v-else>
                  <h4 class="text-2xl lg:text-4xl font-semibold">
                    ₹{{ annualPrice(v.price) }}
                  </h4>
                </template>

                <p>/ per month</p>
              </span>

              <table class="table">
                <tbody>
                  <template v-for="(i, k) in plansDetails.slice(0, 8)" :key="k">
                    <tr>
                      <td class="px-0 flex items-center gap-x-2">
                        <PlansChecker
                          size="checkbox-sm"
                          :optionDetail="i[v.index]"
                        />

                        <p class="line-clamp-1">
                          {{ i.Feature }}
                        </p>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </template>
        </div>
      </div>

      <div
        class="w-full bg-white/10 border border-primary/20 backdrop-blur-sm rounded-xl overflow-x-auto"
      >
        <table class="table">
          <tbody>
            <template v-for="(i, k) in plansDetails.slice(0, 8)" :key="k">
              <tr class="table-tr h-16">
                <td>{{ i.Feature }}</td>
                <td>
                  <PlansChecker :optionDetail="i['Get Mailing Address Plan']" />
                </td>
                <td>
                  <PlansChecker :optionDetail="i['Get Business Plan']" />
                </td>
                <td>
                  <PlansChecker :optionDetail="i['Get Virtual Office Plan']" />
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <div
        class="w-full bg-white/10 border border-primary/20 backdrop-blur-sm rounded-xl overflow-x-auto mt-6"
      >
        <table class="table">
          <tbody>
            <template v-for="(i, k) in plansDetails.slice(8)" :key="k">
              <tr class="table-tr h-16">
                <td>{{ i.Feature }}</td>
                <td>
                  <PlansChecker :optionDetail="i['Get Mailing Address Plan']" />
                </td>
                <td>
                  <PlansChecker :optionDetail="i['Get Business Plan']" />
                </td>
                <td>
                  <PlansChecker :optionDetail="i['Get Virtual Office Plan']" />
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <!-- asd -->
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { shake128 } from "@oslojs/crypto/sha3";

const planType = ref(true);
const plansTile = [
  {
    title: "Mailing Plan",
    index: "Get Mailing Address Plan",
    description: "Get a professional address for mail and courier handling.",
    price: 799,
    icon: "icon-[solar--global-linear]",
    bg: "bg-secondary/80",
    featured: false,
  },
  {
    title: "Dedicated Desk",
    index: "Get Business Plan",
    description: "Ideal for startups to establish strong business presence.",
    price: 1499,
    icon: "icon-[solar--rocket-2-bold-duotone]",
    bg: "bg-primary",
    featured: true,
  },
  {
    title: "Virtual Office",
    index: "Get Virtual Office Plan",
    description: "Virtual office with permanent desk at prime location.",
    price: 2499,
    icon: "icon-[solar--stars-bold-duotone]",
    bg: "bg-violet-400",
    featured: false,
  },
];

const plansDetails = [
  {
    Feature: "Register the New Business Entity",
    "Get Mailing Address Plan": false,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "Update your Registered Address formally",
    "Get Mailing Address Plan": false,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "Use the Address for Opening a Bank Account",
    "Get Mailing Address Plan": false,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "Utilize Address for GST Plan",
    "Get Mailing Address Plan": false,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "Utilize the provided address for correspondence",
    "Get Mailing Address Plan": true,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "On-site GST/Departmental Verification",
    "Get Mailing Address Plan": true,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "Courier Receiving and Forwarding Services",
    "Get Mailing Address Plan": true,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "Standard / Premium Permanent Signage",
    "Get Mailing Address Plan": false,
    "Get Business Plan": false,
    "Get Virtual Office Plan": true,
  },
  {
    Feature:
      "Use Professional Address Across all official Platforms Effectively",
    "Get Mailing Address Plan": true,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "Meeting Room Access (T&C Apply)",
    "Get Mailing Address Plan": true,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "Temporary Signage Assurance (name)",
    "Get Mailing Address Plan": false,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "Unique Desk Number",
    "Get Mailing Address Plan": false,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "On-Site Support during field-visit",
    "Get Mailing Address Plan": false,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "Permanent Signage (entry)",
    "Get Mailing Address Plan": false,
    "Get Business Plan": false,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "IVR facility Support (At Additional cost)",
    "Get Mailing Address Plan": true,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
  {
    Feature: "No Hidden Charges",
    "Get Mailing Address Plan": true,
    "Get Business Plan": true,
    "Get Virtual Office Plan": true,
  },
];

function annualPrice(price) {
  let total = price * 12;
  let discount = Math.round((5 / 100) * total, 0);
  return total - discount;
}
</script>
