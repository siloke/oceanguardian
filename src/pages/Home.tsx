import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/joy";
import background from '../assets/tartaruga.jpg'
import Menu from "../components/Menu";
import theme from "../theme";

const Home = () => {
    return (
        <>
            <Menu />
                <Box width="100%" height="92vh" alignContent="center" position="relative" >
                    <img
                    src={background}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{position: 'absolute', top: '0px', opacity:"0.9", filter: "brightness(24%)"}}
                    />
                    <Typography padding={theme.vars.fontSize.xl3} textAlign="center" level="h1" 
                    style={{position: 'absolute', right: "30%", left: "30%", top: '15%', color: "white"}}
                    >
                        Ocean Guardian
                    </Typography>

                    <Typography padding={theme.vars.fontSize.xl3} textAlign="center" level="h3" 
                    style={{position: 'absolute', right: "30%", left: "30%", top: '33%', color: "white"}}
                    >
                        Você pode fazer a diferença!
                    </Typography>

                    <Button variant="solid"  style={{position: 'absolute', left: "40%", right: "40%", top: '65%'}}>Saiba mais</Button>
                </Box>
                <Grid container spacing={4} maxWidth="1440px" margin="0 auto" padding="50px" justifyContent="center">
                <Grid xs={12} textAlign="center"  marginBottom="100px">
                        <Stack display="flex" direction="row" gap={3}>
                            <Box sx={{display: "flex", flexDirection: "column", width: "60%", gap: 6}}>
                                <Typography level="h2">Blog</Typography>
                                <Typography level="body-md" sx={{wordWrap: "break-word"}}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, consequuntur? Temporibus soluta quae laboriosam illo? Aliquid eaque rerum unde excepturi tempora, quaerat, cumque laudantium totam sapiente ipsa neque, minus debitis.
                                </Typography>
                            </Box>
                            <Box sx={{
                                width: "40%", 
                                height: "auto", 
                                borderRadius: theme.vars.radius.sm,
                                backgroundImage: `url(${background})`,
                                backgroundPosition: "center"
                            }}>
                            </Box>
                        </Stack>
                        <Button sx={{
                                width: "50%",
                                height: "30px",
                                marginTop: "5%"
                            }} 
                        variant="solid">Leia mais</Button>

                            <Divider sx={{
                                marginTop: "10%"
                            }} >Ocean Guardian</Divider>
                    </Grid>

                    <Grid xs={12} textAlign="center" >
                        <Stack display="flex" direction="row" gap={3}>
                        <Box sx={{
                                width: "40%", 
                                height: "auto", 
                                borderRadius: theme.vars.radius.sm,
                                backgroundImage: `url(${background})`,
                                backgroundPosition: "center"
                                 }}>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "column", width: "60%", gap: 6}}>
                            
                                <Typography level="h2">Rewards</Typography>

                                <Typography level="body-md" sx={{wordWrap: "break-word"}}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, consequuntur? Temporibus soluta quae laboriosam illo? Aliquid eaque rerum unde excepturi tempora, quaerat, cumque laudantium totam sapiente ipsa neque, minus debitis.
                                </Typography>
                            </Box>
            
                            
                        </Stack>
                        <Button sx={{
                                width: "50%",
                                height: "30px",
                                marginTop: "5%"
                            }} 
                        variant="solid">Leia mais</Button>
                    </Grid>
                    </Grid>

                    
         </>
    );
}

export default Home;