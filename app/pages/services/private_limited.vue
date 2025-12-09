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
  title: "Private Limited Company",
  long: "A Private Limited Company is one of the most widely adopted business structures in India, regulated by the Companies Act, 2013 under the Ministry of Corporate Affairs (MCA). It requires a minimum of two directors and two shareholders to be incorporated. The directors and shareholders may be the same or different individuals, with the condition that at least one director must be a resident of India. A Private Limited Company is considered the most suitable model for startups and enterprises focused on scalability. It offers credibility, limited liability, and ease of raising funds, making it a trusted structure for entrepreneurs aiming long-term growth and organized business expansion.",
  small:
    "A widely adopted business structure requiring at least two directors and two shareholders, offering credibility, limited liability, and ease of fundraising.",
};

const registrationInfo = [
  {
    title: "Documents Required to Register a Private Limited Company",
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
          "Ownership of Property – Recent utility bill (electricity, corporation tax receipt) not older than 30 days",
          "Right to use Property – Rental Agreement or No Objection Certificate (NOC) from the owner",
        ],
      },
      {
        title:
          "Memorandum of Association (MOA) and Articles of Association (AOA)",
        list: [
          "MOA defines the company's objectives and scope of activities",
          "AOA outlines the company's internal regulations and governance structures",
        ],
      },
      {
        title: "Declaration and Consent of Directors",
        desc: "Form INC-9 and DIR-2 serve as official declaration and consent for director appointments",
      },
    ],
  },
  {
    title: "Private Limited Company Incorporation Process",
    key: "process",
    list: [
      "Obtain a Digital Signature Certificate (DSC) – mandatory for MOA/AOA witnesses",
      "Apply for Name Approval using SPICe+ Part A – reserve a unique company name",
      {
        title: "Apply for Registration using SPICe+ Part B",
        list: [
          "Application for allotment of Director Identification Number (DIN)",
          "Incorporation of the new company",
          "Submission of e-MoA (INC-33) and e-AoA (INC-34)",
          "Application for PAN and TAN",
          "Application for EPFO and ESIC registration",
          "Professional Tax registration (for Maharashtra)",
        ],
      },
      "Open a Current Account for the company",
      "File Commencement of Business Certificate via Form INC-20A (within 180 days of incorporation)",
    ],
  },
  {
    title: "Compliances for Private Limited Company",
    key: "compliance",
    list: [
      {
        title: "For Partners",
        list: [
          "Minimum of 2 directors and 2 shareholders required (at least one director must be an Indian resident)",
          "Maximum 200 shareholders allowed under Companies Act, 2013",
        ],
      },
      {
        title: "For the Company",
        list: [
          "Hold the First Board Meeting within 30 days of incorporation",
          "Four board meetings every year with not more than 120-day gap",
          "Conduct Annual General Meeting on/before September 30 each year",
          "Appoint first auditor within 30 days",
          "File ADT-1 within 15 days of subsequent auditor appointment",
          "File Annual Returns: AOC-4 (within 30 days of AGM) and MGT-7 (within 60 days of AGM)",
          "File Income Tax Return (ITR-6) annually",
          "File DIR-3 KYC for directors",
        ],
      },
      {
        title: "Minimum Capital Requirement",
        desc: "No mandatory minimum capital. Practically advised authorized capital: ₹1,00,000.",
      },
      {
        title: "Tax Rates",
        list: [
          "Basic corporate tax rate: 25% (FY 23–24)",
          "Surcharge: 7% (if income > ₹1 Cr up to ₹10 Cr), 12% (if > ₹10 Cr)",
          "Health & Education Cess: 4% on tax + surcharge",
        ],
      },
    ],
  },
  {
    title: "Advantages of Private Limited Company",
    key: "advantages",
    list: [
      "Limited liability for shareholders",
      "Separate legal entity status",
      "Perpetual succession (company continues irrespective of members)",
      "Easier access to funding and foreign investment",
      "Possible tax benefits and incentives",
    ],
  },
  {
    title: "Disadvantages of Private Limited Company",
    key: "disadvantages",
    list: [
      "Complex and costly registration & dissolution process",
      "Recurring compliance costs every year regardless of turnover",
      "Slower decision-making due to dependence on multiple directors",
      "Requires frequent professional assistance (CA/CS)",
    ],
  },
  {
    title: "Private Limited Company Registration Number",
    key: "reg",
    desc: "A unique 21-digit Corporate Identification Number (CIN) is issued on incorporation, encoding listing status, industry code, state, year of incorporation, company type, and unique ROC registration number.",
  },
  {
    title: "Private Limited Company Registration Time",
    key: "time",
    list: [
      "Approx. 7–10 days after filing SPICe+, subject to MCA approval",
      "Delays may occur due to incomplete documentation, name approval rejections, MCA server issues, payment delays, or jurisdictional variance",
    ],
  },
  {
    title: "Private Limited Company Registration Fees",
    key: "fee",
    desc: "₹1,499 + Govt. Fees with Novadesk (can vary with jurisdiction, professional fees, and extra services).",
  },
  {
    title: "Checklist for Registration",
    key: "checklist",
    list: [
      "Obtain Digital Signature Certificate for all directors",
      "Draft e-MOA & e-AOA",
      "Reserve unique company name via SPICe+ Part A",
      "Submit incorporation via SPICe+ Part B",
      "Submit documents and fees",
      "Receive Certificate of Incorporation",
      "Obtain PAN & TAN",
      "Open company bank account and provide office address proof",
    ],
  },
];
</script>
