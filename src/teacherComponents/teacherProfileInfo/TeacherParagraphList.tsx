import {ParagraphDto} from "../../dtos/models/ParagraphDto";
import {Grid, Paper} from "@mui/material";
import {TeacherParagraphElement} from "./TeacherParagraphElement";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import {ParagraphInputModal} from "./ParagraphInputModal";

export interface TeacherParagraphListProps {
    paragraphs: ParagraphDto[]
    isTeacher: boolean
}

export const TeacherParagraphList: React.FC<TeacherParagraphListProps> = (props) => {
    const {paragraphs, isTeacher} = props
    const [isOpenAddParagraphModal, setIsOpenAddParagraphModal] = useState<boolean>(false)
    return (
        <Grid container direction={"column"}>
            <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                <Grid item style={{marginLeft: "95%"}}>
                    {isTeacher && <AddIcon sx={{
                        "&:hover": {
                            cursor: "pointer",
                            backgroundColor: "#C0E6FC"
                        }
                    }}
                                           onClick={() => setIsOpenAddParagraphModal(true)}
                    />}

                </Grid>
                {paragraphs.map(p => <TeacherParagraphElement paragraph={p}/>)}
            </Paper>
            <ParagraphInputModal open={isOpenAddParagraphModal} setOpen={setIsOpenAddParagraphModal}/>
        </Grid>
    )
}