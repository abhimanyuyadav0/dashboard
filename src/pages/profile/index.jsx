import * as React from "react";
import {
  Box,
  Link,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";

import MyProfile from "./components/MyProfile";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import PropTypes from "prop-types";
import Breadcrumbs from "components/@extended/Breadcrumbs";
import { CommingSoon } from "components/common/index";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function ProfilePage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ position:'relative',zIndex:0}}>
      <Box
        sx={{
          position: "sticky",
          top: { sm: -100, md: -110 },
          bgcolor: "background.body",
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Breadcrumbs
            size='sm'
            aria-label='breadcrumbs'
            separator={<ChevronRightRoundedIcon fontSize='sm' />}
            sx={{ pl: 0 }}
          >
            <Link
              underline='none'
              color='neutral'
              href='#some-link'
              aria-label='Home'
            >
              <HomeRoundedIcon />
            </Link>
            <Link
              underline='hover'
              color='neutral'
              href='#some-link'
              fontSize={12}
              fontWeight={500}
            >
              Users
            </Link>
            <Typography color='primary' fontWeight={500} fontSize={12}>
              My profile
            </Typography>
          </Breadcrumbs>
          <Typography level='h2' variant='h1' sx={{ mt: 1, mb: 2 }}>
            My profile
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='Settings' {...a11yProps(0)} />
              <Tab label='Team' {...a11yProps(1)} />
              <Tab label='Plan' {...a11yProps(2)} />
              <Tab label='Billing' {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <MyProfile />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Team
            <CommingSoon />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Plan
            <CommingSoon />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Billing
            <CommingSoon />
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
}
