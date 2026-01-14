import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//google font import
import { Pacifico } from 'next/font/google';
//MUI import for card components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Header from '../components/header';


export default function Page() {
  return (

    <Box sx={{ minHeight: '100vh', backgroundImage: 'url(/images/dashboardBG.png)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Container maxWidth="sm" sx={{ backgroundColor: 'white', padding: 2, borderRadius: 2 }}>
          <Typography component="h1" variant="h3" sx={{ color: '#21B6A8', textAlign: 'center', fontFamily: 'Pacifico, cursive' }}>Quote of the Day</Typography>

      <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/images/diaryIcon.jpeg"
          alt="diary icon"
        />
      <CardContent sx={{ color: '#21B6A8'} }>
      <Typography gutterBottom variant="h5" component="div">Diary</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Describe your feelings and thoughts about your day.</Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/diary" passHref>
        <Button size="small" color="primary">
          Visit
        </Button>
        </Link>
        </CardActions>
      </Card>


      <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/images/chatbotIcon.jpeg"
          alt="chatbot icon"
        />
      <CardContent sx={{ color: '#21B6A8'}}>
      <Typography gutterBottom variant="h5" component="div">Chatbot</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Talk to our supportive chatbot and get feedback to improve your experience.</Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/chatbot" passHref>
        <Button size="small" color="primary">
          Visit
        </Button>
        </Link>
        </CardActions>
      </Card>

<Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/images/goalsIcon.jpeg"
          alt="goals icon"
        />
      <CardContent sx={{ color: '#21B6A8'}}>
      <Typography gutterBottom variant="h5" component="div">Analytics</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>View a graph of your feelings overtime to see how you are progressing.</Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/diary" passHref>
        <Button size="small" color="primary">
          Visit
        </Button>
        </Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="/images/moodTrackerIcn.jpeg"
          alt="mood tracker icon"
        />
      <CardContent sx={{ color: '#21B6A8'}}>
      <Typography gutterBottom variant="h5" component="div">Mood Tracker</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Document your mood on a scale of 1 - 5 and choose your mood to best represent how you felt today. </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/moodTracker" passHref>
        <Button size="small" color="primary">
          Visit
        </Button>
        </Link>
        </CardActions>
      </Card>
      
      </Container>
      </Box>

  )
}

