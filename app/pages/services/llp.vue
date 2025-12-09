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
  title: "Limited Liability Partnership (LLP)",
  long: "A Limited Liability Partnership (LLP) is a popular form of business registration in India, established under the LLP Act, 2008 and regulated by the Ministry of Corporate Affairs (MCA). It combines the advantages of both a partnership firm and a private company. To register, it requires a minimum of two partners, with at least one designated partner being a resident of India. An LLP is well-suited for professionals and small to medium-sized enterprises looking for limited liability protection with flexibility in internal management. It offers ease of compliance, a separate legal identity, and cost-effectiveness, making it a practical choice for entrepreneurs seeking long-term stability, structured governance, and operational freedom.",
  small:
    "A flexible partnership with limited liability and separate legal identity, suitable for SMEs and professionals seeking cost-effective compliance.",
};
const registrationInfo = [
  {
    title: "Documents Required to Register a Limited Liability Partnership",
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
    list: [
      {
        title: "Obtain a Digital Signature Certificate (DSC)",
        desc: "A DSC is a digital method of verifying or attesting a document obtained through any Government Certifying Agencies (CAs) with either one-year or two-year validity. You can approach CAs for Aadhaar e-KYC verification or supporting documents like PAN, identity proof, and address proof.",
      },
      {
        title: "Name Approval",
        desc: "Reserve an LLP's name using the LLP-RUN form (Limited Liability Partnership - Reserve Unique Name). Two proposed names can be submitted.",
      },
      {
        title: "LLP Registration",
        list: [
          "Fill out the FiLLiP (Form for Incorporation of LLP) and submit to the Registrar where LLP's registered office is located.",
          "Submit Subscriber Sheet and consent of a Director (Form DIR-9) alongside FiLLiP.",
          "Subscriber Sheet is legal evidence of the agreement of initial members to participate.",
        ],
      },
      {
        title: "Submit LLP Agreement",
        desc: "File the LLP Agreement using Form 3 on the MCA portal within 30 days of registration. The agreement governs the mutual rights and responsibilities of partners.",
      },
      "Open a current bank account for the LLP",
      "File Commencement of Business Certificate within prescribed timeline",
    ],
  },
  {
    title: "Compliances for Limited Liability Partnership",
    list: [
      {
        title: "For Partners",
        list: [
          "Minimum of two partners required to form an LLP.",
          "Typically no upper limit on the number of partners.",
        ],
      },
      {
        title: "For the LLP",
        list: [
          "File LLP agreement within 30 days or face penalty of Rs 100/day.",
          "File form DIR3 for DIN allotment if existing company.",
          "File annual statements: Forms 11 (Annual Return) and 8 (Statement of Accounts and Solvency).",
          "File Income Tax Return (ITR) annually.",
          "Deposit partners' contributions to bank as per agreed timeline.",
          "Obtain GST registration as legally required.",
          "Conduct audit if turnover exceeds Rs 40 lakhs or contribution exceeds Rs 25 lakhs.",
        ],
      },
      {
        title: "Minimum Capital Requirement",
        desc: "No minimum capital requirement. Partners may mutually determine capital amount. Initial capital of ₹10,000 is advisable.",
      },
      {
        title: "Tax Rates",
        list: [
          "Income tax on LLP earnings at a fixed rate of 30%.",
          "Surcharge of 12% for taxable income exceeding ₹1 Crore.",
          "Health and Education cess of 4% on tax plus surcharge.",
        ],
      },
    ],
  },
  {
    title: "Advantages of Limited Liability Partnership",
    list: [
      "Limited liability limited to partners' contributions.",
      "Separate legal entity responsible for assets and liabilities.",
      "Simpler registration process and fewer compliances than companies.",
      "No requirement for minimum paid-up capital.",
      "Perpetual succession unaffected by partner changes.",
      "No maximum limit to number of partners.",
    ],
  },
  {
    title: "Disadvantages of Limited Liability Partnership",
    list: [
      "Difficult to raise capital due to absence of equity shareholders.",
      "Cannot raise money via IPO.",
      "Dissolution is time-consuming with rigorous documentation.",
    ],
  },
  {
    title: "Limited Liability Partnership Registration Number",
    desc: "Known as LLPIN, a unique 7-digit alphanumeric code assigned on registration, e.g. AAA-1234.",
  },
  {
    title: "How to Get a Registration Number",
    desc: "After FiLLiP Form approval, ROC issues Certificate of Incorporation containing LLP name, LLPIN, registration date, and registered office details.",
  },
  {
    title: "Limited Liability Partnership Registration Time",
    list: [
      "Typical processing time is 7-10 days after submission of documents.",
      "Delays may be caused by documentation errors, name approval issues, MCA server problems, payment delays, or jurisdictional processing differences.",
    ],
  },
  {
    title: "Limited Liability Partnership Registration Fees",
    desc: "Cost can vary by jurisdiction and professional fees. Razorpay Rize charges ₹1,499 plus government fees.",
  },
  {
    title: "Checklist for Registration",
    list: [
      "Obtain DSC for all partners.",
      "Reserve LLP name using LLP-RUN form.",
      "Fill and submit FiLLiP form.",
      "Get Certificate of Incorporation.",
      "Obtain PAN and TAN.",
      "Draft LLP Agreement.",
      "Open current bank account.",
      "Comply with regulatory filings.",
    ],
  },
];

function scrollTo(id) {
  let cele = document.getElementById(id);
  cele.scrollIntoView();

  currentView.value = id;
}
</script>
