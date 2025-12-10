<template>
  <!-- <ServicesSubService1 /> -->

  <ServicesSubMarquee />

  <section class="w-full lg:h-auto">
    <ServicesImageCard
      :title="companyTypes.title"
      :long="companyTypes.long"
      :small="companyTypes.small"
    />

    <div class="max-w-[1440px] h-full mx-auto flex flex-col">
      <div
        class="size-full flex flex-col md:flex-row items-start justify-start mt-8 scroll-smooth max-md:bg-primary max-md:px-4"
      >
        <div
          class="h-screen w-auto md:px-6 pr-0 sticky top-4 max-md:hidden block"
        >
          <ul class="size-full md:border-r md:border-slate-500">
            <template v-for="(i, k) in links" :key="k">
              <li
                :class="currentView == i.key ? 'service_li_active' : ''"
                class="w-full py-4 pr-6 service_li cursor-pointer"
                @click="scrollTo(i.key)"
              >
                {{ i.text }}
              </li>
            </template>
          </ul>
        </div>

        <div
          class="h-full w-full md:w-[60%] md:pl-8 md:pr-4 max-md:mt-6 sticky top-4"
        >
          <ul class="overflow-y-scroll service_dec">
            <template v-for="(i, k) in registrationInfo" :key="k">
              <h4
                class="text-xl lg:text-2xl font-bold my-2 text-white md:text-primary"
                :id="i.key"
              >
                {{ i.title }}
              </h4>

              <p v-if="i.desc" class="text-sm mb-2">{{ i.desc }}</p>

              <ul v-if="i.list" class="ml-6 my-2 space-y-1 pb-6">
                <template v-for="(v, s) in i.list" :key="`${k}-${s}`">
                  <li class="list-decimal">
                    <span v-if="typeof v === 'string'">{{ v }}</span>
                    <div v-else>
                      <p v-if="v.title" class="font-medium">{{ v.title }}</p>
                      <p v-if="v.desc" class="text-sm">{{ v.desc }}</p>

                      <ul v-if="v.list" class="ml-6 list-disc">
                        <li v-for="(x, z) in v.list" :key="`${k}-${s}-${z}`">
                          <span v-if="typeof x === 'string'">{{ x }}</span>
                          <div v-else>
                            <p v-if="x.title" class="font-medium">{{ x.title }}</p>
                            <p v-if="x.desc" class="text-sm">{{ x.desc }}</p>
                            <ul v-if="x.list" class="ml-6 list-disc">
                              <li v-for="(y, q) in x.list" :key="`${k}-${s}-${z}-${q}`">
                                {{ y }}
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </template>
              </ul>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
const currentView = ref(null);

const links = [
  { text: "Documents required for registration", key: "docs" },
  { text: "Incorporation Process", key: "process" },
  { text: "Compliances & Requirements", key: "compliance" },
  { text: "Advantages", key: "advantages" },
  { text: "Disadvantages", key: "disadvantages" },
  { text: "Registration Number", key: "reg" },
  { text: "Registration Time", key: "time" },
  { text: "Fees", key: "fee" },
  { text: "Checklist for Registration", key: "checklist" },
];

const companyTypes = {
  title: "Limited Liability Partnership (LLP)",
  long: "A Limited Liability Partnership (LLP) is a popular form of business registration in India, established under the LLP Act, 2008 and regulated by the Ministry of Corporate Affairs (MCA). It combines the advantages of both a partnership firm and a private company. To register, it requires a minimum of two partners, with at least one designated partner being a resident of India. An LLP is well-suited for professionals and small to medium-sized enterprises looking for limited liability protection with flexibility in internal management. It offers ease of compliance, a separate legal identity, and cost-effectiveness, making it a practical choice for entrepreneurs seeking long-term stability, structured governance, and operational freedom.",
  small:
    "A flexible partnership with limited liability and separate legal identity, suitable for SMEs and professionals seeking cost-effective compliance.",
};

const registrationInfo = [
  {
    title: "Documents Required to Register a Limited Liability Partnership",
    key: "docs",
    list: [
      {
        title: "Identity Proof and Address Proof",
        list: [
          "Passport / Aadhar card / Voter ID / Driver's License of partners",
          "PAN card",
          "Utility bills or Bank Statements as address proof",
        ],
      },
      {
        title: "Proof of Registered Office",
        list: [
          "Any utility bill like an electricity bill or corporation tax receipt not later than 30 days",
          "Rental Agreement or No Objection Certificate (NOC)",
        ],
      },
      {
        title: "Declaration and Consent of the proposed Partners",
        desc: "Form DIR-9 serves as the official consent to assume the role of a Partner within the prospective company.",
      },
    ],
  },
  {
    title: "Limited Liability Partnership Incorporation Process",
    key: "process",
    list: [
      {
        title: "Obtain a Digital Signature Certificate (DSC)",
        desc: "A DSC is used for verifying or attesting documents issued by Government Certifying Agencies.",
      },
      {
        title: "Name Approval",
        desc: "Reserve an LLP's name using LLP-RUN form.",
      },
      {
        title: "LLP Registration",
        list: [
          "Fill FiLLiP (Form for Incorporation of LLP)",
          "Submit Subscriber Sheet & Consent of Partners",
        ],
      },
      {
        title: "Submit LLP Agreement",
        desc: "File Form 3 on MCA within 30 days of registration.",
      },
      "Open a current account",
      "File Commencement Certificate",
    ],
  },
  {
    title: "Compliances for Limited Liability Partnership",
    key: "compliance",
    list: [
      {
        title: "For Partners",
        list: [
          "Minimum of two partners",
          "No upper limit for number of partners",
        ],
      },
      {
        title: "For the LLP",
        list: [
          "File LLP Agreement within 30 days",
          "File annual returns (Form 8 & 11)",
          "File Income Tax Return",
        ],
      },
    ],
  },
  {
    title: "Advantages of LLP",
    key: "advantages",
    list: [
      "Limited liability",
      "Separate legal identity",
      "Less compliance burden",
    ],
  },
  {
    title: "Disadvantages of LLP",
    key: "disadvantages",
    list: [
      "Difficult to raise capital",
      "Cannot issue shares",
    ],
  },
  {
    title: "Registration Number",
    key: "reg",
    desc: "LLPIN — unique 7-digit registration number.",
  },
  {
    title: "Registration Time",
    key: "time",
    list: ["7–10 days standard processing time"],
  },
  {
    title: "Fees",
    key: "fee",
    desc: "₹1,499 + Government fees",
  },
  {
    title: "Checklist for Registration",
    key: "checklist",
    list: [
      "Obtain DSC",
      "Reserve name",
      "Submit FiLLiP form",
      "Get Certificate of Incorporation",
    ],
  },
];

function scrollTo(id) {
  currentView.value = id;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
</script>
