<template>
  <v-data-table density="compact" class="global-data-table" :headers="headers" :items="items">
    <template v-for="(_, slot) in $slots" v-slot:[slot]="item">
      <slot :name="slot" v-bind="item" />
    </template>
  </v-data-table>
</template>

<script setup>
defineProps({
  headers: {
    type: Array,
    required: true,
    default: () => []
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  sortable: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<style lang="scss">
.global-data-table {
  table {
    text-align: center;

    thead {
      tr td {
        color: #ffffff;
        padding: 4px 0 !important;
        background-color: rgb(var(--v-theme-primary));
        border: 1px solid rgb(var(--v-theme-primary-lighten-4));
      }
    }
    tbody {
      tr td {
        padding: 0 !important;
        border: 1px solid rgb(var(--v-theme-primary-lighten-4));
      }
    }
  }
}
</style>
