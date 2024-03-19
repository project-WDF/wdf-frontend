export default [
  {
    id: 'annual_report',
    path: '/annual-report',
    title: '연차 신청'
  },
  {
    id: 'annual_approval',
    path: '/annual-approval',
    title: '연차 승인 현황'
  },
  {
    id: 'depart_annual_report',
    path: '/depart-annual-report',
    title: '부서 연차 신청 현황'
  },
  {
    id: 'depart_annual_approval',
    path: '/depart-annual-approval',
    title: '부서 연차 승인 현황'
  },
  {
    id: 'diary',
    path: '/diary',
    title: '다이어리 작성'
  },
  {
    id: 'management',
    path: '/user-management',
    title: '사용자 관리',
    children: [
      {
        id: 'personnel_management',
        path: '/hr',
        name: 'PersonnelManagement',
        title: '인사 관리'
      },
      {
        id: 'employee_registration',
        path: '/register',
        name: 'EmployeeRegistration',
        title: '직원 등록'
      }
    ]
  }
]
