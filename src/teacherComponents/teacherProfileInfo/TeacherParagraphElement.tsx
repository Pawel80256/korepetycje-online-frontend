import {ParagraphDto} from "../../dtos/models/ParagraphDto";
import {Grid, Paper, Typography} from "@mui/material";

export interface TeacherParagraphElementProps {
    paragraph: ParagraphDto
}

export const TeacherParagraphElement: React.FC<TeacherParagraphElementProps> = (props: TeacherParagraphElementProps) => {
    const {paragraph} = props
    return (
        <Grid container direction={"column"}
              style={{margin: "auto", width: "60%", padding: "5px", textAlign: "center", display: "flex"}}
              spacing={2}>

            <Grid item style={{margin: "auto"}}>
                <Typography variant={"h4"}>
                    {paragraph.title}
                </Typography>
            </Grid>

            <Grid item style={{marginLeft:"10%",marginRight:"10%"}}>
                <Typography>
                    {paragraph.content}
                </Typography>
            </Grid>


        </Grid>
    )
}