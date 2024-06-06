import { Box } from "@mui/joy";
import background from '../assets/tartaruga.jpg'
import Menu from "../components/Menu";

const Home = () => {
    return (
        <>
            <Box sx={{ backgroundImage: `url(${background})` }} width="100%" height="100vh">
                <Menu />

            </Box>
        </>
    );
}

export default Home;