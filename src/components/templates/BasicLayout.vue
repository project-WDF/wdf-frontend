<template>
  <v-card flat>
    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      <slot name="subtitle"></slot>
    </v-card-subtitle>

    <v-card-text>
      <slot name="text"></slot>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
