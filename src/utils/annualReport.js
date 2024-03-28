const USAGE = 'usage'
const APPLICATION = 'application'
const layouts = [
  { key: USAGE, title: '연차 사용 현황' },
  { key: APPLICATION, title: '연차 신청' }
]

const years = [
  { title: '2020', value: '2020' },
  { title: '2021', value: '2021' },
  { title: '2022', value: '2022' },
  { title: '2023', value: '2023' },
  { title: '2024', value: '2024' }
]

const vacationTypes = [
  { title: '연차 휴가', value: 'vacation' },
  { title: '패밀리 데이', value: 'family' },
  { title: '기타', value: 'thing' }
]

const vacationTimes = [
  { title: '선택', value: null },
  { title: '오전', value: 'morning' },
  { title: '오후', value: 'afternoon' }
]

const vacationHalfTimes = [
  { title: '반차', value: '01' },
  { title: '반반차', value: '02' }
]

const vacationPurposes = [
  { title: '개인 휴가', value: '01' },
  { title: '경조사', value: '02' },
  { title: '포상 휴가', value: '03' }
]

const table = {
  [USAGE]: {
    headers: [
      { title: '부여일수', key: 'total', width: '10%', tdClass: 'bg-primary-darken-2' },
      { title: '사용일수', key: 'use', width: '10%', tdClass: 'bg-primary-darken-2' },
      { title: '잔여일수', key: 'remains', width: '10%', tdClass: 'bg-primary-darken-2' },
      { title: '1월', key: '01', width: '5.5%' },
      { title: '2월', key: '02', width: '5.5%' },
      { title: '3월', key: '03', width: '5.5%' },
      { title: '4월', key: '04', width: '5.5%' },
      { title: '5월', key: '05', width: '5.5%' },
      { title: '6월', key: '06', width: '5.5%' },
      { title: '7월', key: '07', width: '5.5%' },
      { title: '8월', key: '08', width: '5.5%' },
      { title: '9월', key: '09', width: '5.5%' },
      { title: '10월', key: '10', width: '5.5%' },
      { title: '11월', key: '11', width: '5.5%' },
      { title: '12월', key: '12', width: '5.5%' }
      // { title: 'Jan.', key: 'january' },
      // { title: 'Feb.', key: 'february' },
      // { title: 'Mar.', key: 'march' },
      // { title: 'Apr.', key: 'april' },
      // { title: 'May', key: 'may' },
      // { title: 'Jun.', key: 'june' },
      // { title: 'Jul.', key: 'july' },
      // { title: 'Aug.', key: 'august' },
      // { title: 'Sep.', key: 'september' },
      // { title: 'Oct.', key: 'october' },
      // { title: 'Nov.', key: 'november' },
      // { title: 'Dec.', key: 'december' }
    ],
    items: [
      {
        total: 15,
        use: 4,
        remains: 11,
        '01': 1,
        '02': 0,
        '03': 1,
        '04': 1,
        '05': 0,
        '06': 0,
        '07': 0,
        '08': 1,
        '09': 0,
        10: 0,
        11: 0,
        12: 0
      }
    ]
  },
  [APPLICATION]: {
    headers: [
      { title: '', key: 'title' },
      { title: '휴가 유형', key: 'type' },
      { title: '휴가 날짜', key: 'date' },
      // { title: '사용 일수', key: 'useDay' },
      // { title: '사용 시간', key: 'useTime' },
      { title: '휴가 내용', key: 'purpose' },
      { title: '최종 휴가 일자', key: 'vacation' }
    ],
    items: [
      {
        type: 'vacation',
        date: '2024-03-26',
        useDay: '1.25',
        purpose: 'privacy',
        vacation: ''
      }
    ]
  }
}

export { layouts, years, vacationTypes, vacationTimes, vacationHalfTimes, vacationPurposes, table }
