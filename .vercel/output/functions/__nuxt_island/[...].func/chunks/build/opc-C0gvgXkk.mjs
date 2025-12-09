import { _ as _sfc_main$2, a as __nuxt_component_1, b as _sfc_main$1 } from './image-card-DOSImrvz.mjs';
import { _ as __nuxt_component_3 } from './footer-Cxu8MBjM.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import './_plugin-vue_export-helper-ZKqNt5RG.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './NuxtImg-BEgnGHVj.mjs';
import './nuxt-link-iaoeg8sI.mjs';

const _sfc_main = {
  __name: "opc",
  __ssrInlineRender: true,
  setup(__props) {
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
      { text: "Checklist for Registration", key: "checklist" }
    ];
    const companyTypes = {
      title: "One Person Company (OPC)",
      long: "A One Person Company (OPC) is a modern business structure introduced under the Companies Act, 2013 and overseen by the Ministry of Corporate Affairs (MCA). It allows a single individual to incorporate a company while enjoying the benefits of limited liability and corporate recognition. To register, it requires one director and one nominee, with the condition that the sole director must be an Indian Resident. An OPC is an ideal option for solo entrepreneurs and small businesses seeking a separate legal identity without involving multiple shareholders. It combines the simplicity of sole proprietorship with the advantages of a corporate setup, making it a suitable choice for professionals and individuals aiming for easier compliance, business credibility, and sustainable growth.",
      small: "A single-owner company model with limited liability, ideal for entrepreneurs seeking corporate status with minimal compliance."
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
              "Utility bills or Bank Statements as address proof"
            ]
          },
          {
            title: "Proof of Registered Office",
            list: [
              "If owned property: Utility bill like an electricity bill or corporation tax receipt not later than 30 days",
              "If rented property: Rental Agreement or No Objection Certificate (NOC)"
            ]
          },
          {
            title: "Memorandum of Association (MOA) and Articles of Association (AOA)",
            list: [
              "MOA outlines the objectives and scope of activities of the company",
              "AOA defines the internal regulations and governance structures of the company"
            ]
          },
          {
            title: "Declaration and Consent of the Proposed Director",
            list: [
              "Form DIR-2: Consent to act as Director",
              "Form INC-9: Official declaration by the Director"
            ]
          },
          {
            title: "Declaration and Consent of the Nominee",
            desc: "Form INC-3 with PAN card and Aadhaar card serves as the official consent of the Nominee."
          }
        ]
      },
      {
        title: "One Person Company Incorporation Process",
        list: [
          {
            title: "Obtain a Digital Signature Certificate (DSC)",
            desc: "Digital certificate used for e-signing forms; can be obtained via Aadhar e-KYC or supporting documents from certifying agencies."
          },
          {
            title: "Apply for Name Approval using SPICe+ Part A",
            desc: "Provides for 'Name Reservation' with two proposed names and one re-submission option."
          },
          {
            title: "Apply for Company Registration using SPICe+ Part B",
            list: [
              "Once name is approved, submit the Part B form on MCA portal",
              "Include DSC, SPICe-MOA, SPICe-AOA, declarations, and requisite fee"
            ]
          },
          {
            title: "Open a Bank Account",
            desc: "Use AGILE-PRO-S (Form INC-35) to apply for GSTIN, EPFO, ESIC, Profession Tax, and bank account."
          },
          {
            title: "File for Commencement of Business Certificate",
            desc: "Submit Form INC-20A within 180 days from incorporation."
          }
        ]
      },
      {
        title: "Compliances for One Person Company",
        list: [
          {
            title: "For Directors/Shareholders",
            list: [
              "At least one Director (shareholder) is mandatory",
              "Nominee appointment is compulsory",
              "Maximum of 15 Directors (increase requires filing a resolution)"
            ]
          },
          {
            title: "For the One Person Company",
            list: [
              "Minimum of two board meetings each year, with 90-day gap between sessions",
              "File Annual Return through Form MGT-7 at the end of financial year",
              "File Financial Statements through Form AOC-4",
              "File Form ADT-1 within 15 days of auditor appointment",
              "Appoint first auditor within 30 days of incorporation",
              "File Form DIR-3 KYC for Director details before 30th September"
            ]
          },
          {
            title: "Minimum Capital Requirement",
            desc: "No minimum paid-up capital required, but minimum authorized capital is ₹1,00,000. Paid-up capital can be as low as ₹1."
          },
          {
            title: "Tax Rates",
            list: [
              "Applicable tax rate: 30% plus surcharge and cess",
              "Surcharge: 12% on income tax, if applicable",
              "Health and Education cess: 4% on tax plus surcharge"
            ]
          }
        ]
      },
      {
        title: "Advantages of One Person Company",
        list: [
          "Limited liability for the shareholder",
          "Fewer compliances compared to private/public companies",
          "Smooth management like a sole proprietorship",
          "Perpetual succession – nominee takes over if shareholder unavailable",
          "Eligibility to secure funds from banks or institutions"
        ]
      },
      {
        title: "Disadvantages of One Person Company",
        list: [
          "Limited growth potential as only one shareholder is allowed",
          "Cannot carry out NBFC investment activities",
          "Limited resource pool and management scalability"
        ]
      },
      {
        title: "One Person Company Registration Number",
        desc: "Known as Corporate Identification Number (CIN), a 21-character code issued by ROC. Example: U01403MH2015OPC264485."
      },
      {
        title: "How to Get a Registration Number",
        desc: "On SPICe+ Form approval, MCA issues Certificate of Incorporation containing Company Name, CIN, PAN, TAN, registered office address, and incorporation date."
      },
      {
        title: "One Person Company Registration Time",
        list: [
          "Average processing: 7–10 days, subject to MCA approval",
          "Delays may arise due to document errors, name approval issues, server glitches, response deadlines, or payment delays"
        ]
      },
      {
        title: "One Person Company Registration Fees",
        desc: "With Razorpay Rize: ₹1,499 + Govt. fee (includes DSC, DIN, COI, MOA, AOA, PAN, TAN)."
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
          "Comply with post-incorporation filings"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServicesSubService1 = _sfc_main$2;
      const _component_ServicesSubMarquee = __nuxt_component_1;
      const _component_ServicesImageCard = _sfc_main$1;
      const _component_Footer = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ServicesSubService1, null, null, _parent));
      _push(ssrRenderComponent(_component_ServicesSubMarquee, null, null, _parent));
      _push(`<section class="w-full lg:h-auto">`);
      _push(ssrRenderComponent(_component_ServicesImageCard, {
        title: companyTypes.title,
        long: companyTypes.long,
        small: companyTypes.small
      }, null, _parent));
      _push(`<div class="max-w-[1440px] h-full mx-auto flex flex-col"><div class="size-full flex flex-col md:flex-row items-start justify-start mt-8 scroll-smooth max-md:bg-primary max-md:px-4"><div class="h-screen w-auto md:px-6 pr-0 sticky top-4 max-md:hidden block"><ul class="size-full md:border-r md:border-slate-500"><!--[-->`);
      ssrRenderList(links, (i, k) => {
        _push(`<li class="${ssrRenderClass([unref(currentView) == i.key ? "service_li_active" : "", "w-full py-4 pr-6 service_li"])}">${ssrInterpolate(i.text)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="h-full w-full md:w-[60%] md:pl-8 md:pr-4 max-md:mt-6 sticky top-4"><ul class="overflow-y-scroll service_dec"><!--[-->`);
      ssrRenderList(registrationInfo, (i, k) => {
        _push(`<!--[--><h4 class="text-xl lg:text-2xl font-bold my-2 text-white md:text-primary"${ssrRenderAttr("id", i.key)}>${ssrInterpolate(i.title)}</h4>`);
        if (i.desc) {
          _push(`<p class="text-sm mb-2">${ssrInterpolate(i.desc)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (i.list) {
          _push(`<ul class="ml-6 my-2 space-y-1 pb-6"><!--[-->`);
          ssrRenderList(i.list, (v, s) => {
            _push(`<li class="list-decimal">`);
            if (typeof v === "string") {
              _push(`<span>${ssrInterpolate(v)}</span>`);
            } else {
              _push(`<div>`);
              if (v.title) {
                _push(`<p class="font-medium">${ssrInterpolate(v.title)}</p>`);
              } else {
                _push(`<!---->`);
              }
              if (v.desc) {
                _push(`<p class="text-sm">${ssrInterpolate(v.desc)}</p>`);
              } else {
                _push(`<!---->`);
              }
              if (v.list) {
                _push(`<ul class="ml-6 list-disc"><!--[-->`);
                ssrRenderList(v.list, (x, z) => {
                  _push(`<li>`);
                  if (typeof x === "string") {
                    _push(`<span>${ssrInterpolate(x)}</span>`);
                  } else {
                    _push(`<div>`);
                    if (x.title) {
                      _push(`<p class="font-medium">${ssrInterpolate(x.title)}</p>`);
                    } else {
                      _push(`<!---->`);
                    }
                    if (x.desc) {
                      _push(`<p class="text-sm">${ssrInterpolate(x.desc)}</p>`);
                    } else {
                      _push(`<!---->`);
                    }
                    if (x.list) {
                      _push(`<ul class="ml-6 list-disc"><!--[-->`);
                      ssrRenderList(x.list, (y, q) => {
                        _push(`<li>${ssrInterpolate(y)}</li>`);
                      });
                      _push(`<!--]--></ul>`);
                    } else {
                      _push(`<!---->`);
                    }
                    _push(`</div>`);
                  }
                  _push(`</li>`);
                });
                _push(`<!--]--></ul>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            }
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div></div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/opc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=opc-C0gvgXkk.mjs.map
