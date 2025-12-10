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
                <li v-for="(v,s) in i.list" :key="`${k}-${s}`" class="list-decimal">
                  <span v-if="typeof v === 'string'">{{ v }}</span>

                  <div v-else>
                    <p v-if="v.title" class="font-medium">{{ v.title }}</p>
                    <p v-if="v.desc" class="text-sm">{{ v.desc }}</p>

                    <ul v-if="v.list" class="ml-6 list-disc">
                      <li v-for="(x,z) in v.list" :key="`${k}-${s}-${z}`">
                        <span v-if="typeof x === 'string'">{{ x }}</span>

                        <div v-else>
                          <p v-if="x.title" class="font-medium">{{ x.title }}</p>
                          <p v-if="x.desc" class="text-sm">{{ x.desc }}</p>

                          <ul v-if="x.list" class="ml-6 list-disc">
                            <li v-for="(y,q) in x.list" :key="`${k}-${s}-${z}-${q}`">
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
  title: "One Person Company (OPC)",
  long: "A One Person Company (OPC) is a modern business structure introduced under the Companies Act, 2013 and overseen by MCA. It allows a single individual to incorporate a company while enjoying limited liability and corporate recognition. Ideal for solo entrepreneurs and professionals.",
  small: "Single-owner corporate structure with limited liability & easier compliance."
}

const registrationInfo = [
  {
    title: "Documents Required to Register a One Person Company",
    key: "docs",
    list: [
      {
        title: "Identity Proof and Address Proof",
        list: [
          "Passport / Aadhaar / Voter ID / Driver’s License",
          "PAN card",
          "Utility bills or Bank Statements as address proof"
        ]
      },
      {
        title: "Proof of Registered Office",
        list: [
          "Owned Property: Electricity bill or tax receipt (not older than 30 days)",
          "Rented Property: Rental Agreement or NOC"
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
        title: "Declarations & Consent",
        list: [
          "Form DIR-2 (Director consent)",
          "Form INC-9 (Director declaration)",
          "Form INC-3 (Nominee consent)"
        ]
      }
    ]
  },

  {
    title: "One Person Company Incorporation Process",
    key: "process",
    list: [
      "Obtain Digital Signature Certificate (DSC)",
      "Apply for Name Approval via SPICe+ Part A",
      {
        title: "Company Registration using SPICe+ Part B",
        list: [
          "Upload MOA & AOA",
          "Submit Director consent & nominee details",
          "Application for PAN & TAN",
          "Apply EPFO & ESIC if required"
        ]
      },
      "Open a Company Bank Account",
      "File INC-20A for Commencement of Business"
    ]
  },

  {
    title: "Compliances for One Person Company",
    key: "compliance",
    list: [
      {
        title: "Director Requirements",
        list: [
          "Minimum 1 Director",
          "Nominee appointment mandatory"
        ]
      },
      {
        title: "Company Compliance",
        list: [
          "2 Board Meetings per year",
          "Annual Return filing (MGT-7)",
          "Financial Statement filing (AOC-4)",
          "Audit mandatory every year"
        ]
      },
      {
        title: "Taxation",
        list: [
          "Corporate tax: 30% + surcharge + 4% cess"
        ]
      }
    ]
  },

  {
    title: "Advantages of One Person Company",
    key: "advantages",
    list: [
      "Limited liability protection",
      "Separate legal entity",
      "Easy to operate like proprietorship",
      "Nominee takes over on contingency"
    ]
  },

  {
    title: "Disadvantages of One Person Company",
    key: "disadvantages",
    list: [
      "Only 1 shareholder allowed → growth limitation",
      "Cannot carry out NBFC activities",
      "More compliance cost vs sole proprietorship"
    ]
  },

  {
    title: "One Person Company Registration Number",
    key: "reg",
    desc: "A 21-character Corporate Identification Number (CIN) issued by MCA."
  },

  {
    title: "Registration Time",
    key: "time",
    list: ["Typically 7–10 working days (subject to MCA approval)"]
  },

  {
    title: "Fees",
    key: "fee",
    desc: "₹1,499 + government fees (varies based on state)"
  },

  {
    title: "Checklist for Registration",
    key: "checklist",
    list: [
      "Digital signature for Director",
      "Nominee consent (Form INC-3)",
      "Unique company name",
      "Submit SPICe+ Part B",
      "Receive COI",
      "Open bank account"
    ]
  }
]
</script>
