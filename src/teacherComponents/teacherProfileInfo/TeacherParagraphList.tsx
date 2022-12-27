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
import {Roles} from "../../app/enums/Roles";

export interface TeacherParagraphListProps {
    paragraphs: ParagraphDto[]
}

export const TeacherParagraphList: React.FC<TeacherParagraphListProps> = (props) => {
    const {paragraphs} = props
    const [isOpenAddParagraphModal, setIsOpenAddParagraphModal] = useState<boolean>(false)
    //todo: take id from localstorage
    const params = useParams();
    const {teacherId} = params
    const role = localStorage.getItem("role")
    const loggedUserId = localStorage.getItem("userDataId")
    return (
        <Grid container direction={"column"}>
            <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px", marginBottom: "90px"}}>
                {role === Roles.TEACHER &&
                <Grid container direction={"row"}>

                        {
                            (role === Roles.TEACHER && loggedUserId === teacherId) &&
                            <Grid item>
                            <AddIcon
                                sx={{"&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"}}}
                                onClick={() => setIsOpenAddParagraphModal(true)}
                            />
                            </Grid>
                        }


                </Grid>}
                {paragraphs.map(p =>
                    <>
                        {(role === Roles.TEACHER && loggedUserId === teacherId) &&
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
                        <TeacherParagraphElement paragraph={p} isTeacher={role === Roles.TEACHER}/>
                        {(role === Roles.TEACHER && loggedUserId === teacherId) && <Divider style={{marginTop: "2%", marginBottom: "2%"}}/>}
                    </>
                )}
            </Paper>
            <ParagraphInputModal open={isOpenAddParagraphModal} setOpen={setIsOpenAddParagraphModal}/>
        </Grid>
    )
}