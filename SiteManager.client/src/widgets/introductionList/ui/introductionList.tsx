import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Introduction, IntroductionCard, getIntroductions } from '../../../entities/introduction';
import styles from './introductionList.module.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const IntroductionList = () => {
    const [introductions, setIntroductions] = useState<Introduction[]>([]);

    useEffect(() => {
        const responce = getIntroductions();
        responce.then(result => {
            if (!result.hasError) {
                if (result.data) setIntroductions(result.data);
            }
        });
    }, [])

    const renderIntroductionList = (title: string, introductions: Introduction[], defaultExpand: boolean) => {
        return (
            <Accordion defaultExpanded={defaultExpand} className={styles.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.accordion_summary }>
                    <Typography>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                        {introductions.map(introduction => (
                            <IntroductionCard
                                key={introduction.id}
                                id={introduction.id}
                                title={introduction.title}
                                url={introduction.url}
                                userId={introduction.userId}
                                userName={introduction.userName}
                            />
                        ))}
                    </Stack>
                </AccordionDetails>
            </Accordion>
        );
    }

    return (
        <div className={styles._wrapper}>
            <div className={styles._container}>
                <Stack spacing={1}>
                    {renderIntroductionList('講師', introductions, false)}
                    {renderIntroductionList('新入社員', introductions, true)}
                </Stack>
            </div>
        </div>
    );
}