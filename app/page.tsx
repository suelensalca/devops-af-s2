"use client"
import { Box, Button, Grid, Rating, TextField, Typography } from "@mui/material";
import { useState } from "react";
import calendar from '../public/assets/illustration-consistent-schedule.webp';
import audience from '../public/assets/illustration-audience-growth.webp';
import schedule from '../public/assets/illustration-schedule-posts.webp';
import followers from '../public/assets/illustration-grow-followers.webp';
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [currentPost, setCurrentPost] = useState(0);

  const posts = [
    {
      text: "Confiança gera venda. Construa relacionamentos!",
      emoji: "💡",
    },
    {
      text: "Ajude primeiro. Venda depois.",
      emoji: "🤝",
    },
    {
      text: "Você vende uma solução, não apenas um produto.",
      emoji: "💰",
    },
  ];

  const changePost = () => {
    setShowPost(true);
    setCurrentPost((prev) => (prev + 1) % posts.length);
  };


  return (
   <Grid container sx={{backgroundColor: '#F1F1FA', padding: '20px', minHeight: '100vh'}} spacing={2}>
    <Grid size={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
      <Box sx={{backgroundColor: 'seashell', borderRadius: '24px', padding: '32px', height: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography sx={{fontSize: '21px', fontWeight: '500', mb: '20px', textAlign: 'left'}}>
        Escreva seu conteúdo usando IA.
        </Typography>
        <Button data-testid="button-post" onClick={changePost} sx={{backgroundColor: '#f7b801', padding: '8px 20px', borderRadius: '40px', color: '#3D348B'}}>crie um Post</Button>
        {showPost && <Typography data-testid="post" sx={{color: '#3D348B', fontSize: '28px', fontWeight: '700', textTransform: 'uppercase', textAlign: 'center', mt: '20px' }}>{posts[currentPost].emoji}{posts[currentPost].text}</Typography>}
      </Box>
      <Box sx={{backgroundColor: '#f7b801', borderRadius: '24px', padding: '32px', height: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
          <Typography fontSize={24}>
          Crie e agende conteúdo de forma 
          <span style={{color: 'white'}}> rápida</span>.
          </Typography>
        <Image alt="agenda" src={schedule} width={200} height={160} />
      </Box>
    </Grid>
    <Grid size={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
      <Box sx={{backgroundColor: 'white', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
        <Typography sx={{fontSize: '21px', fontWeight: '500', mb: '20px', color: '#3d348d', textAlign: 'left'}}>
          Social Media 10x mais rápido com IA.
        </Typography>
        <Rating value={5} />
        <Image alt="audiencia" src={audience} width={200} height={76} />
      </Box>
      <Box sx={{backgroundColor: '#BDB9E5', borderRadius: '24px', padding: '32px', fontSize: '20px' }}>
        Gerencia diferentes contas e plataformas
      </Box>
      <Box sx={{backgroundColor: '#3D348B', borderRadius: '24px', padding: '32px', fontSize: '24px', height: '45%', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        Aumente seu crescimento
        <br />
        <Image alt="seguidores" src={followers} width={230} height={210} />
      </Box>
    </Grid>
    <Grid size={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
      <Box sx={{backgroundColor: '#f7b801', borderRadius: '24px', padding: '32px', height: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography sx={{fontSize: '21px', fontWeight: '500', mb: '32px'}}>
          Mantenha um calendário de postagens constante.
          </Typography>
          <Image alt="calendar" src={calendar} width={200} height={160} />
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'seashell', borderRadius: '24px', padding: '32px', fontSize: '24px', height: '60%' }}>
        Cresça seus seguidores com conteúdos ininterruptos. Cadastre seu email e saiba mais:
        <TextField placeholder="email" value={email} onChange={(e) => {
          setEmail(e.target.value);
          setShowButton(true);
          }} />
        <Button data-testid="cadastrar" sx={{visibility: showButton ? 'visible' : 'hidden', backgroundColor: '#f7b801', padding: '8px 20px', borderRadius: '40px', color: '#3D348B'}}>cadastrar</Button>
      </Box>
    </Grid>
   </Grid>
  );
}
