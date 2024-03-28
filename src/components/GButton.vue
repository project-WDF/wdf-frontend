<template>
  <v-btn
    :density="density"
    :color="color"
    :text="text"
    :flat="flat"
    :variant="variant"
    :size="size"
  >
    {{ text }}
  </v-btn>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
    default: '버튼'
  },
  density: {
    type: String,
    default: 'default'
  },
  color: {
    type: String,
    default: 'primary'
  },
  variant: {
    type: String,
    default: 'outlined'
  },
  flat: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'small'
  }
})
</script>
