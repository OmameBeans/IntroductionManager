import { Container, Typography } from '@mui/material';
import styles from './postPage.module.scss';
import { UpdateIntroductionForm } from '../../../widgets/update-introduction-form';

export const PostPage = () => {
    return (
        <Container className={styles.wrapper}>
            <div className={styles.title_container}>
                <Typography variant="h5" className={styles.title_content}>自己紹介の更新</Typography>
            </div>
            <Container className={styles.container}>
                <UpdateIntroductionForm/>
            </Container>
        </Container>
    );
}