<template>
  <ServicesSubMarquee />

  <section class="w-full lg:h-auto">
    <ServicesImageCard
      :title="companyTypes.title"
      :long="companyTypes.long"
      :small="companyTypes.small"
    />

    <div class="max-w-[1440px] mx-auto flex flex-col">
      <div
        class="size-full flex flex-col md:flex-row mt-8 max-md:bg-primary max-md:px-4"
      >
        <!-- LEFT MENU -->
        <div class="h-screen md:px-6 pr-0 sticky top-4 max-md:hidden">
          <ul class="size-full md:border-r md:border-slate-500">
            <li
              v-for="(i,k) in links"
              :key="k"
              @click="scrollToSection(i.key)"
              class="w-full py-4 pr-6 service_li cursor-pointer"
              :class="currentView === i.key ? 'service_li_active' : ''"
            >
              {{ i.text }}
            </li>
          </ul>
        </div>

        <!-- RIGHT CONTENT -->
        <div class="h-full w-full md:w-[60%] md:pl-8 md:pr-4 max-md:mt-6">
          <ul class="overflow-y-scroll service_dec">
            <template v-for="(i,k) in registrationInfo" :key="k">
              <h4
                :id="i.key"
                class="text-xl lg:text-2xl font-bold my-2 text-white md:text-primary"
              >
                {{ i.title }}
              </h4>

              <p v-if="i.desc" class="text-sm mb-2">{{ i.desc }}</p>

              <ul v-if="i.list" class="ml-6 my-2 space-y-1 pb-6">
                <li
                  v-for="(v,s) in i.list"
                  :key="`${k}-${s}`"
                  class="list-decimal"
                >
                  <!-- Text only -->
                  <span v-if="typeof v === 'string'">{{ v }}</span>

                  <!-- Nested structure -->
                  <div v-else>
                    <p v-if="v.title" class="font-medium">
                      {{ v.title }}
                    </p>
                    <p v-if="v.desc" class="text-sm">{{ v.desc }}</p>

                    <ul v-if="v.list" class="ml-6 list-disc">
                      <li
                        v-for="(x,z) in v.list"
                        :key="`${k}-${s}-${z}`"
                      >
                        <span v-if="typeof x === 'string'">{{ x }}</span>

                        <div v-else>
                          <p v-if="x.title" class="font-medium">{{ x.title }}</p>
                          <p v-if="x.desc" class="text-sm">{{ x.desc }}</p>

                          <ul v-if="x.list" class="ml-6 list-disc">
                            <li
                              v-for="(y,q) in x.list"
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
const currentView = ref('docs')

// Auto scroll to first section
onMounted(() => {
  scrollToSection('docs')
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function scrollToSection(key) {
  currentView.value = key
  const el = document.getElementById(key)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

function onScroll() {
  registrationInfo.forEach(sec => {
    const el = document.getElementById(sec.key)
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top <= 150 && rect.bottom >= 150) {
      currentView.value = sec.key
    }
  })
}

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
]

const companyTypes = {
  title: "Private Limited Company",
  long: "A Private Limited Company is one of the most widely adopted business structures in India, regulated by the Companies Act, 2013 under the Ministry of Corporate Affairs (MCA). It requires a minimum of two directors and two shareholders for incorporation. At least one director must be an Indian resident. It is the preferred structure for startups aiming high growth.",
  small: "A widely adopted business structure offering credibility, limited liability, and fundraising options for startups."
}

const registrationInfo = [
  {
    title: "Documents Required to Register a Private Limited Company",
    key: "docs",
    list: [
      {
        title: "Identity & Address Proof of Directors",
        list: [
          "Aadhaar / Passport / Voter ID / Driving License",
          "PAN Card",
          "Recent Utility Bill or Bank Statement"
        ]
      },
      {
        title: "Registered Office Proof",
        list: [
          "Electricity Bill/Tax Receipt (Not older than 30 days)",
          "Rent Agreement / NOC from Owner if rented"
        ]
      },
      {
        title: "Company Incorporation Documents",
        list: [
          "Memorandum of Association (MOA)",
          "Articles of Association (AOA)"
        ]
      },
      {
        title: "Declarations",
        desc: "Form INC-9 & DIR-2 - consent & declaration of directors"
      }
    ]
  },

  {
    title: "Private Limited Company Incorporation Process",
    key: "process",
    list: [
      "Obtain Digital Signature Certificate (DSC)",
      "Name Approval via SPICe+ Part A",
      {
        title: "File SPICe+ Part B for Registration",
        list: [
          "Apply DIN for Directors",
          "Submit e-MoA (INC-33) & e-AoA (INC-34)",
          "Apply PAN & TAN",
          "Apply EPFO & ESIC",
          "Online application for bank account"
        ]
      },
      "Receive Certificate of Incorporation",
      "File Commencement of Business (INC-20A)"
    ]
  },

  {
    title: "Compliances & Requirements",
    key: "compliance",
    list: [
      {
        title: "Company Compliance",
        list: [
          "Minimum 2 Board Meetings per year",
          "Statutory Registrar Filings every year",
          "Annual Audit mandatory",
          "Income Tax Return every year"
        ]
      },
      {
        title: "Capital Requirements",
        desc: "No minimum paid-up capital requirement. Directors may decide."
      },
      {
        title: "Taxation",
        list: [
          "Corporate Tax Rate: 25%",
          "Surcharge (if applicable)",
          "Health & Education Cess – 4%"
        ]
      }
    ]
  },

  {
    title: "Advantages",
    key: "advantages",
    list: [
      "Limited liability for shareholders",
      "Separate Legal Identity",
      "Easy fundraising from investors",
      "Better business credibility"
    ]
  },

  {
    title: "Disadvantages",
    key: "disadvantages",
    list: [
      "Higher compliance cost",
      "More legal formalities",
      "Slower decision making vs proprietorship"
    ]
  },

  {
    title: "Registration Number",
    key: "reg",
    desc: "21-digit Corporate Identification Number (CIN) issued by MCA."
  },

  {
    title: "Registration Time",
    key: "time",
    list: [
      "7–10 working days (subject to MCA approval)"
    ]
  },

  {
    title: "Fees",
    key: "fee",
    desc: "₹1,499 + Government fees (varies by state)"
  },

  {
    title: "Checklist for Registration",
    key: "checklist",
    list: [
      "Apply DSC",
      "Unique Company Name",
      "Submit SPICe+ Form",
      "Get COI",
      "Obtain PAN & TAN",
      "Open Bank Account"
    ]
  }
]
</script>