import { List, ListItem, ListItemButton, ListDivider, Box } from "@mui/joy";
import theme from "../theme";
import { Home } from "@mui/icons-material";

const Menu = () => {
    return (
        <>
            <Box sx={{ backgroundColor: theme.vars.palette.background.surface }} padding={theme.vars.fontSize.sm} margin="0 auto" maxWidth="100%" borderBottom={`${theme.vars.palette.neutral.outlinedBorder} 1px solid`}>
                <List
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    role="menubar"
                    orientation="horizontal">
                    <ListItem role="none">
                        <ListItemButton role="menuitem" component="a" href="/">
                            <Home />
                        </ListItemButton>
                    </ListItem>
                    <ListDivider />
                    <ListItem role="none">
                        <ListItemButton role="menuitem" component="a" href="/rewards">
                            Rewards
                        </ListItemButton>
                    </ListItem>
                    <ListDivider />
                    <ListItem role="none">
                        <ListItemButton role="menuitem" component="a" href="/blog">
                            Blog
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box >
        </>
    );
}

export default Menu;