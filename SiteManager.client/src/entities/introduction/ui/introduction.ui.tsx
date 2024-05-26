import { Card, CardContent, Link, Typography } from "@mui/material";

type Props = {
    id: string;
    title: string;
    url: string;
    userId: string;
    userName: string;
};

export const IntroductionCard = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <Typography>
                    {`${props.userId} ${props.userName}`}
                </Typography>
                <Typography>
                    <Link href={props.url} >{props.title}</Link>
                </Typography>
            </CardContent>
        </Card>
    );
}