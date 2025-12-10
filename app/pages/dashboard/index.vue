<template>
  <div class="w-full h-full p-4">
    <div class="overflow-x-auto rounded-box border border-base-content/5 bg-white">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="contactList">
            <template v-for="(i, k) in contactList" :key="k">
              <tr>
                <td>{{ i.id }}</td>
                <td>{{ i.name }}</td>
                <td>{{ i.email }}</td>
                <td>{{ i.phone }}</td>
                <td>{{ i.location }}</td>
                <td>{{ i.message }}</td>
                <td>
                  <button @click="deleteContact(i.id)" class="btn btn-square btn-soft btn-error">
                    <span class="icon-[solar--trash-bin-2-outline] text-lg"></span>
                  </button>
                </td>
              </tr>
            </template>
          </template>
        </tbody>
      </table>
    </div>

    <template v-if="total >= 10">
      <div class="w-full flex items-center justify-between mt-4">
        <div class="join">
          <template v-for="i in Math.round(total / limit)" :key="i">
            <button @click="((page = i), getContact())" class="join-item btn btn-md" v-html="i"></button>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const limit = ref(10);
const page = ref(1);
const total = ref(10);
const contactList = ref(null);
definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});

onMounted(async () => {
  getContact();

  setInterval(() => {
    getContact();
  }, 5000);
});

async function getContact() {
  await $fetch("/api/contact", {
    method: "POST",
    body: {
      limit: limit.value,
      page: page.value,
    },
  }).then(function (data) {
    contactList.value = data.contacts;
    total.value = data.total;
  });
}

async function deleteContact(id) {
  await $fetch("/api/contact/" + id, {
    method: "DELETE",
    body: {
      limit: limit.value,
      page: page.value,
    },
  }).then(function (data) {
    contactList.value = data.contacts;
    total.value = data.total;
  });
}

function paginate() {
  return (total.value / limit.value).toFixed(0);
}
</script> ------------- this is the index.vue file just fix and give the code without modification