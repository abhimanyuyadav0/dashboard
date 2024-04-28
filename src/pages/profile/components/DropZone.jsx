import * as React from "react";
import { Typography, Box, Card, Link } from "@mui/material";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import UploadMediaModal from "pages/media/components/upload/index";
import { useDispatch } from "react-redux";
import { openUploadModal } from "store/reducers/mediaFiles";

export default function DropZone(props) {
  const { icon, sx, ...other } = props;
  const dispatch = useDispatch();
  return (
    <Box>
      <Card
        variant='soft'
        {...other}
        sx={[
          {
            borderRadius: "sm",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
            px: 3,
            flexGrow: 1,
            boxShadow: "none",
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <Box
          variant='solid'
          color='primary'
          sx={{
            minWidth: 32,
            borderRadius: "50%",
            "--Icon-fontSize": "16px",
          }}
        >
          <div>{icon ?? <FileUploadRoundedIcon />}</div>
        </Box>
        <Typography level='body-sm' textAlign='center'>
          <Link
            component='button'
            onClick={() => dispatch(openUploadModal())}
            overlay
          >
            Click to upload
          </Link>{" "}
          or drag and drop
          <br /> SVG, PNG, JPG or GIF (max. 800x400px)
        </Typography>
      </Card>
      <UploadMediaModal accept='image/*' />
    </Box>
  );
}
