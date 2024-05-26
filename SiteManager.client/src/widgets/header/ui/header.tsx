import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from './header.module.scss';

export const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className={styles.wrapper}>
            <AppBar position="static">
                <Toolbar>
                    <Stack direction="row" sx={{ flexGrow: 1 }} spacing={1}>
                        <Typography variant="h6" component="div" sx={{ p: "6px 8px" }}>
                            自己紹介
                        </Typography>
                        <Link color="inherit" to="/">
                            ホーム
                        </Link>
                        <Link color="inherit" to="/post">
                            投稿
                        </Link>
                    </Stack>
                    <Typography>
                        user
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}