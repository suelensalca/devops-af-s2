import { Box, Button, Grid, Rating, Typography } from "@mui/material";

export default function Home() {
  return (
   <Grid container sx={{backgroundColor: '#F1F1FA', height: '700px', padding: '40px'}} spacing={2}>
    <Grid size={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px', height: '100%' }}>
      <Box sx={{backgroundColor: 'seashell', borderRadius: '24px', padding: '32px', height: '70%'}}>
        <Typography sx={{fontSize: '21px', fontWeight: '500', mb: '32px'}}>
          Crie e agende conteúdo de forma <span style={{color: '#3D348B'}}>
          rápida</span>.
          </Typography>
        <Button sx={{backgroundColor: '#f7b801', padding: '8px 20px', borderRadius: '40px', color: '#3D348B'}}>crie um Post</Button>
      </Box>
      <Box sx={{backgroundColor: '#f7b801', borderRadius: '24px', padding: '32px', fontSize: '24px', height: '30%' }}>
        Escreva seu conteúdo usando IA.
      </Box>
    </Grid>
    <Grid size={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
      <Box sx={{backgroundColor: 'white', borderRadius: '24px', padding: '32px', height: '40%'}}>
        <Typography sx={{fontSize: '21px', fontWeight: '500', mb: '32px', color: '#3d348d'}}>
          Social Media 10x mais rápido com IA.
          </Typography>
        <Rating value={5} />
      </Box>
      <Box sx={{backgroundColor: '#BDB9E5', borderRadius: '24px', padding: '32px', fontSize: '24px', height: '30%' }}>
        Gerencia diferentes contas e plataformas
      </Box>
      <Box sx={{backgroundColor: '#3D348B', borderRadius: '24px', padding: '32px', fontSize: '24px', height: '30%', color: 'white' }}>
        aumente seu crescimento em 54%
      </Box>
    </Grid>
    <Grid size={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
      <Box sx={{backgroundColor: '#f7b801', borderRadius: '24px', padding: '32px', height: '40%'}}>
        <Typography sx={{fontSize: '21px', fontWeight: '500', mb: '32px'}}>
          Mantenha um calendário de postagens constante.
          </Typography>
      </Box>
      <Box sx={{backgroundColor: 'seashell', borderRadius: '24px', padding: '32px', fontSize: '24px', height: '60%' }}>
        Cresça seus seguidores com conteúdos ininterruptos.
      </Box>
    </Grid>
   </Grid>
  );
}
