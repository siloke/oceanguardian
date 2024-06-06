import { AspectRatio, Box, Button, Card, Chip, Grid, Stack, Typography } from "@mui/joy";
import Menu from "../components/Menu";
import theme from "../theme";
import turtleImg from "../assets/tartaruga.jpg"

const Blog = () => {
    return (
        <>
            <Menu />
            <Typography padding={theme.vars.fontSize.md} textAlign="center" level="h1">Blog</Typography>
            <Grid container spacing={5} maxWidth="1440px" margin="0 auto">
                <Grid xs={4}>
                    <Card>xs=8</Card>
                </Grid>
                <Grid container spacing={10} xs={8}>
                    <Grid xs={12}>
                        <Typography sx={{color: theme.vars.palette.primary[700], marginBottom: theme.vars.fontSize.sm}} level="h3">Trending Topics</Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip variant="outlined">Poluição</Chip>
                            <Chip variant="outlined">Poluição</Chip>
                            <Chip variant="outlined">Poluição</Chip>
                            <Chip variant="outlined">Poluição</Chip>
                            <Chip variant="outlined">Poluição</Chip>
                        </Stack>
                    </Grid>
                    <Grid xs={12}>
                        <Stack display="flex" direction="row" gap={3}>
                            <Box sx={{display: "flex", flexDirection: "column", width: "60%", gap: 3}}>
                                <Typography level="h2">Conteudo Educativo</Typography>
                                <Typography level="body-md" sx={{wordWrap: "break-word"}}>
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </Typography>
                                <Button variant="solid">Leia mais</Button>
                            </Box>
                            <AspectRatio sx={{width: "40%"}}>
                                <img src={turtleImg} alt="" />
                            </AspectRatio>
                        </Stack>
                    </Grid>
                    <Grid xs={12}>
                        <Stack display="flex" direction="row" gap={3}>
                            <Box sx={{display: "flex", flexDirection: "column", width: "60%", gap: 3}}>
                                <Typography level="h2">Conteudo Educativo</Typography>
                                <Typography level="body-md" sx={{wordWrap: "break-word"}}>
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </Typography>
                                <Button variant="solid">Leia mais</Button>
                            </Box>
                            <AspectRatio sx={{width: "40%"}}>
                                <img src={turtleImg} alt="" />
                            </AspectRatio>
                        </Stack>
                    </Grid>
                    <Grid xs={12}>
                        <Stack display="flex" direction="row" gap={3}>
                            <Box sx={{display: "flex", flexDirection: "column", width: "60%", gap: 3}}>
                                <Typography level="h2">Conteudo Educativo</Typography>
                                <Typography level="body-md" sx={{wordWrap: "break-word"}}>
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </Typography>
                                <Button variant="solid">Leia mais</Button>
                            </Box>
                            <AspectRatio sx={{width: "40%"}}>
                                <img src={turtleImg} alt="" />
                            </AspectRatio>
                        </Stack>
                    </Grid>
                </Grid>
               
            </Grid>
        </>
    );
}

export default Blog;