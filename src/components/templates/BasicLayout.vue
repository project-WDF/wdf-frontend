<template>
  <v-card flat class="global-card">
    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      <slot name="subtitle"></slot>
    </v-card-subtitle>

    <v-card-text>
      <slot name="text"></slot>
    </v-card-text>

    <v-card-actions v-bind="actionsProps">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  actionsProps: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss">
.global-card {
  overflow: inherit;

  .v-card-actions {
    padding: 0.5rem 1rem;
  }
}
</style>
