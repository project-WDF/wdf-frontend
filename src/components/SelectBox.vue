<template>
  <v-sheet class="d-flex align-center">
    <v-label class="mr-3">{{ label }}</v-label>
    <v-select
      :items="items"
      :list-props="{ density: 'compact' }"
      :model-value="select"
      hide-details
      density="compact"
      variant="outlined"
      item-value="value"
      item-title="title"
      @update:model-value="emits('update:select', $event)"
    ></v-select>
  </v-sheet>
</template>

<script setup>
defineProps({
  select: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true,
    default: '라벨'
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emits = defineEmits(['update:select'])
</script>
