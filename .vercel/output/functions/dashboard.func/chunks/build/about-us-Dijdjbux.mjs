import { _ as __nuxt_component_3$1, a as _sfc_main$1$1 } from './footer-Cxu8MBjM.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-ZKqNt5RG.mjs';
import { _ as __nuxt_component_0$1 } from './NuxtImg-BEgnGHVj.mjs';
import { u as useNuxtApp } from './server.mjs';
import './nuxt-link-iaoeg8sI.mjs';
import '../_/nitro.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Nav = _sfc_main$1$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full lg:min-h-[760px] lg:h-auto relative py-4 px-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<div class="top_gem"></div><div class="w-full h-[calc(100%-80px)] sticky z-30 max-lg:block"><div class="max-w-[1440px] max-md:min-h-[480px] h-full bg-white/20 border border-primary/20 rounded-2xl backdrop-blur-xl mx-auto flex items-start justify-start max-md:pb-4 md:px-4 xl:px-0 mt-4"><div class="w-full p-6 md:p-12 lg:p-28 space-y-6 flex flex-col items-start"><span class="hero-mini max-md:w-[40%] max-md:mx-auto flex items-center justify-center gap-x-2"><span class="icon-[solar--add-circle-broken]"></span>Our story</span><h1 class="text-4xl font-bold text-primary max-md:text-center max-md:w-full"> Who we are! </h1><p class="md:text-lg md:pr-40"> Welcome to Novadesk Realtech, your premier virtual office services provider in India. At Novadesk, we are dedicated to revolutionizing the way businesses operate by offering a comprehensive suite of virtual office solutions tailored to meet the dynamic needs of modern enterprises. </p><p class="md:text-lg md:pr-40"> At Novadesk, we understand the evolving business landscape and strive to provide personalized, scalable solutions that drive success and foster growth for our clients. By tailoring our services to meet the unique needs of each business, we help our clients stay agile, reduce costs, and focus on their core activities while we manage their virtual office needs efficiently. </p><div class="w-full flex items-start justify-evenly gap-x-6 pt-6"><div class="w-1/2 text-xl font-medium flex flex-col items-start justify-center gap-y-2"><span class="flex items-center justify-center gap-x-2 font-semibold text-primary"><span class="icon-[solar--lightbulb-bolt-broken]"></span>VISION</span><p class="max-md:text-lg"> To become a leading force in digital innovation, inspiring brands worldwide to embrace transformative strategies for enduring success and influence. </p></div><div class="w-1/2 text-xl font-medium flex flex-col items-start justify-center gap-y-2"><span class="flex items-center justify-center gap-x-2 font-semibold text-primary"><span class="icon-[solar--rocket-broken]"></span>MISSION</span><p class="max-md:text-lg"> To empower brands by delivering bold digital strategies that drive meaningful growth, create lasting impact, and achieve sustained success. </p></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/banner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]), { __name: "AboutsBanner" });
const _sfc_main$3 = {
  __name: "AboutsSection1",
  __ssrInlineRender: true,
  setup(__props) {
    const contentArray = [
      {
        title: "Virtual Office Address",
        description: "Establish a prestigious business address in prime Indian locations to elevate your brand image. This address can be used for official correspondence, marketing materials, and registering your business."
      },
      {
        title: "Mail Handling",
        description: "Get peace of mind with secure mail forwarding and handling services. We'll receive your business mail at our virtual office address and promptly forward it to your designated location."
      },
      {
        title: "Meeting Room Access",
        description: "Conduct professional meetings and client interactions in our fully equipped meeting rooms available across various locations in India. Enjoy the convenience of booking meeting spaces online for seamless scheduling."
      },
      {
        title: "Business Support Services",
        description: "Enhance your virtual office experience with additional services like call answering, receptionist services, and administrative support (mention these services are optional if they are not included in all plans)."
      }
    ];
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full max-h-[1240px] md:max-h-[680px] md:h-[640px] bg-primary py-14" }, _attrs))}><div class="max-w-[1440px] h-full mx-auto flex max-md:flex-col flex-row items-center justify-center gap-y-6 md:gap-x-6 max-md:px-4"><div class="w-full md:w-1/2 h-[350px] md:h-full relative flex items-center justify-center"><div class="size-full relative rounded-xl overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "rounded-xl image_assistant",
        src: "/img/assistant_1.webp"
      }, null, _parent));
      _push(`<span class="size-24 md:size-32 lg:size-44 pt-5 pl-5 bg-primary absolute bottom-0 right-0 rounded-tl-xl flex"><span class="size-full bg-white rounded-xl flex items-center justify-center"><span class="icon-[solar--arrow-right-up-linear] text-3xl md:text-5xl lg:text-8xl text-primary"></span></span></span></div></div><div class="w-full md:w-1/2 h-full max-md:min-h-[600px] max-h-[760px] rounded-2xl bg-[#ff8a80] p-8 overflow-hidden relative"><div class="h-full flex flex-col items-center justify-evenly gap-y-4 animate-marquee-vertical"><!--[-->`);
      ssrRenderList(contentArray, (i, k) => {
        _push(`<div class="w-full h-auto bg-white rounded-lg p-4 space-y-4"><h1 class="text-lg font-semibold">${i.title ?? ""}</h1><p>${i.description ?? ""}</p></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(contentArray, (i, k) => {
        _push(`<div class="w-full h-auto bg-white rounded-lg p-4 space-y-4"><h1 class="text-lg font-semibold">${i.title ?? ""}</h1><p>${i.description ?? ""}</p></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(contentArray, (i, k) => {
        _push(`<div class="w-full h-auto bg-white rounded-lg p-4 space-y-4"><h1 class="text-lg font-semibold">${i.title ?? ""}</h1><p>${i.description ?? ""}</p></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(contentArray, (i, k) => {
        _push(`<div class="w-full h-auto bg-white rounded-lg p-4 space-y-4"><h1 class="text-lg font-semibold">${i.title ?? ""}</h1><p>${i.description ?? ""}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/section1.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AboutsSection2",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        title: "Cost-Effectiveness",
        description: "Eliminate overhead with budget-friendly virtual office plans.",
        logo: "icon-[solar--sale-square-bold]"
      },
      {
        title: "Scalability",
        description: "Easily adapt your virtual office plan as your business expands.",
        logo: "icon-[solar--graph-new-up-bold]"
      },
      {
        title: "Flexibility",
        description: "Work from anywhere with a professional address.",
        logo: "icon-[solar--compass-bold]"
      },
      {
        title: "Enhanced Credibility",
        description: "Project a polished, professional image.",
        longDescription: "Project a polished and trustworthy image to clients and partners with a prestigious business address in prime Indian locations. Establish your reputation with credibility from day one.",
        logo: "icon-[solar--shield-star-bold]"
      },
      {
        title: "Seamless Support",
        description: "Reliable support to keep you focused.",
        longDescription: "Benefit from reliable administrative and customer support that ensures smooth business operations. From handling mail and calls to managing inquiries, our dedicated team lets you focus on growth.",
        logo: "icon-[solar--headphones-square-bold]"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full max-h-[1150px] h-auto bg-white max-lg:px-4 py-8 lg:py-16" }, _attrs))}><div class="max-w-[1440px] h-full mx-auto flex flex-col"><span class="w-full flex items-center justify-between"><h4 class="text-2xl md:text-4xl lg:font-semibold lg:leading-12 text-primary"> Power Your With <br> Business Novadesk </h4><button class="btn btn-sm md:btn-lg bg-white shadow-none"> Lets Talk <span class="icon-[solar--arrow-right-up-linear] text-xl"></span></button></span><div class="w-full md:h-1/2 grid md:grid-cols-3 grid-flow-row gap-3 mt-8"><!--[-->`);
      ssrRenderList(features.slice(0, 3), (i, k) => {
        _push(`<div class="${ssrRenderClass([i > 4 ? "col-span-2" : "", "size-full bg-primary rounded-xl px-4 py-6 lg:px-8 lg:py-6 flex flex-col justify-between max-md:gap-y-4"])}"><span class="${ssrRenderClass([i.logo, "text-white text-5xl lg:text-6xl"])}"></span><span class="w-full h-auto"><h4 class="font-semibold lg:text-xl lg:font-bold text-white lg:mt-8">${ssrInterpolate(i.title)}</h4><p class="lg:text-lg lg:text-white/60 lg:mt-3">${ssrInterpolate(i.description)}</p></span></div>`);
      });
      _push(`<!--]--></div><div class="w-full md:h-1/2 grid md:grid-cols-2 grid-flow-row gap-3 mt-3"><!--[-->`);
      ssrRenderList(features.slice(3, 5), (i) => {
        _push(`<div class="size-full bg-primary rounded-xl px-6 py-4 lg:px-8 lg:py-6 flex flex-col justify-between max-md:gap-y-4"><span class="${ssrRenderClass([i.logo, "text-white text-5xl lg:text-6xl"])}"></span><span class="w-full h-auto"><h4 class="font-semibold lg:text-xl lg:font-bold text-white lg:mt-8">${ssrInterpolate(i.title)}</h4><p class="lg:text-lg lg:text-white/60 lg:mt-3 hidden lg:block">${ssrInterpolate(i.longDescription)}</p><p class="lg:text-lg lg:text-white/60 lg:mt-3 block lg:hidden">${ssrInterpolate(i.description)}</p></span></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/section2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full lg:min-h-[640px] lg:h-auto xl:h-[60vh] bg-primary py-12 lg:py-24" }, _attrs))}><div class="max-w-[1440px] h-full mx-auto flex flex-col items-start justify-center gap-x-6 gap-y-10"><div class="w-full flex max-md:flex-col flex-row items-end justify-between"><h1 class="w-full max-md:text-center md:w-1/2 text-4xl font-bold text-white"> Why Partner with Us? </h1><p class="w-full max-md:text-center max-md:mt-4 md:w-1/2 text-lg font-medium px-10"> At Novadesk RealTech, we go beyond providing virtual office space. We are dedicated to your success. Our team of experts is available to assist you with any queries and ensure a smooth experience. We offer! </p></div><div class="w-full flex max-md:flex-col flex-row items-start justify-center gap-x-4 md:pt-8 max-md:px-4 max-md:gap-y-4"><div class="w-full md:w-1/2 h-auto flex flex-col items-center justify-center gap-y-4 bg-[#ff8a80] rounded-2xl p-12"><span class="icon-[solar--shield-network-broken] text-6xl text-white"></span><h1 class="text-2xl font-bold">A Wide Network of Locations</h1><p class="text-center"> Choose from a variety of virtual office addresses in prominent business districts across India. </p></div><div class="w-full md:w-1/2 h-auto flex flex-col items-center justify-center gap-y-4 bg-[#ff8a80] rounded-2xl p-12"><span class="icon-[solar--lightbulb-bolt-broken] text-6xl text-white"></span><h1 class="text-2xl font-bold">Seamless Management</h1><p class="text-center"> Enjoy a user-friendly online portal to manage your virtual office services and meeting room bookings. </p></div><div class="w-full md:w-1/2 h-auto flex flex-col items-center justify-center gap-y-4 bg-[#ff8a80] rounded-2xl p-12"><span class="icon-[solar--hand-stars-broken] text-6xl text-white"></span><h1 class="text-2xl font-bold">Unwavering Support</h1><p class="text-center"> Our dedicated team is always happy to answer your questions and provide the support you need to thrive. </p></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/patner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "AboutsPatner" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AboutsBanner = __nuxt_component_0;
  const _component_AboutsSection1 = _sfc_main$3;
  const _component_AboutsSection2 = _sfc_main$2;
  const _component_AboutsPatner = __nuxt_component_3;
  const _component_Footer = __nuxt_component_3$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_AboutsBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutsSection1, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutsSection2, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutsPatner, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aboutUs as default };
//# sourceMappingURL=about-us-Dijdjbux.mjs.map
