const Entertainment = [
  {
    title: 'ตรวจสอบคำร้อง',
    subTitle: `${process.env.APP_SYSTEM} - ตรวจสอบคำร้อง`,
    icon: 'mdi-magnify',
    link: '/Service/Entertainment/checkRequest',
  },
  {
    title: 'จัดทำคำขอ',
    subTitle: `${process.env.APP_SYSTEM} - จัดทำใบคำขอ`,
    icon: 'mdi-certificate',
    link: '/Service/Entertainment/request',
  },
  {
    title: 'TestRoute',
    subTitle: `${process.env.APP_SYSTEM} - ทดสอบ Route`,
    icon: 'mdi-certificate',
    link: '/Service/Entertainment/testRoute',
  },
  
  // {
  //   title: 'แก้ไขคำขอ',
  //   subTitle: `${process.env.APP_SYSTEM} - แก้ไขใบคำขอ`,
  //   icon: 'mdi-script-text',
  //   link: '/personal/edit',
  // },
  // {
  //   title: 'พิมพ์ซ่อมคำขอ',
  //   subTitle: `${process.env.APP_SYSTEM} - พิมพ์ซ่อมคำขอ`,
  //   icon: 'mdi-script-text',
  //   link: '/personal/edit',
  // },
  // {
  //   title: 'บันทึกผลการพิจารณา',
  //   subTitle: `${process.env.APP_SYSTEM} - บันทึกผลการพิจารณา`,
  //   icon: 'mdi-script-text',
  //   link: '/personal/edit',
  // },
  // {
  //   title: 'จำหน่ายคำขอ',
  //   subTitle: `${process.env.APP_SYSTEM} - จำหน่ายคำขอ`,
  //   icon: 'mdi-script-text',
  //   link: '/personal/edit',
  // },
]

const shop = [
  // add gun shop menu list for sidebar
]

const menu = {
  Entertainment,
  // personal,
  shop,
}

export default menu
