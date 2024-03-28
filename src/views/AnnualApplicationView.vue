<template>
  <v-container fluid>
    <template v-for="layout in layouts" :key="layout.key">
      <!-- 연차 신청 현황 -->
      <basic-layout v-if="layout.key === 'usage'" :title="layout.title">
        <template #text>
          <g-select-box v-model:select="year" label="연도" :items="years" />
          <g-data-table
            v-if="width > 600"
            hide-footer
            class="my-2"
            :headers="table[layout.key].headers"
            :items="table[layout.key].items"
            :sortable="false"
          >
            <template v-slot:headers="{ columns }">
              <tr>
                <td v-for="column in columns" :key="column.key" :class="[column.tdClass]">
                  <span v-html="column.title"></span>
                </td>
              </tr>
            </template>

            <template v-slot:body="{ items, columns }">
              <tr v-for="(item, iKey) in items" :key="iKey">
                <template v-for="column in columns" :key="`${iKey}_${column.key}`">
                  <td :class="column.tdClass ? 'bg-primary-lighten-4' : ''">
                    <strong>{{ item[column.key] }}</strong> 일
                  </td>
                </template>
              </tr>
            </template>

            <template v-slot:bottom></template>
          </g-data-table>

          <g-vertical-table
            v-else
            :headers="table[layout.key].headers"
            :items="table[layout.key].items"
            class="annual-vertical-table my-2"
          >
            <template #headerTd="{ header }">
              <td class="headerTd" :class="header.tdClass" width="35%">{{ header.title }}</td>
            </template>

            <template #bodyTd="{ header, body }">
              <td class="bodyTd" :class="header.tdClass ? 'bg-primary-lighten-4' : ''">
                <strong>{{ body[header.key] }}</strong> 일
              </td>
            </template>
          </g-vertical-table>

          <p>휴가 소멸 예정 : {{ new Date().toLocaleDateString() }}</p>
        </template>
      </basic-layout>
      <!-- //연차 신청 현황 -->

      <!-- 연차 신청 -->
      <basic-layout v-else :title="layout.title" :actions-props="{ class: 'justify-end' }">
        <template #text>
          <g-vertical-table
            density="default"
            :headers="table[layout.key].headers"
            :items="table[layout.key].items"
          >
            <template #headerTd="{ header }">
              <template v-if="header.key === 'title'">
                <td class="headerTd bg-primary-darken-2" colspan="2">
                  ( {{ year }} ) 년도 연차 신청
                </td>
              </template>
              <template v-else>
                <td class="headerTd" width="20%">{{ header.title }}</td>
              </template>
            </template>

            <template #bodyTd="{ header }">
              <template v-if="header.key === 'title'"> </template>
              <template v-else>
                <td class="bodyTd">
                  <v-row>
                    <!-- 휴가 유형 -->
                    <template v-if="header.key === 'type'">
                      <v-col cols="12" sm="5">
                        <g-select-box v-model:select="vacationType" :items="vacationTypes" />
                      </v-col>
                    </template>
                    <!-- //휴가 유형 -->

                    <!-- 휴가 날짜 -->
                    <template v-else-if="header.key === 'date'">
                      <template v-for="date in dates" :key="date.key">
                        <v-col cols="12" sm="5" :class="date.class">
                          <g-date-picker
                            v-model:value="date.dateValue"
                            :start-time="date.startTime"
                            :min-date="date.minDate"
                            :max-time="date.maxTime"
                            :min-time="date.minTime"
                            enable-time-picker
                            time-picker-inline
                          />
                        </v-col>
                        <v-col
                          v-if="date.key === 'startDate'"
                          cols="12"
                          sm="1"
                          align-self="center"
                          class="py-0"
                          >~</v-col
                        >
                      </template>
                    </template>
                    <!-- //휴가 날짜 -->

                    <!-- 휴가 목적 -->
                    <template v-else-if="header.key === 'purpose'">
                      <v-col cols="12" sm="5">
                        <g-select-box v-model:select="vacationPurpose" :items="vacationPurposes" />
                      </v-col>
                    </template>
                    <!-- //휴가 목적 -->

                    <!-- 최종 휴가 일 -->
                    <template v-else-if="header.key === 'vacation'">
                      <v-col cols="12" class="text-left text-break">
                        <template v-for="(day, dIndex) in getTotalVacationDays" :key="dIndex">
                          <strong class="text-no-wrap">{{ day }}</strong>
                          <span v-if="dIndex === 0" class="px-2">~</span>
                        </template>
                      </v-col>
                    </template>
                    <!-- //최종 휴가 일 -->
                  </v-row>
                </td>
              </template>
            </template>
          </g-vertical-table>
        </template>

        <template #actions>
          <g-button text="신청하기" variant="tonal" class="font-weight-bold"></g-button>
        </template>
      </basic-layout>
      <!-- //연차 신청 현황 -->
    </template>
  </v-container>
</template>

<script setup>
import { layouts, years, table, vacationTypes, vacationPurposes } from '@/utils/annualReport.js'
import { useDisplay } from 'vuetify'
import { computed, reactive, ref } from 'vue'
import BasicLayout from '@/components/templates/BasicLayout.vue'
import GDataTable from '@/components/GDataTable.vue'
import GDatePicker from '@/components/GDatePicker.vue'
import GSelectBox from '@/components/GSelectBox.vue'
import GVerticalTable from '@/components/GVerticalTable.vue'
import GButton from '@/components/GButton.vue'

// DATA

const year = ref(JSON.stringify(new Date().getFullYear()))
const vacationType = ref('vacation')
const vacationPurpose = ref('01')
const dates = reactive([
  {
    key: 'startDate',
    dateValue: new Date().setHours(9, 0, 0),
    startTime: { hours: 9, minutes: 0 },
    minDate: new Date(),
    maxTime: { hours: 18, minutes: 0 },
    minTime: { hours: 9, minutes: 0 },
    class: 'pb-0 pb-sm-3'
  },
  {
    key: 'endData',
    dateValue: new Date().setHours(18, 0, 0),
    startTime: { hours: 18, minutes: 0 },
    minDate: new Date(),
    maxTime: { hours: 18, minutes: 0 },
    minTime: { hours: 9, minutes: 0 },
    class: 'pt-0 pt-sm-3'
  }
])
const { width } = useDisplay()

// COMPUTED
const getTotalVacationDays = computed(() => {
  return dates.map(date => new Date(date.dateValue).toLocaleString('hc'))
})

// METHODS
</script>

<style lang="scss">
.annual-application-datepicker {
}

.periodIcon {
  position: relative;

  &::before {
    content: '~';
    position: absolute;
    left: calc(100% - 5px);
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
