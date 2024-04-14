import { SettingOutlined, PlusCircleOutlined, CopyOutlined } from '@ant-design/icons';
import UploadCard from './components/upload/uploadcard';

const iconData = [
  {
    id: 'setting',
    title: 'setting',
    icon: <SettingOutlined />,
  },
  {
    id: 'media',
    title: 'Media',
    icon: <PlusCircleOutlined />
  },
  {
    id: 'audio',
    title: 'Audio',
    icon: <CopyOutlined />
  },
];

const settingOption = [
  {
    group: "Project Setting",
    id: "setting",
    component: '', // Add your component here if needed
    data: [
      {
        title: 'size'
      },
      {
        title: 'background'
      },
      {
        title: 'color'
      },
      {
        title: 'crop'
      },
      {
        title: 'audio'
      },
      {
        title: 'duration'
      },
    ]
  },
  {
    group: "Media Setting",
    id: "media",
    component: <UploadCard />, 
    data: [
      {
        title: 'add media',
      },
    ]
  },
];

export { iconData, settingOption };
// import React, { useState } from 'react';
// import { Box, TextField, Button } from '@mui/material';
// const CroppedImage = ({ image, setCroppedImage }) => {
//   const [form, setForm] = useState({})

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm({ ...form, [name]: value })
//   }
//   const handleSave = () => {
//     console.log(dataList); // For debugging, you can remove this later
//   };
//   return (
//     <>
//       <Box>
//         <TextField id="fullName" onChange={handleChange} label="Full Name" name="fullName" variant="outlined" />
//         <TextField id="mobile" onChange={handleChange} label="Mobile" name="mobile" variant="outlined" />
//         <TextField id="email" onChange={handleChange} label="Email" name="email" variant="outlined" />
//         <TextField id="password" onChange={handleChange} label="Password" name="password" variant="outlined" />
//       </Box>
//       <Button onClick={() => handleSave()}>Save</Button>
//     </>
//   )
// }
// export default CroppedImage