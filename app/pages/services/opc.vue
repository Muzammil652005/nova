<template>
  <ServicesSubService1 />

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
                class="w-full py-4 pr-6 service_li"
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

              <!-- Show description if present -->
              <p v-if="i.desc" class="text-sm mb-2">{{ i.desc }}</p>

              <!-- Render list if present -->
              <ul v-if="i.list" class="ml-6 my-2 space-y-1 pb-6">
                <template v-for="(v, s) in i.list" :key="`${k}-${s}`">
                  <li class="list-decimal">
                    <!-- Case 1: v is just a string -->
                    <span v-if="typeof v === 'string'">{{ v }}</span>

                    <!-- Case 2: v is an object with title/desc/list -->
                    <div v-else>
                      <p v-if="v.title" class="font-medium">{{ v.title }}</p>
                      <p v-if="v.desc" class="text-sm">{{ v.desc }}</p>

                      <!-- Nested list -->
                      <ul v-if="v.list" class="ml-6 list-disc">
                        <li v-for="(x, z) in v.list" :key="`${k}-${s}-${z}`">
                          <span v-if="typeof x === 'string'">{{ x }}</span>

                          <!-- Support further nesting -->
                          <div v-else>
                            <p v-if="x.title" class="font-medium">
                              {{ x.title }}
                            </p>
                            <p v-if="x.desc" class="text-sm">{{ x.desc }}</p>
                            <ul v-if="x.list" class="ml-6 list-disc">
                              <li
                                v-for="(y, q) in x.list"
                                :key="`${k}-${s}-${z}-${q}`"
                              >
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
  title: "One Person Company (OPC)",
  long: "A One Person Company (OPC) is a modern business structure introduced under the Companies Act, 2013 and overseen by the Ministry of Corporate Affairs (MCA). It allows a single individual to incorporate a company while enjoying the benefits of limited liability and corporate recognition. To register, it requires one director and one nominee, with the condition that the sole director must be an Indian Resident. An OPC is an ideal option for solo entrepreneurs and small businesses seeking a separate legal identity without involving multiple shareholders. It combines the simplicity of sole proprietorship with the advantages of a corporate setup, making it a suitable choice for professionals and individuals aiming for easier compliance, business credibility, and sustainable growth.",
  small:
    "A single-owner company model with limited liability, ideal for entrepreneurs seeking corporate status with minimal compliance.",
};

