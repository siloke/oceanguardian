import { Box, Button, Chip, Grid, List, ListItem, ListItemButton, Stack, Typography } from "@mui/joy";
import Menu from "../components/Menu";
import theme from "../theme";
import turtleImg from "../assets/tartaruga.jpg"

const Blog = () => {
    return (
        <>
            <Menu />
            <Typography padding={theme.vars.fontSize.xl3} textAlign="center" level="h1">Blog</Typography>
            <Grid container spacing={4} maxWidth="1440px" margin="0 auto">
                <Grid xs={4}>
                    <List>
                        <ListItemButton selected sx={{borderRadius: theme.vars.radius.sm, marginBottom: theme.vars.fontSize.sm}}>
                            <ListItem>Topico</ListItem>
                        </ListItemButton>                  
                        <ListItemButton sx={{borderRadius: theme.vars.radius.sm, marginBottom: theme.vars.fontSize.sm}}>
                            <ListItem>Topico</ListItem>
                        </ListItemButton>
                        <ListItemButton sx={{borderRadius: theme.vars.radius.sm, marginBottom: theme.vars.fontSize.sm}}>
                            <ListItem>Topico</ListItem>
                        </ListItemButton>
                        <ListItemButton sx={{borderRadius: theme.vars.radius.sm, marginBottom: theme.vars.fontSize.sm}}>
                            <ListItem>Topico</ListItem>
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid container spacing={8} xs={8}>
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis exercitationem, numquam non mollitia harum suscipit? Impedit numquam tempora quam perferendis incidunt culpa molestiae vero rerum! Mollitia amet rerum deleniti.
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Chip variant="outlined">Poluição</Chip>
                                    <Chip variant="outlined">Oceano</Chip>
                                    <Chip variant="outlined">Pesca</Chip>
                                </Stack>
                                <Button variant="solid">Leia mais</Button>
                            </Box>
                            <Box sx={{
                                width: "40%", 
                                height: "auto", 
                                borderRadius: theme.vars.radius.sm,
                                backgroundImage: `url(${turtleImg})`,
                                backgroundPosition: "center"
                            }}>
                            </Box>
                        </Stack>
                    </Grid>
                    
                    <Grid xs={12}>
                        <Stack display="flex" direction="row" gap={3}>
                            <Box sx={{display: "flex", flexDirection: "column", width: "60%", gap: 3}}>
                                <Typography level="h2">Conteudo Educativo</Typography>
                                <Typography level="body-md" sx={{wordWrap: "break-word"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum odit ullam perspiciatis! Officiis eius minima libero quae dolores facilis ad aut, alias vero in illo reprehenderit error quod, vitae voluptate.
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Chip variant="outlined">Poluição</Chip>
                                    <Chip variant="outlined">Oceano</Chip>
                                    <Chip variant="outlined">Pesca</Chip>
                                </Stack>
                                <Button variant="solid">Leia mais</Button>
                            </Box>
                            <Box sx={{
                                width: "40%", 
                                height: "auto", 
                                borderRadius: theme.vars.radius.sm,
                                backgroundImage: `url(${turtleImg})`,
                                backgroundPosition: "center"
                            }}>
                            </Box>
                        </Stack>
                    </Grid>

                    <Grid xs={12}>
                        <Stack display="flex" direction="row" gap={3}>
                            <Box sx={{display: "flex", flexDirection: "column", width: "60%", gap: 3}}>
                                <Typography level="h2">Conteudo Educativo</Typography>
                                <Typography level="body-md" sx={{wordWrap: "break-word"}}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, consequuntur? Temporibus soluta quae laboriosam illo? Aliquid eaque rerum unde excepturi tempora, quaerat, cumque laudantium totam sapiente ipsa neque, minus debitis.
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Chip variant="outlined">Poluição</Chip>
                                    <Chip variant="outlined">Oceano</Chip>
                                    <Chip variant="outlined">Pesca</Chip>
                                </Stack>
                                <Button variant="solid">Leia mais</Button>
                            </Box>
                            <Box sx={{
                                width: "40%", 
                                height: "auto", 
                                borderRadius: theme.vars.radius.sm,
                                backgroundImage: `url(${turtleImg})`,
                                backgroundPosition: "center"
                            }}>
                            </Box>
                        </Stack>
                    </Grid>

                </Grid>
               
            </Grid>
        </>
    );
}

export default Blog;