import { ref, watch, unref, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { g as useRoute } from './server.mjs';
import '../_/nitro.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue-router';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const loader = ref(true);
    ref(false);
    ref(0);
    const intervalId = ref(null);
    const route = useRoute();
    watch(
      () => route.fullPath,
      (newPath, oldPath) => {
        loader.value = true;
        intervalId.value = setInterval();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-screen h-dvh bg-white fixed left-0 top-0 z-50 flex items-center justify-center" style="${ssrRenderStyle(unref(loader) ? null : { display: "none" })}"><span class="icon-[svg-spinners--pulse-3] text-8xl text-primary"></span></div><div id="smooth-wrapper" class="w-screen h-dvh font-poppins overflow-hidden"><div id="smooth-content" class="flex flex-col">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-C79gBNDc.mjs.map
