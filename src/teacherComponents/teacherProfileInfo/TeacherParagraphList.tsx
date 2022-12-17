import {ParagraphDto} from "../../dtos/models/ParagraphDto";
import {Grid, Paper} from "@mui/material";
import {TeacherParagraphElement} from "./TeacherParagraphElement";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useState} from "react";
import {ParagraphInputModal} from "./ParagraphInputModal";
import {EditProfileInfoOrderModal} from "./EditProfileInfoOrderModal";
import {changeParagraphOrder} from "../../app/services/TeacherService";
import {useParams} from "react-router-dom";

export interface TeacherParagraphListProps {
    paragraphs: ParagraphDto[]
    isTeacher: boolean
}

export const TeacherParagraphList: React.FC<TeacherParagraphListProps> = (props) => {
    const {paragraphs, isTeacher} = props
    const [isOpenAddParagraphModal, setIsOpenAddParagraphModal] = useState<boolean>(false)
    const [isOpenOrderModal, setIsOpenOrderModal] = useState<boolean>(false)
    //todo: take id from localstorage
    const params = useParams();
    const {teacherId} = params
    return (
        <Grid container direction={"column"}>
            <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                {isTeacher &&
                <Grid container direction={"row"}>
                    <Grid item>
                        <AddIcon
                            sx={{"&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"}}}
                            onClick={() => setIsOpenAddParagraphModal(true)}
                        />
                    </Grid>
                    <Grid item>
                        <EditIcon
                            sx={{"&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"}}}
                            onClick={() => setIsOpenOrderModal(true)}

                        />
                    </Grid>
                </Grid>}
                {paragraphs.map(p =>
                    <>
                        <Grid container sx={{margin: "auto"}}>
                            <KeyboardArrowDownIcon
                                style={{margin: "auto"}}
                                sx={{"&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"}}}
                                onClick={() => {
                                    changeParagraphOrder(teacherId!, p.id, false)
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
                        <TeacherParagraphElement paragraph={p} isTeacher={isTeacher}/>
                    </>
                )}
            </Paper>
            <ParagraphInputModal open={isOpenAddParagraphModal} setOpen={setIsOpenAddParagraphModal}/>
            <EditProfileInfoOrderModal open={isOpenOrderModal} setOpen={setIsOpenOrderModal}/>
        </Grid>
    )
}