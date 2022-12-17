import {ParagraphDto} from "../../dtos/models/ParagraphDto";
import {Divider, Grid, Paper} from "@mui/material";
import {TeacherParagraphElement} from "./TeacherParagraphElement";
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import {useState} from "react";
import {ParagraphInputModal} from "./ParagraphInputModal";
import {changeParagraphOrder, deleteParagraph} from "../../app/services/TeacherService";
import {useParams} from "react-router-dom";

export interface TeacherParagraphListProps {
    paragraphs: ParagraphDto[]
    isTeacher: boolean
}

export const TeacherParagraphList: React.FC<TeacherParagraphListProps> = (props) => {
    const {paragraphs, isTeacher} = props
    const [isOpenAddParagraphModal, setIsOpenAddParagraphModal] = useState<boolean>(false)
    //todo: take id from localstorage
    const params = useParams();
    const {teacherId} = params
    return (
        <Grid container direction={"column"}>
            <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px", marginBottom: "90px"}}>
                {isTeacher &&
                <Grid container direction={"row"}>
                    <Grid item>
                        <AddIcon
                            sx={{"&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"}}}
                            onClick={() => setIsOpenAddParagraphModal(true)}
                        />
                    </Grid>
                </Grid>}
                {paragraphs.map(p =>
                    <>
                        {isTeacher &&
                        <Grid container sx={{margin: "auto"}}>
                            <KeyboardArrowDownIcon
                                style={{margin: "auto"}}
                                sx={{"&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"}}}
                                onClick={() => {
                                    changeParagraphOrder(teacherId!, p.id, false)
                                    window.location.reload()
                                }}
                            />
                            <DeleteIcon
                                sx={{"&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"}}}
                                onClick={() => {
                                    deleteParagraph(teacherId!, p.id)
                                    window.location.reload()
                                }}
                            />
                            <KeyboardArrowUpIcon
                                style={{margin: "auto"}}
                                sx={{"&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"}}}
                                onClick={() => {
                                    changeParagraphOrder(teacherId!, p.id, true)
                                    window.location.reload()
                                }}
                            />
                        </Grid>
                        }
                        <TeacherParagraphElement paragraph={p} isTeacher={isTeacher}/>
                        {isTeacher && <Divider style={{marginTop: "2%", marginBottom: "2%"}}/>}
                    </>
                )}
            </Paper>
            <ParagraphInputModal open={isOpenAddParagraphModal} setOpen={setIsOpenAddParagraphModal}/>
        </Grid>
    )
}