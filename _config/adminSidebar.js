import pages from 'src/setup/pages'; // Get Pages from config

//Blog
export default [
  {
    title: 'ishoe.cms.sidebar.adminGroup',
    icon: 'fa-light fa-boot',
    children: [
      pages.qshoe.shoes,
      pages.qshoe.options
    ]
  }
];
