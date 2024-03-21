const years = [
  { title: '2020', value: '2020' },
  { title: '2021', value: '2021' },
  { title: '2022', value: '2022' },
  { title: '2023', value: '2023' },
  { title: '2024', value: '2024' }
]

const table = {
  headers: [
    { title: '부여<br />일수', key: 'total', highlight: true },
    { title: '사용<br />일수', key: 'use', highlight: true },
    { title: '잔여<br />일수', key: 'remains', highlight: true },
    { title: '1월', key: '01' },
    { title: '2월', key: '02' },
    { title: '3월', key: '03' },
    { title: '4월', key: '04' },
    { title: '5월', key: '05' },
    { title: '6월', key: '06' },
    { title: '7월', key: '07' },
    { title: '8월', key: '08' },
    { title: '9월', key: '09' },
    { title: '10월', key: '10' },
    { title: '11월', key: '11' },
    { title: '12월', key: '12' }
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
}

export { years, table }
