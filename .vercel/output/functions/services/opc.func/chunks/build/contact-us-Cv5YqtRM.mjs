import { _ as __nuxt_component_3, a as _sfc_main$1$1 } from './footer-Cxu8MBjM.mjs';
import { _ as __nuxt_component_0 } from './NuxtImg-BEgnGHVj.mjs';
import { mergeProps, ref, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-ZKqNt5RG.mjs';
import './nuxt-link-iaoeg8sI.mjs';
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

const _sfc_main$4 = {
  __name: "ContactsForm",
  __ssrInlineRender: true,
  setup(__props) {
    const loader = ref(false);
    const success = ref(false);
    const form = ref({
      name: null,
      phone: null,
      email: "",
      location: null,
      message: null
    });
    const errorMessage = ref({
      name: null,
      phone: null,
      email: "",
      location: null,
      message: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full bg-white/20 backdrop-blur-2xl border border-primary/20 rounded-3xl py-8 px-4 md:p-8 flex flex-col items-center justify-center" }, _attrs))}><div class="w-full flex flex-col items-center py-10 gap-y-2" style="${ssrRenderStyle(!unref(success) ? null : { display: "none" })}"><h1 class="text-2xl font-bold text-primary">Get in Touch</h1><p class="">Have a project in mind?</p></div><div class="w-full h-[640px] flex flex-col items-center justify-center" style="${ssrRenderStyle(unref(success) ? null : { display: "none" })}"><span class="icon-[line-md--circle-twotone-to-confirm-circle-transition] text-8xl text-primary"></span><h4 class="text-xl md:px-8 text-center font-medium"> Request received! Our team will contact you soon. </h4></div><form class="w-full h-auto px-4 space-y-3" style="${ssrRenderStyle(!unref(success) ? null : { display: "none" })}"><fieldset class="fieldset w-full"><legend class="fieldset-legend text-primary hidden lg:block"> Name </legend><input${ssrRenderAttr("value", unref(form).name)} type="text" class="input input-primary !outline-none !shadow-none w-full" placeholder="Name">`);
      if (unref(errorMessage).name) {
        _push(`<p class="label text-error">${unref(errorMessage).name ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</fieldset><fieldset class="fieldset w-full"><legend class="fieldset-legend text-primary hidden lg:block"> Phone </legend><input${ssrRenderAttr("value", unref(form).phone)} type="text" class="input input-primary !outline-none !shadow-none w-full" placeholder="Phone">`);
      if (unref(errorMessage).phone) {
        _push(`<p class="label text-error">${unref(errorMessage).phone ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</fieldset><fieldset class="fieldset w-full"><legend class="fieldset-legend text-primary hidden lg:block"> Email </legend><input${ssrRenderAttr("value", unref(form).email)} type="email" class="input input-primary !outline-none !shadow-none w-full" placeholder="Name">`);
      if (unref(errorMessage).email) {
        _push(`<p class="label text-error">${unref(errorMessage).email ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</fieldset><fieldset class="fieldset w-full"><legend class="fieldset-legend text-primary hidden lg:block"> Location </legend><input${ssrRenderAttr("value", unref(form).location)} type="text" class="input input-primary !outline-none !shadow-none w-full" placeholder="Name">`);
      if (unref(errorMessage).location) {
        _push(`<p class="label text-error">${unref(errorMessage).location ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</fieldset><fieldset class="fieldset w-full"><legend class="fieldset-legend text-primary hidden lg:block"> Message </legend><textarea rows="3" placeholder="Primary" class="textarea textarea-primary w-full">${ssrInterpolate(unref(form).message)}</textarea>`);
      if (unref(errorMessage).message) {
        _push(`<p class="label text-error">${unref(errorMessage).message ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</fieldset><button type="submit" class="btn btn-primary w-full mt-4"><span class="loading loading-spinner" style="${ssrRenderStyle(unref(loader) ? null : { display: "none" })}"></span> Submit </button></form></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contacts/form.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ContactsBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Nav = _sfc_main$1$1;
      const _component_NuxtImg = __nuxt_component_0;
      const _component_ContactsForm = _sfc_main$4;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full lg:min-h-[840px] lg:h-auto relative py-4 px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Nav, null, null, _parent));
      _push(`<div class="top_gem"></div><div class="w-full h-auto sticky z-30 max-lg:block max-w-[1440px] mx-auto pt-10"><div class="w-full flex flex-col items-center justify-center py-4 space-y-4"><span class="hero-mini flex items-center justify-center gap-x-2"><span class="icon-[solar--add-circle-broken]"></span>Let&#39;s Talk</span><h1 class="text-6xl font-bold">Contact us</h1><p class="text-center">Questions, ideas, or just saying hi</p></div><div class="w-full min-h-[1180px] h-auto lg:min-h-[760px] lg:h-[760px] flex flex-col lg:flex-row items-center md:gap-x-4 md:mt-6"><div class="h-auto lg:h-full w-full lg:w-[30%] flex lg:flex-col gap-x-2 lg:gap-y-2"><div class="w-full h-[280px] lg:h-1/2 bg-white/20 backdrop-blur-3xl border border-primary/20 rounded-3xl p-10 space-y-2 flex flex-col items-start"><span class="hero-mini flex items-center justify-center gap-x-2"><span class="icon-[solar--magic-stick-broken]"></span>Hire Us</span><p class="text-lg font-medium pr-8 lg:pr-20"> Have something on your mind? We&#39;re all ears. </p><div class="h-[65%] flex flex-col justify-end items-start gap-y-2 lg:font-medium lg:text-lg"><span><a href="mailto:support@novadesk.in" target="_blank"> support@novadesk.in </a></span><span><a href="https://novadesk.in/" target="_blank"> novadesk.in </a></span></div></div><div class="max-md:hidden block w-full h-[280px] lg:h-1/2 bg-white/20 backdrop-blur-3xl border border-primary/20 rounded-3xl overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "image_assistant",
        src: "/img/contact/contact2.jpg",
        alt: "",
        srcset: ""
      }, null, _parent));
      _push(`</div></div><div class="h-auto w-full lg:w-[40%] flex items-center justify-center max-lg:my-4">`);
      _push(ssrRenderComponent(_component_ContactsForm, null, null, _parent));
      _push(`</div><div class="h-auto lg:h-full w-full lg:w-[30%] flex lg:flex-col gap-x-2 lg:gap-y-2"><div class="max-md:hidden block w-full h-[280px] lg:h-1/2 bg-white/20 backdrop-blur-3xl border border-primary/20 rounded-3xl overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "image_assistant",
        src: "/img/contact/contact1.jpg",
        alt: "",
        srcset: ""
      }, null, _parent));
      _push(`</div><div class="w-full h-[280px] lg:h-1/2 bg-white/20 backdrop-blur-3xl border border-primary/20 rounded-3xl p-10 space-y-2 flex flex-col items-start gap-y-2"><span class="hero-mini flex items-center justify-center gap-x-2"><span class="icon-[solar--diagram-up-outline]"></span>Growth</span><p class="text-lg font-medium pr-20"> Marketing that drives impact and success </p><div class="h-[65%] flex flex-col justify-end items-start gap-y-2 font-medium text-lg"><progress class="progress h-3 w-24" value="0" max="100"></progress><progress class="progress h-3 w-36" value="0" max="100"></progress><progress class="progress h-3 w-48" value="0" max="100"></progress><progress class="progress h-3 w-60 progress-primary" value="100" max="100"></progress></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contacts/banner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full h-[60vh] lg:min-h-[740px] lg:h-auto xl:h-[60vh] px-4 py-6 md:py-24" }, _attrs))}><div class="max-w-[1440px] h-full mx-auto"><iframe class="size-full rounded-2xl shadow-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13152780838!2d80.04352144413834!3d13.047473102027064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1757668143403!5m2!1sen!2sin" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contacts/map.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "ContactsMap" });
const _sfc_main$1 = {
  __name: "ContactsTestimonial",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(0);
    const testimonial = ref({
      1: {
        rating: "5.0",
        img: "/img/testimonial/testimonial1.webp",
        text: "From the first call to final delivery, the process was seamless. We now have a brand that truly reflects who we are",
        author: "Julian Meyer",
        designation: "Marketing at NovaTech"
      },
      2: {
        rating: "3.9",
        img: "/img/testimonial/testimonial2.webp",
        text: "They completely reshaped the way we present ourselves online. The clarity, execution were flawless",
        author: "Amanda More",
        designation: "Founder of Bloom Agency"
      },
      3: {
        rating: "4.7",
        img: "/img/testimonial/testimonial3.webp",
        text: "Professional, strategic, and highly creative. They felt more like a partner than a service provider, highly recommended",
        author: "Ava Rossi",
        designation: "Head at Horizon Ventures"
      },
      4: {
        rating: "4.2",
        img: "/img/testimonial/testimonial4.webp",
        text: "The team brought bold ideas and real results. Our site traffic has doubled, and the feedback has been incredible",
        author: "Leo Daniels",
        designation: "CEO of Frame & Co."
      },
      5: {
        rating: "5.0",
        img: "/img/testimonial/testimonial5.webp",
        text: "They understood our vision immediately and delivered beyond expectations. A real game changer for our brand",
        author: "Sophie Tran",
        designation: "Manager at Stellar Works"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full h-auto lg:min-h-[740px] lg:h-auto xl:h-[80vh] bg-primary px-4 py-6 md:py-12 lg:py-24" }, _attrs))}><div class="max-w-[1440px] h-auto mx-auto flex flex-col md:flex-row items-center md:items-start justify-evenly gap-x-4"><div class="w-full flex flex-col items-start justify-center gap-y-4"><span class="bg-white/10 p-3 border border-white/30 rounded-md text-white flex items-center justify-center gap-x-2"><span class="icon-[solar--add-circle-broken]"></span>Client Stories</span><h1 class="text-4xl font-semibold text-white">What they think</h1></div><div class="w-full"><p class="text-base md:text-xl text-white font-medium max-md:mt-4"> From startups to global brands, we’ve delivered impactful solutions. Explore some of our latest projects </p></div><div class="w-full hidden md:flex items-center justify-end gap-x-4 text-2xl text-white"><button class="bg-white/10 border border-white/30 rounded-md p-4 flex items-center justify-center cursor-pointer"><span class="icon-[solar--arrow-left-broken]"></span></button><button class="bg-white/10 border border-white/30 rounded-md p-4 flex items-center justify-center cursor-pointer"><span class="icon-[solar--arrow-right-broken]"></span></button></div></div><div style="${ssrRenderStyle("transform: translateX(" + unref(value) + "px)")}" class="max-w-[1440px] size-full mx-auto flex items-center justify-start gap-x-6 transition-all ease-in-out duration-500 testimonial max-md:mt-6"><!--[-->`);
      ssrRenderList(unref(testimonial), (value2, key) => {
        _push(`<div class="min-w-[380px] md:min-w-[420px] h-auto aspect-square rounded-md bg-white/10 border border-white/30 p-8"><div class="w-full flex items-start justify-between"><div class="w-full flex flex-col items-start justify-center gap-y-2"><span class="flex items-end justify-start gap-x-2 text-base"><h1 class="text-4xl font-medium">${value2.rating ?? ""}</h1> /5 </span><div class="rating rating-xs"><div class="mask mask-star" aria-label="1 star"></div><div class="mask mask-star" aria-label="2 star"></div><div class="mask mask-star" aria-label="3 star"></div><div class="mask mask-star" aria-label="4 star"></div><div class="mask mask-star" aria-label="5 star" aria-current="true"></div></div></div><img class="size-30 rounded-lg"${ssrRenderAttr("src", value2.img)} alt=""></div><div class="w-full py-8 md:py-12 lg:py-20"><h1 class="text-lg font-semibold">${value2.text ?? ""}</h1></div><span class="font-medium text-lg"><h5>${value2.author ?? ""}</h5><h5>${value2.designation ?? ""}</h5></span></div>`);
      });
      _push(`<!--]--></div><div class="w-full flex md:block items-center justify-between gap-x-4 text-2xl text-white max-md:mt-6"><button class="bg-white/10 border border-white/30 rounded-md p-4 flex items-center justify-center cursor-pointer"><span class="icon-[solar--arrow-left-broken]"></span></button><button class="bg-white/10 border border-white/30 rounded-md p-4 flex items-center justify-center cursor-pointer"><span class="icon-[solar--arrow-right-broken]"></span></button></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contacts/testimonial.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContactsBanner = _sfc_main$3;
  const _component_ContactsMap = __nuxt_component_1;
  const _component_ContactsTestimonial = _sfc_main$1;
  const _component_Footer = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_ContactsBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactsMap, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactsTestimonial, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contactUs as default };
//# sourceMappingURL=contact-us-Cv5YqtRM.mjs.map
