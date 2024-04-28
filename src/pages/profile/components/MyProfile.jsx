import * as React from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  Divider,
  IconButton,
  FormLabel,
  FormControl,
  Input,
  Select,
  CardContent,
  FormHelperText,
  MenuItem,
} from "@mui/material";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DropZone from "./DropZone";
import CountrySelector from "./CountrySelector";
import EditorToolbar from "./EditorToolbar";

export default function MyProfile() {
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <CardContent>
            <Box sx={{ mb: 1 }}>
              <Typography level='title-md'>Personal info</Typography>
              <Typography level='body-sm'>
                Customize how your profile information will apper to the
                networks.
              </Typography>
            </Box>
            <Divider />
            <Stack
              direction='row'
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              <Stack direction='column' spacing={1}>
                <Box sx={{ position: "relative" }}>
                  <Box sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}>
                    <img
                      src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286'
                      srcSet='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x'
                      loading='lazy'
                      alt=''
                    />
                  </Box>
                  <IconButton
                    aria-label='upload new picture'
                    size='sm'
                    variant='outlined'
                    sx={{
                      bgcolor: "background.body",
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: 5,
                      top: 5,
                      boxShadow: "sm",
                    }}
                  >
                    <EditRoundedIcon />
                  </IconButton>
                </Box>
              </Stack>
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    sx={{
                      display: { sm: "flex-column", md: "flex-row" },
                      gap: 2,
                    }}
                  >
                    <Input size='sm' placeholder='First name' />
                    <Input
                      size='sm'
                      placeholder='Last name'
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction='row' spacing={2}>
                  <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Input size='sm' defaultValue='UI Developer' />
                  </FormControl>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      size='sm'
                      type='email'
                      startDecorator={<EmailRoundedIcon />}
                      placeholder='email'
                      defaultValue='siriwatk@test.com'
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <div>
                  <CountrySelector />
                </div>
                <div>
                  <FormControl sx={{ display: { sm: "contents" } }}>
                    <FormLabel>Timezone</FormLabel>
                    <Select
                      size='sm'
                      startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue='1'
                    >
                      <MenuItem value='1'>
                        Indochina Time (Bangkok){" "}
                        <Typography textColor='text.tertiary' ml={0.5}>
                          — GMT+07:00
                        </Typography>
                      </MenuItem>
                      <MenuItem value='2'>
                        Indochina Time (Ho Chi Minh City){" "}
                        <Typography textColor='text.tertiary' ml={0.5}>
                          — GMT+07:00
                        </Typography>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Stack>
            </Stack>
            <Stack
              direction='column'
              spacing={2}
              sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
            >
              <Stack direction='row' spacing={2}>
                <Stack direction='column' spacing={1}>
                  <Box
                    maxHeight={108}
                    sx={{ flex: 1, minWidth: 108, borderRadius: "100%" }}
                  >
                    <img
                      src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286'
                      srcSet='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x'
                      loading='lazy'
                      alt=''
                    />
                  </Box>
                  <IconButton
                    aria-label='upload new picture'
                    size='sm'
                    variant='outlined'
                    color='neutral'
                    sx={{
                      bgcolor: "background.body",
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      left: 85,
                      top: 180,
                      boxShadow: "sm",
                    }}
                  >
                    <EditRoundedIcon />
                  </IconButton>
                </Stack>
                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    sx={{
                      display: {
                        sm: "flex-column",
                        md: "flex-row",
                      },
                      gap: 2,
                    }}
                  >
                    <Input size='sm' placeholder='First name' />
                    <Input size='sm' placeholder='Last name' />
                  </FormControl>
                </Stack>
              </Stack>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input size='sm' defaultValue='UI Developer' />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  size='sm'
                  type='email'
                  startDecorator={<EmailRoundedIcon />}
                  placeholder='email'
                  defaultValue='siriwatk@test.com'
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <div>
                <CountrySelector />
              </div>
              <div>
                <FormControl sx={{ display: { sm: "contents" } }}>
                  <FormLabel>Timezone</FormLabel>
                  <Select
                    size='sm'
                    startDecorator={<AccessTimeFilledRoundedIcon />}
                    defaultValue='1'
                  >
                    <Option value='1'>
                      Indochina Time (Bangkok){" "}
                      <Typography textColor='text.tertiary' ml={0.5}>
                        — GMT+07:00
                      </Typography>
                    </Option>
                    <Option value='2'>
                      Indochina Time (Ho Chi Minh City){" "}
                      <Typography textColor='text.tertiary' ml={0.5}>
                        — GMT+07:00
                      </Typography>
                    </Option>
                  </Select>
                </FormControl>
              </div>
            </Stack>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Box sx={{ mb: 1 }}>
              <Typography level='title-md'>Bio</Typography>
              <Typography level='body-sm'>
                Write a short introduction to be displayed on your profile
              </Typography>
            </Box>
            <Divider />
            <Stack spacing={2} sx={{ my: 1 }}>
              <EditorToolbar />
              <Box
                size='sm'
                // minRows={4}
                sx={{ mt: 1.5 }}
                // defaultValue="I'm a software developer based in Bangkok, Thailand. My goal is to solve UI problems with neat CSS without using too much JavaScript."
              />
              <FormHelperText sx={{ mt: 0.75, fontSize: "xs" }}>
                275 characters left
              </FormHelperText>
            </Stack>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Box sx={{ mb: 1 }}>
              <Typography level='title-md'>Portfolio projects</Typography>
              <Typography level='body-sm'>
                Share a few snippets of your work.
              </Typography>
            </Box>
            <Divider />
            <Stack spacing={2} sx={{ my: 1 }}>
              <DropZone />
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
