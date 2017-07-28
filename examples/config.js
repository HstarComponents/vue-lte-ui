window.AppConf = {
  menus: [
    { path: '/', icon: 'fa fa-dashboard text-maroon', text: 'Dashboard' },
    {
      path: '/ui', icon: 'fa fa-laptop', text: 'UI Elements', children: [
        { path: '/ui/general', icon: 'fa fa-circle-o text-red', text: 'General' },
        { path: '/ui/sliders', icon: 'fa fa-circle-o text-yellow', text: 'Sliders' },
      ]
    },
    {
      path: '/forms', icon: 'fa fa-edit', text: 'Forms', children: [
        { path: '/forms/general', icon: 'fa fa-circle-o text-red', text: 'General Elements' },
        { path: '/forms/advanced', icon: 'fa fa-circle-o text-yellow', text: 'Advanced Elements' }
      ]
    }
  ]
};
