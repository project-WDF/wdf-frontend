<template>
  <v-table class="global-vertical-table" :density="density">
    <tbody>
      <tr v-for="header in headers" :key="header.key">
        <template v-if="slots.headerTd">
          <slot name="headerTd" v-bind:header="header"></slot>
        </template>
        <template v-else>
          <td class="headerTd" v-bind="headerProps">
            {{ header.title }}
          </td>
        </template>

        <template v-for="(item, iKey) in items" :key="`${header.key}_${iKey}}`">
          <template v-if="slots.bodyTd">
            <slot name="bodyTd" v-bind:body="item" v-bind:header="header"></slot>
          </template>
          <template v-else>
            <td class="bodyTd" v-bind="bodyProps">{{ item[header.key] }}</td>
          </template>
        </template>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { useSlots } from 'vue'

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
  headerProps: {
    type: Object,
    require: false
  },
  bodyProps: {
    type: Object,
    require: false
  },
  density: {
    type: String,
    default: 'compact'
  }
})

// DATA
const slots = useSlots()
</script>

<style lang="scss">
.global-vertical-table {
  .v-table__wrapper {
    overflow: inherit;

    table {
      text-align: center;

      .headerTd {
        color: #ffffff;
        background-color: rgb(var(--v-theme-primary));
        border: 1px solid rgb(var(--v-theme-primary-lighten-4));
      }

      .bodyTd {
        border: 1px solid rgb(var(--v-theme-primary-lighten-4));
      }
    }
  }
}
</style>
