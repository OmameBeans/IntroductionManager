import { Box, Button, Container, Snackbar, Stack, TextField } from "@mui/material";
import styles from './update-introduction-form.module.scss';
import { updateIntroduction } from "../../../entities/introduction";
import { useState } from "react";

export const UpdateIntroductionForm = () => {

    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const handleClickUpdateButton = (title: string, url: string) => {
        const responce = updateIntroduction({
            title: title,
            url: url,
        });

        responce.then(result => {
            setOpenSnackBar(true);
            if (result.hasError) {
                setMessage(result.errorMessages.join(' '));
            } else {
                setMessage('更新に成功しました');
            }
        })
    }

    return (
        <div className={styles.wrapper} >
            <Container className={styles.container}>
                <Stack spacing={2 }>
                    <TextField id="outlined-basic" label="タイトル" variant="outlined" />
                    <TextField id="outlined-basic" label="URL" variant="outlined" />
                    <Box display="flex" justifyContent="flex-end">
                        <Button
                            onClick={() => handleClickUpdateButton('mui','https://mui.com/') }
                        >更新</Button>
                    </Box>
                </Stack>
            </Container>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openSnackBar}
                message={message}
                onClose={() => setOpenSnackBar(false)}
            />
        </div>
    );
}