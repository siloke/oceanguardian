import { Box, Button, Typography } from "@mui/joy";
import background from '../assets/tartaruga.jpg'
import Menu from "../components/Menu";
import theme from "../theme";

const Home = () => {
    return (
        <>
            <Menu />
                <Box width="100%" height="92vh" alignContent="center" position="relative">
                    <img
                    src={background}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{position: 'absolute', top: '0px', opacity:"0.9", filter: "brightness(24%)"}}
                    />

                    <Typography padding={theme.vars.fontSize.xl3} textAlign="center" level="h1" 
                    style={{position: 'absolute', right: "30%", left: "30%", top: '25%', color: "white"}}
                    >
                        Cuide do meio ambiente
                    </Typography>

                    <Typography padding={theme.vars.fontSize.xl3} textAlign="center" level="h3" 
                    style={{position: 'absolute', right: "30%", left: "30%", top: '33%', color: "white"}}
                    >
                        Você pode fazer a diferença!
                    </Typography>

                    <Button variant="solid"  style={{position: 'absolute', left: "40%", right: "40%", top: '45%'}}>Saiba mais</Button>
                </Box>
         </>
    );
}

export default Home;