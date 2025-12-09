<template>
  <div
    class="w-full h-full bg-white/20 backdrop-blur-2xl border border-primary/20 rounded-3xl py-8 px-4 md:p-8 flex flex-col items-center justify-center"
  >
    <div
      v-show="!success"
      class="w-full flex flex-col items-center py-10 gap-y-2"
    >
      <h1 class="text-2xl font-bold text-primary">Get in Touch</h1>
      <p class="">Have a project in mind?</p>
    </div>

    <div
      v-show="success"
      class="w-full h-[640px] flex flex-col items-center justify-center"
    >
      <span
        class="icon-[line-md--circle-twotone-to-confirm-circle-transition] text-8xl text-primary"
      ></span>

      <h4 class="text-xl md:px-8 text-center font-medium">
        Request received! Our team will contact you soon.
      </h4>
    </div>

    <form
      v-show="!success"
      @submit.prevent="submitContact"
      class="w-full h-auto px-4 space-y-3"
    >
      <fieldset class="fieldset w-full">
        <legend class="fieldset-legend text-primary hidden lg:block">
          Name
        </legend>
        <input
          v-model="form.name"
          type="text"
          class="input input-primary !outline-none !shadow-none w-full"
          placeholder="Name"
        />
        <p
          v-if="errorMessage.name"
          v-html="errorMessage.name"
          class="label text-error"
        ></p>
      </fieldset>

      <fieldset class="fieldset w-full">
        <legend class="fieldset-legend text-primary hidden lg:block">
          Phone
        </legend>
        <input
          v-model="form.phone"
          type="text"
          class="input input-primary !outline-none !shadow-none w-full"
          placeholder="Phone"
        />
        <p
          v-if="errorMessage.phone"
          v-html="errorMessage.phone"
          class="label text-error"
        ></p>
      </fieldset>

      <fieldset class="fieldset w-full">
        <legend class="fieldset-legend text-primary hidden lg:block">
          Email
        </legend>
        <input
          v-model="form.email"
          type="email"
          class="input input-primary !outline-none !shadow-none w-full"
          placeholder="Name"
        />
        <p
          v-if="errorMessage.email"
          v-html="errorMessage.email"
          class="label text-error"
        ></p>
      </fieldset>
      <fieldset class="fieldset w-full">
        <legend class="fieldset-legend text-primary hidden lg:block">
          Location
        </legend>
        <input
          v-model="form.location"
          type="text"
          class="input input-primary !outline-none !shadow-none w-full"
          placeholder="Name"
        />
        <p
          v-if="errorMessage.location"
          v-html="errorMessage.location"
          class="label text-error"
        ></p>
      </fieldset>

      <fieldset class="fieldset w-full">
        <legend class="fieldset-legend text-primary hidden lg:block">
          Message
        </legend>
        <textarea
          v-model="form.message"
          rows="3"
          placeholder="Primary"
          class="textarea textarea-primary w-full"
        ></textarea>
        <p
          v-if="errorMessage.message"
          v-html="errorMessage.message"
          class="label text-error"
        ></p>
      </fieldset>

      <button type="submit" class="btn btn-primary w-full mt-4">
        <span v-show="loader" class="loading loading-spinner"></span>
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
const loader = ref(false);
const success = ref(false);
const form = ref({
  name: null,
  phone: null,
  email: "",
  location: null,
  message: null,
});

const errorMessage = ref({
  name: null,
  phone: null,
  email: "",
  location: null,
  message: null,
});

async function submitContact() {
  if (loader.value) return;

  loader.value = true;

  await $fetch("/api/form/contact", {
    method: "POST",
    body: form.value,
  })
    .then(function (data) {
      success.value = true;

      setTimeout(() => {
        success.value = false;

        form.value.email = null;
        form.value.phone = null;
        form.value.name = null;
        form.value.location = null;
        form.value.message = null;
      }, 2400);
    })
    .catch(function (data) {
      errorMessage.value = data.data.data;
    });

  loader.value = false;
}
</script>
