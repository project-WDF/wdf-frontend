<template>
  <VueDatePicker
    teleport
    locale="ko"
    cancel-text="닫기"
    select-text="저장"
    class="global-datepicker"
    :time-picker="timePicker"
    :time-picker-inline="timePickerInline"
    :min-date="minDate"
    :max-date="maxDate"
    :min-time="minTime"
    :max-time="maxTime"
    :start-time="startTime"
    :input-class-name="inputClassName"
    :enable-time-picker="enableTimePicker"
    :model-value="value"
    @update:model-value="$emit('update:value', $event)"
  ></VueDatePicker>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  value: {
    type: [Date, String]
  },
  enableTimePicker: {
    type: Boolean,
    default: false
  },
  inputClassName: {
    type: String,
    default: ''
  },
  timePicker: {
    type: Boolean,
    default: false
  },
  timePickerInline: {
    type: Boolean,
    default: false
  },
  minDate: {
    type: [Date, String],
    default: ''
  },
  maxDate: {
    type: [Date, String],
    default: ''
  },
  minTime: {
    type: [Object],
    default: () => {
      return { hours: 0, minutes: 0 }
    }
  },
  maxTime: {
    type: [Object],
    default: () => {
      return { hours: 0, minutes: 0 }
    }
  }
  // startTime: {
  //   type: [Object],
  //   default: () => {
  //     return { hours: 0, minutes: 0 }
  //   }
  // }
})

const startTime = ref({ hours: 0, minutes: 0 })
</script>

<style lang="scss">
.global-datepicker {
  .dp__input,
  .dp__menu {
    font-size: inherit;
    font-family: 'Hahmlet', serif;
  }
}
</style>
