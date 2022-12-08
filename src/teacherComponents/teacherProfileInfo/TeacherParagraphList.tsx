import {ParagraphDto} from "../../dtos/models/ParagraphDto";
import {Grid, Paper} from "@mui/material";
import {TeacherParagraphElement} from "./TeacherParagraphElement";

export interface TeacherParagraphListProps{
    paragraphs:ParagraphDto[]
}

export const TeacherParagraphList:React.FC<TeacherParagraphListProps> = (props) =>{
    const {paragraphs} = props
    return(
        <Grid container direction={"column"}>
            <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                {paragraphs.map(p => <TeacherParagraphElement paragraph={p}/>)}
            </Paper>
        </Grid>
    )
}