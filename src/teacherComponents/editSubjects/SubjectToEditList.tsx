import {SubjectDto} from "../../dtos/models/Subject";
import {IconButton, List, ListItem, ListItemText} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {deleteSubject} from "../../app/services/SubjectService";
import {useParams} from "react-router-dom";

export interface SubjectToEditListProps {
    subjects: SubjectDto[]
}

export const SubjectToEditList: React.FC<SubjectToEditListProps> = (props) => {
    const {subjects} = props
    const params = useParams();
    const {teacherId} = params
    const handleDelete = (subjectName: string) => {
        deleteSubject(teacherId!, subjectName)
        window.location.reload()
    };

    return (
        <List style={{margin: "auto"}}>
            {subjects.map((subject: SubjectDto) => (
                <ListItem key={subject.subjectName}>
                    <ListItemText sx={{color: "black"}} primary={subject.subjectName}/>
                    <IconButton onClick={() => handleDelete(subject.subjectName)}>
                        <Delete/>
                    </IconButton>
                </ListItem>
            ))}
        </List>
    );
}