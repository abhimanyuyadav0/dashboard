import { DashboardOutlined,UserOutlined } from '@ant-design/icons';
const icons = {
  DashboardOutlined,
  UserOutlined
};

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'profile',
      title: 'Profile',
      type: 'item',
      url: '/profile',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'media',
      title: 'Media',
      type: 'item',
      url: '/media',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'allvideos',
      title: 'All Videos',
      type: 'item',
      url: 'media/videos',
      icon: icons.UserOutlined,
      breadcrumbs: true
    },
    {
      id: 'allimages',
      title: 'All Images',
      type: 'item',
      url: 'media/images',
      icon: icons.UserOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
