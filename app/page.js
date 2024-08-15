'use client';
import { Backdrop, Box, Button, Stack, Typography, Paper } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import GoogleIcon from '@mui/icons-material/Google';

export default function Home() {
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user) {
      setUsername(session.user.name);
      setImage(session.user.image);
    }
  }, [session]);

  return (
    <Box >
      <video src="/waitlistBg.mp4" autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover',zIndex: -1,}}/>
      <Box width="100vw"height="100vh"display="flex"justifyContent="center"alignItems="center"bgcolor=""position="relative">
        {!session ? (
          <Paper square={false} sx={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 4, borderRadius: '16px',  }}> 
          <Stack direction={'column'} alignContent={'center'} alignItems={'center'}>
          <Typography variant='h4' color={'white'}>Welcome to the Flip Efficiency waitlisting page!</Typography>
          <br/>
          <Typography variant='h6' color={'white'}>Please press the button below to sign up.</Typography>
          <br/><br/><br/>
          <Button
            onClick={() => signIn('google')}
            startIcon={<GoogleIcon />}
            variant="contained"
            sx={{ color: '#0B0C10', backgroundColor: 'white', '&:hover': { backgroundColor: '#f5e2cf' } }}
          >
            Sign In With Google
          </Button>
          </Stack>
          </Paper>
        ) : (
          <Paper square={false} sx={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 4, borderRadius: '16px',  }}> 
          <Stack direction={'column'} alignContent={'center'} alignItems={'center'}>
            <Typography variant='h4' color={'black'}>Thanks for signing up!</Typography>
            <Typography variant='h6' color={'black'}>You may now leave this page.</Typography>
          </Stack>
          </Paper>
        )}
      </Box>
    </Box>
          
  );
}