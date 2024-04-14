import { DashboardOutlined, UserOutlined, HomeOutlined, VideoCameraOutlined, FileImageOutlined, } from '@ant-design/icons';
const icons = {
  DashboardOutlined,
  UserOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  FileImageOutlined
};

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    },
    // {
    //   id: 'dashboard',
    //   title: 'Dashboard',
    //   type: 'item',
    //   url: '/dashboard',
    //   icon: icons.DashboardOutlined,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'profile',
    //   title: 'Profile',
    //   type: 'item',
    //   url: '/profile',
    //   icon: icons.UserOutlined,
    //   breadcrumbs: false
    // },
    {
      id: 'templates',
      title: 'Templates',
      type: 'item',
      url: '/templates',
      icon: icons.VideoCameraOutlined,
      breadcrumbs: false
    },
    {
      id: 'allvideos',
      title: 'All Videos',
      type: 'item',
      url: 'videos',
      icon: icons.VideoCameraOutlined,
      breadcrumbs: true
    },
    {
      id: 'podcastandshow',
      title: 'Podcasts & Shows',
      type: 'item',
      url: '/podcastandshow',
      icon: icons.VideoCameraOutlined,
      breadcrumbs: false
    },
    {
      id: 'allimages',
      title: 'All Images',
      type: 'item',
      url: 'images',
      icon: icons.FileImageOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
