<template>
  <template v-if="typeof optionDetail == 'boolean'">
    <input
      type="checkbox"
      checked="checked"
      @click.prevent
      :indeterminate="!optionDetail"
      :class="optionDetail ? 'checkbox-success' : 'checkbox-error'"
      class="checkbox"
    />
  </template>
  <template v-else>
    <h6 class="text-lg lg:font-semibold whitespace-nowrap">
      {{ optionDetail }}
    </h6>
  </template>
</template>

<script setup>
const props = defineProps({
  optionDetail: Boolean | String,
  size: null,
});

console.log(props.size);
</script>
