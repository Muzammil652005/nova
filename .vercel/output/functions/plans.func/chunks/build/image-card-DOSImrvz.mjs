import { a as _sfc_main$1$1 } from './footer-Cxu8MBjM.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-ZKqNt5RG.mjs';
import { _ as __nuxt_component_0 } from './NuxtImg-BEgnGHVj.mjs';
import { u as useNuxtApp } from './server.mjs';

const _sfc_main$2 = {
  __name: "ServicesSubService1",
  __ssrInlineRender: true,
  setup(__props) {
    const list = ref({
      1: {
        list1: "Registration in 7-10 Business Days",
        list2: "Company PAN and TAN"
      },
      2: {
        list1: "Company Name Approval",
        list2: "MOA & AOA",
        list3: "Incorporation Certificate"
      },
      3: {
        list1: "DSC Tokens",
        list2: "DSC Support & Shipping",
        list3: "Digital Signature Certificate"
      },
      4: {
        list1: "Director’s Identification Number (DIN)"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Nav = _sfc_main$1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full lg:min-h-[760px] lg:h-auto xl:h-[70vh] relative pt-4 px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Nav, null, null, _parent));
      _push(`<div class="top_gem"></div><div class="w-full h-[calc(100%-80px)] sticky z-30 max-lg:block max-md:py-12"><div class="max-w-[1440px] max-md:min-h-[680px] h-auto lg:h-[420px] mx-auto flex flex-col lg:flex-row items-center justify-center max-md:pb-4 md:px-4 xl:px-0"><div class="md:w-1/2 h-full flex flex-col justify-center text-center md:items-start gap-y-4"><h1 class="text-4xl font-semibold"> Register a Private <br> Limited Company </h1><button class="btn btn-primary">Register your business</button></div><div class="lg:w-1/2 w-auto h-full flex flex-col justify-center items-start gap-y-4 max-md:mt-6"><h6 class="text-primary font-medium text-lg">What’s Included?</h6><!--[-->`);
      ssrRenderList(unref(list), (value, key) => {
        _push(`<ul class="max-xl:text-sm max-xl:whitespace-nowrap max-md:pr-0 max-xl:pr-20 flex max-lg:flex-col max-lg:items-start max-lg:gap-y-4 gap-x-4 sub_list"><li><span class="icon-[charm--tick]"></span><p>${value.list1 ?? ""}</p></li>`);
        if (value.list2) {
          _push(`<li><span class="icon-[charm--tick]"></span><p>${value.list2 ?? ""}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        if (value.list3) {
          _push(`<li><span class="icon-[charm--tick]"></span><p>${value.list3 ?? ""}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(_ctx.para, (value, key) => {
        _push(`<span class="flex items-center justify-center gap-x-2 max-md:text-sm"><span class="icon-[material-symbols--star-rounded] text-primary"></span><p class="font-medium">${value ?? ""}</p></span>`);
      });
      _push(`<!--]--></div></div><div class="max-w-[1440px] h-auto mx-auto flex max-md:flex-col md:flex-row items-start justify-center gap-x-2"><div class="size-full space-y-6"><h1 class="text-4xl font-semibold">Made with ❤️ for founders</h1><p class="pr-26 font-medium max-md:hidden"> Nova Desk is an exclusive early-stage startup program that empowers founders by fostering vibrant communities, providing seamless company incorporation services &amp; offering dedicated startup building programs &amp; resources. </p></div><div class="size-full max-md:grid max-md:grid-cols-2 md:flex gap-4 max-md:mt-6"><div class="space-y-2"><h1 class="font-semibold text-2xl md:text-4xl">5000+</h1><p class="max-md:text-xs block font-medium">Companies Registered</p></div><div class="space-y-2"><h1 class="font-semibold text-2xl md:text-4xl">₹1+ Cr</h1><p class="max-md:text-xs block font-medium"> Money saved for Founders </p></div><div class="space-y-2"><h1 class="font-semibold text-2xl md:text-4xl"> 4.8 <span class="icon-[material-symbols--star-rounded] text-primary text-lg"></span>/5 </h1><p class="max-md:text-sm block font-medium"> Customer Satisfaction </p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/sub/sub-service1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ServicesSubMarquee",
  __ssrInlineRender: true,
  setup(__props) {
    const review = ref({
      1: {
        content: "Amazing experience - especially Sneha Savalgi who helped us out with everything. Very proactive communication and patience on their end even after unresponsiveness on our side ",
        author: "Vetriventhan K",
        para: "Bicameral Mind Technologies"
      },
      2: {
        content: "Everything was so so soo smooth and quick. the team you partnered with was very helpful and it was something we did not expect at such low cost. I have referred razorpay to one of my friend and he will also be signing up soon. thanks to the whole team",
        author: "Archit Vats",
        para: "Muzzari Global"
      },
      3: {
        content: "Process was really fast and effortless, really happy with the whole team and will also go ahead with the same vendor post compliances",
        author: "Mayank Sharma",
        para: "Rapparel Solutions"
      },
      4: {
        content: "Seamless experience. Quick response from Poorva who was handling our case",
        author: "Neeraj Sonaniya",
        para: "Kalpify Fashion"
      },
      5: {
        content: "Had a really smooth experience with all the partners, I would like to specially appreciate Ananya for his consistent support.As a first time entrepreneur, I had low awareness on the legalities of starting up, but I was well supported throughout",
        author: "Pulak Rijhwani",
        para: "Opsight AI"
      },
      6: {
        content: "Process was very good, the team was active right from the start and helped us with all doubts",
        author: "Vetriventhan K",
        para: "Bicameral Mind Technologies"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full min-h-[420px] h-auto bg-primary flex flex-col items-start justify-center relative overflow-hidden" }, _attrs))} data-v-33372536><div class="marquee-container" data-v-33372536><div class="marquee-track items-start justify-center" data-v-33372536><!--[-->`);
      ssrRenderList(unref(review), (value, key) => {
        _push(`<div class="marquee-card w-96 min-w-96 min-h-80 h-auto rounded-2xl border border-white/30 bg-white/20 p-8 text-white" data-v-33372536><h6 class="text-base font-medium" data-v-33372536><span class="icon-[ri--double-quotes-l] text-2xl" data-v-33372536></span><p data-v-33372536>${value.content ?? ""}</p><span class="icon-[ri--double-quotes-r] text-2xl" data-v-33372536></span></h6><hr class="pb-4 mt-4 text-white/20" data-v-33372536><span class="font-semibold" data-v-33372536>${value.author ?? ""}</span><p data-v-33372536>${value.para ?? ""}</p></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(review), (value, key) => {
        _push(`<div class="marquee-card w-96 min-w-96 min-h-80 h-auto rounded-2xl border border-white/30 bg-white/20 p-8 text-white" data-v-33372536><h6 class="text-base font-medium" data-v-33372536><span class="icon-[ri--double-quotes-l] text-2xl" data-v-33372536></span><p data-v-33372536>${value.content ?? ""}</p><span class="icon-[ri--double-quotes-r] text-2xl" data-v-33372536></span></h6><hr class="py-4 mt-4 text-white/20" data-v-33372536><span class="font-semibold" data-v-33372536>${value.author ?? ""}</span><p data-v-33372536>${value.para ?? ""}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/sub/sub-marquee.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-33372536"]]);
const _sfc_main = {
  __name: "ServicesImageCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    small: String,
    long: String
  },
  setup(__props) {
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full relative" }, _attrs))}><div class="h-full top-fade-grid"></div><div class="w-full max-h-[680px] h-[540px] max-w-[1440px] mx-auto flex gap-x-4 sticky z-50 md:py-12"><div class="w-full md:w-1/2 h-[450px] md:h-full relative flex items-center justify-center"><div class="size-full relative rounded-xl overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "rounded-xl image_assistant",
        src: "/img/assistant_2.jpg"
      }, null, _parent));
      _push(`<span class="size-24 md:size-32 lg:size-44 pt-5 pl-5 bg-white absolute bottom-0 right-0 rounded-tl-xl flex"><span class="size-full bg-primary rounded-xl flex items-center justify-center"><span class="icon-[solar--arrow-right-up-linear] text-3xl md:text-5xl lg:text-8xl text-white"></span></span></span></div></div><span class="w-1/2 flex flex-col items-start justify-start gap-y-4 max-md:px-4"><h3 class="text-2xl md:text-3xl lg:text-4xl max-w-[750px] font-semibold">${ssrInterpolate(__props.title)}</h3><p class="max-md:text-xs md:text-lg lg:max-w-[750px] leading-7">${ssrInterpolate(__props.long)} <br class="mb-4"> ${ssrInterpolate(__props.small)}</p></span></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/image-card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, __nuxt_component_1 as a, _sfc_main as b };
//# sourceMappingURL=image-card-DOSImrvz.mjs.map
