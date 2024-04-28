import { DashboardOutlined, CodeSandboxOutlined, WifiOutlined, UserOutlined, HomeOutlined, VideoCameraOutlined, FileImageOutlined, } from '@ant-design/icons';

const management = {
  id: 'group-management',
  title: 'Management',
  type: 'group',
  children: [
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: DashboardOutlined,
      breadcrumbs: false
    },
  ]
};

export default management;
