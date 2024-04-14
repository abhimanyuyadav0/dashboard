import React, { useState, useRef, useEffect } from 'react';
import { Box, Grid, Card, ListItemButton, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Text from 'components/common/text/index';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';

const VideoRecorder = () => {
  const theme = useTheme();
  const [isRecording, setIsRecording] = useState(false);
  const [recordedTime, setRecordedTime] = useState(0);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm' });
        mediaRecorderRef.current.ondataavailable = handleDataAvailable;
        mediaRecorderRef.current.start();
        setIsRecording(true);
        startTimer();
      })
      .catch(error => console.error('Error accessing media devices.', error));
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => {
      track.stop();
    });
    chunksRef.current = []; // Clear chunks array
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  };

  const downloadVideo = () => {
    const blob = new Blob(chunksRef.current, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = 'recording.webm';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setRecordedTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setRecordedTime(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <Box>
      <Box sx={{ my: 3 }}>
        <Grid container spacing={3} sx={{ justifyContent: { xs: 'center', md: 'end' } }}>
          <Grid item xs={6} sm={6} md={3}>
            {chunksRef.current.length > 0 && !isRecording && (
              <Button sx={{ height: '40px', my: 1.5, bgcolor: 'primary.200' }} onClick={downloadVideo}>Download Video</Button>
            )}
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Card sx={{ boxShadow: theme.customShadows.z1, borderRadius: 3 }} shadow>
              <ListItemButton
                onClick={!isRecording ? startRecording : stopRecording}
                sx={{
                  gap: 1,
                  '&:hover': {
                    bgcolor: 'primary.lighter'
                  },
                }}>
                <Box sx={{
                  borderRadius: 3, p: 1, px: 2, pt: 1.3,
                  bgcolor: theme.palette.error.lighter,
                  color: theme.palette.error.main,
                }}>
                  <VideoCameraBackOutlinedIcon fontSize="small" />
                </Box>
                <Text variant="h6" size={13}>{!isRecording ? 'Start Recording' : 'Stop Recording'}</Text>
              </ListItemButton>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box className='d-center' >
        <Box sx={{ borderRadius: 5, width: 'fit-content' }} className='d-center' >
          <video ref={videoRef} className='mediaFileEditView' style={{ borderRadius: 15 }} autoPlay></video>
        </Box>
      </Box>
      {isRecording && (
        <Box sx={{ textAlign: 'center', my: 2 }}>
          <Text variant="body1" color="text.secondary">Recording Time: {formatTime(recordedTime)}</Text>
        </Box>
      )}
    </Box>
  );
};

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default VideoRecorder;
