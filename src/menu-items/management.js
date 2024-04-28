import { DashboardOutlined, CodeSandboxOutlined, WifiOutlined, UserOutlined, HomeOutlined, VideoCameraOutlined, FileImageOutlined, } from '@ant-design/icons';
import PeopleIcon from '@mui/icons-material/People';
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
      icon: PeopleIcon,
      breadcrumbs: true
    },
  ]
};

export default management;
