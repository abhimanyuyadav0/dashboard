import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: '#',
      icon: icons.QuestionOutlined,
      external: true,
      target: false
    }
  ]
};

export default support;
