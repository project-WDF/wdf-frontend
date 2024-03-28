<template>
  <v-sheet class="d-flex align-center">
    <v-label v-if="label" class="mr-3">{{ label }}</v-label>
    <v-select
      :items="items"
      :list-props="{ density: 'compact', slim: true }"
      :model-value="select"
      :disabled="disabled"
      hide-details
      density="compact"
      variant="outlined"
      item-value="value"
      item-title="title"
      @update:model-value="emits('update:select', $event)"
    >
      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props">
          <template #title>
            <div style="font-size: 0.875rem">{{ item.title }}</div>
          </template>
        </v-list-item>
      </template>
    </v-select>
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
    required: false
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:select'])
</script>

<style lang="scss">
.v-field {
  font-size: 0.875rem;
}
</style>
