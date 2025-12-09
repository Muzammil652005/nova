<template>
  <section class="w-full h-dvh relative">
    <div class="top_gem"></div>

    <div
      class="size-full absolute top-0 left-0 z-20 flex items-center justify-center"
    >
      <div
        class="lg:w-[450px] h-auto bg-white/10 border border-primary/20 backdrop-blur-md rounded-xl py-8 px-6 flex flex-col items-center justify-center"
      >
        <span
          class="p-3 flex items-center justify-center bg-white border border-primary/30 rounded-md"
        >
          <span class="icon-[solar--lock-keyhole-linear] text-2xl"></span>
        </span>
        <h5 class="md:text-xl md:font-medium md:mt-2">Welcome Back</h5>

        <fieldset class="fieldset w-full mt-12">
          <label for="email" class="text-secondary">Email</label>
          <input
            v-model="email"
            type="email"
            class="input w-full no-out"
            placeholder="example@mail.com"
          />
          <p
            v-if="errorMessage"
            class="label text-error"
            v-html="errorMessage"
          ></p>
        </fieldset>

        <fieldset class="fieldset w-full mt-4">
          <label for="email" class="text-secondary">Password</label>

          <div class="join w-full">
            <input
              v-model="password"
              :type="showPass ? 'text' : 'password'"
              class="input w-full no-out rounded-l-sm"
              placeholder="password"
            />
            <button
              @click="showPass = !showPass"
              class="btn btn-primary btn-square join-item"
            >
              <span
                :class="
                  showPass
                    ? 'icon-[solar--eye-outline]'
                    : 'icon-[solar--eye-closed-outline]'
                "
              ></span>
            </button>
          </div>
        </fieldset>

        <button @click="submitLogin" class="btn btn-primary w-full mt-10">
          Login
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const showPass = ref(false);
const email = ref(null);
const password = ref(null);
const errorMessage = ref(null);

definePageMeta({
  middleware: ["guest"],
});

async function submitLogin() {
  await $fetch("/api/auth/login", {
    method: "POST",
    body: {
      email: email.value,
      password: password.value,
    },
  })
    .then(function (data) {
      setTimeout(() => {
        return navigateTo("/dashboard");
      }, 400);
    })
    .catch(function (data) {
      errorMessage.value = data.statusMessage;
    });
}
</script>
