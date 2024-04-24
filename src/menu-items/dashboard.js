import { DashboardOutlined, CodeSandboxOutlined, WifiOutlined, UserOutlined, HomeOutlined, VideoCameraOutlined, FileImageOutlined, } from '@ant-design/icons';
const icons = {
  DashboardOutlined,
  UserOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  FileImageOutlined,
  CodeSandboxOutlined,
  WifiOutlined
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
      id: 'templates',
      title: 'Templates',
      type: 'item',
      url: '/templates',
      icon: icons.CodeSandboxOutlined,
      breadcrumbs: false
    },
    {
      id: 'media',
      title: 'Media',
      type: 'item',
      url: '/media',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    },
    {
      id: 'allvideos',
      title: 'All Videos',
      type: 'item',
      url: 'media/videos',
      icon: icons.VideoCameraOutlined,
      breadcrumbs: true
    },
    {
      id: 'allimages',
      title: 'All Images',
      type: 'item',
      url: 'media/images',
      icon: icons.FileImageOutlined,
      breadcrumbs: false
    },
    {
      id: 'podcastandshow',
      title: 'Podcasts & Shows',
      type: 'item',
      url: '/podcastandshow',
      icon: icons.WifiOutlined,
      breadcrumbs: false
    },
  ]
};

export default dashboard;
