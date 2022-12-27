import * as React from 'react';
import {useEffect, useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {Button, FormControl, InputLabel, MenuItem, SelectChangeEvent} from "@mui/material";
import Select from '@mui/material/Select';
import {getSubjectsByTeacherId} from "../../app/services/SubjectService";
import {SubjectDto} from "../../dtos/models/Subject";
import {useParams} from "react-router-dom";
import {bookAppointment} from "../../app/services/AppointmentService";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid blue',
    boxShadow: 24,
    p: 4,
    display: "flex"
};

export interface BookVisitModalProps {
    appointmentId: string,
    open: boolean,
    setOpen: (value: boolean) => void
}

export const BookVisitModal: React.FC<BookVisitModalProps> = (props) => {
    const {open, setOpen, appointmentId} = props
    const clientId = localStorage.getItem('userDataId')
    const handleClose = () => setOpen(false);
    const [subject, setSubject] = React.useState('');
    const [subjects, setSubjects] = useState<SubjectDto[]>([])
    const params = useParams();
    const {teacherId} = params
    const handleChange = (event: SelectChangeEvent) => {
        setSubject(event.target.value);
    };

    useEffect(() => {
        getSubjectsByTeacherId(teacherId!).then(response => setSubjects(response))
    }, [])

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <FormControl sx={{m: 1, minWidth: 120, margin: "auto"}} size="small">
                            <InputLabel id="demo-select-small">Przedmiot</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={subject}
                                label="Przedmiot"
                                onChange={handleChange}
                            >
                                {subjects.map((subject) => (
                                    <MenuItem key={subject.subjectName} value={subject.subjectName}>
                                        {subject.subjectName}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    console.log(appointmentId, clientId, subject)
                                    bookAppointment(appointmentId, clientId!, subject)
                                    window.location.reload()
                                }}
                            >
                                Umów spotkanie
                            </Button>
                        </FormControl>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}