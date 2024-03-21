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
        background-color: turquoise;
        border: 1px solid paleturquoise;
      }
    }
    tbody {
      tr td {
        border: 1px solid paleturquoise;
      }
    }
  }
}
</style>