const registrationInfo = [
  {
    title: "Documents Required to Register a One Person Company",
    list: [
      {
        title: "Identity Proof and Address Proof",
        list: [
          "Passport / Aadhar card / Voter ID / Driver's License of Directors/Shareholders",
          "PAN card",
          "Utility bills or Bank Statements as address proof",
        ],
      },
      {
        title: "Proof of Registered Office",
        list: [
          "If owned property: Utility bill like an electricity bill or corporation tax receipt not later than 30 days",
          "If rented property: Rental Agreement or No Objection Certificate (NOC)",
        ],
      },
      {
        title:
          "Memorandum of Association (MOA) and Articles of Association (AOA)",
        list: [
          "MOA outlines the objectives and scope of activities of the company",
          "AOA defines the internal regulations and governance structures of the company",
        ],
      },
      {
        title: "Declaration and Consent of the Proposed Director",
        list: [
          "Form DIR-2: Consent to act as Director",
          "Form INC-9: Official declaration by the Director",
        ],
      },
      {
        title: "Declaration and Consent of the Nominee",
        desc: "Form INC-3 with PAN card and Aadhaar card serves as the official consent of the Nominee.",
      },
    ],
  },
  {
    title: "One Person Company Incorporation Process",
    list: [
      {
        title: "Obtain a Digital Signature Certificate (DSC)",
        desc: "Digital certificate used for e-signing forms; can be obtained via Aadhar e-KYC or supporting documents from certifying agencies.",
      },
      {
        title: "Apply for Name Approval using SPICe+ Part A",
        desc: "Provides for 'Name Reservation' with two proposed names and one re-submission option.",
      },
      {
        title: "Apply for Company Registration using SPICe+ Part B",
        list: [
          "Once name is approved, submit the Part B form on MCA portal",
          "Include DSC, SPICe-MOA, SPICe-AOA, declarations, and requisite fee",
        ],
      },
      {
        title: "Open a Bank Account",
        desc: "Use AGILE-PRO-S (Form INC-35) to apply for GSTIN, EPFO, ESIC, Profession Tax, and bank account.",
      },
      {
        title: "File for Commencement of Business Certificate",
        desc: "Submit Form INC-20A within 180 days from incorporation.",
      },
    ],
  },
  {
    title: "Compliances for One Person Company",
    list: [
      {
        title: "For Directors/Shareholders",
        list: [
          "At least one Director (shareholder) is mandatory",
          "Nominee appointment is compulsory",
          "Maximum of 15 Directors (increase requires filing a resolution)",
        ],
      },
      {
        title: "For the One Person Company",
        list: [
          "Minimum of two board meetings each year, with 90-day gap between sessions",
          "File Annual Return through Form MGT-7 at the end of financial year",
          "File Financial Statements through Form AOC-4",
          "File Form ADT-1 within 15 days of auditor appointment",
          "Appoint first auditor within 30 days of incorporation",
          "File Form DIR-3 KYC for Director details before 30th September",
        ],
      },
      {
        title: "Minimum Capital Requirement",
        desc: "No minimum paid-up capital required, but minimum authorized capital is ₹1,00,000. Paid-up capital can be as low as ₹1.",
      },
      {
        title: "Tax Rates",
        list: [
          "Applicable tax rate: 30% plus surcharge and cess",
          "Surcharge: 12% on income tax, if applicable",
          "Health and Education cess: 4% on tax plus surcharge",
        ],
      },
    ],
  },
  {
    title: "Advantages of One Person Company",
    list: [
      "Limited liability for the shareholder",
      "Fewer compliances compared to private/public companies",
      "Smooth management like a sole proprietorship",
      "Perpetual succession – nominee takes over if shareholder unavailable",
      "Eligibility to secure funds from banks or institutions",
    ],
  },
  {
    title: "Disadvantages of One Person Company",
    list: [
      "Limited growth potential as only one shareholder is allowed",
      "Cannot carry out NBFC investment activities",
      "Limited resource pool and management scalability",
    ],
  },
  {
    title: "One Person Company Registration Number",
    desc: "Known as Corporate Identification Number (CIN), a 21-character code issued by ROC. Example: U01403MH2015OPC264485.",
  },
  {
    title: "How to Get a Registration Number",
    desc: "On SPICe+ Form approval, MCA issues Certificate of Incorporation containing Company Name, CIN, PAN, TAN, registered office address, and incorporation date.",
  },
  {
    title: "One Person Company Registration Time",
    list: [
      "Average processing: 7–10 days, subject to MCA approval",
      "Delays may arise due to document errors, name approval issues, server glitches, response deadlines, or payment delays",
    ],
  },
  {
    title: "One Person Company Registration Fees",
    desc: "With Razorpay Rize: ₹1,499 + Govt. fee (includes DSC, DIN, COI, MOA, AOA, PAN, TAN).",
  },
  {
    title: "Checklist for Registration",
    list: [
      "Get Digital Signature Certificate (DSC) for Director",
      "Consent from both Director and Nominee",
      "Draft e-MOA and e-AOA",
      "Reserve Company Name",
      "Submit SPICe+ application for registration",
      "Obtain Certificate of Incorporation from RoC",
      "Acquire PAN & TAN",
      "Open a Current Bank Account",
      "Comply with post-incorporation filings",
    ],
  },
];

function scrollTo(id) {
  let cele = document.getElementById(id);
  cele.scrollIntoView();

  currentView.value = id;
}
</script>
