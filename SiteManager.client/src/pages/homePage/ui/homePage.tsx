import { Typography } from '@mui/material';
import { IntroductionList } from '../../../widgets/introductionList/ui/introductionList';
import styles from './homePage.module.scss';

export const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title_container}>
                <Typography variant="h5" className={styles.title_content}>自己紹介一覧</Typography>
            </div>
            <div className={styles.content_container}>
                <IntroductionList/>
            </div>
        </div>
    );
}