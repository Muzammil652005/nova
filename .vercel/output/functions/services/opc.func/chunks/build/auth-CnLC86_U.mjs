import { e as defineNuxtRouteMiddleware, a as useUserSession, n as navigateTo } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue-router';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn } = useUserSession();
  if (!loggedIn.value) {
    return navigateTo("/");
  }
  return;
});

export { auth as default };
//# sourceMappingURL=auth-CnLC86_U.mjs.map
