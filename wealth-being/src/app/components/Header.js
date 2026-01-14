'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Pacifico } from 'next/font/google';

// google font for WealthBeing text
const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'] 
});

export default function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 1 }}>
      <Toolbar>
        <Typography variant="h5" className={pacifico.className} sx={{ flexGrow: 1, color: 'black' }}>
          WealthBeing
        </Typography>
        <Box>
          <IconButton href="/">
            <Image src="/images/icons/homeIcon.png" alt="Home" width={32} height={32} />
          </IconButton>
          <IconButton href="/stats">
            <Image src="/images/icons/analyticsIcon.png" alt="Stats" width={32} height={32} />
          </IconButton>
          <IconButton href="/mood">
            <Image src="/images/icons/moodIcon.png" alt="Mood" width={32} height={32} />
          </IconButton>
          <IconButton href="/diary">
            <Image src="/images/icons/diaryIcon.png" alt="Diary" width={32} height={32} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}