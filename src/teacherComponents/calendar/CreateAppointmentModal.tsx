import Backdrop from "@mui/material/Backdrop";
import {Box, Button, Fade, Grid, Modal, TextField} from "@mui/material";
import {useState} from "react";
import dayjs, {Dayjs} from 'dayjs';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {createAppointment} from "../../app/services/AppointmentService";
import {useParams} from "react-router-dom";

export interface CreateAppointmentModalProps {
    open: boolean,
    setOpen: (value: boolean) => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    // height: "35%",
    height: "auto",
    bgcolor: 'background.paper',
    border: '2px solid blue',
    boxShadow: 24,
    p: 4,
    display: "flex"
};

export const CreateAppointmentModal: React.FC<CreateAppointmentModalProps> = (props) => {
    const {open, setOpen} = props
    const handleClose = () => setOpen(false);
    const params = useParams();
    const {teacherId} = params
    const [value, setValue] = useState<Dayjs | null>(
        dayjs(new Date())
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

    const handleSubmit = (teacherId: string, date: Dayjs) => {
        createAppointment(teacherId, date)
        window.location.reload()
    }

    return (
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Grid container direction={"column"} alignContent={"center"}>
                            <Grid item>
                                <DateTimePicker
                                    label="Date&Time picker"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    ampm={false}
                                    disablePast
                                />
                            </Grid>
                            <Grid item style={{margin: "auto", marginTop: "15px"}}>
                                <Button variant="contained" onClick={() => handleSubmit(teacherId!, value!)}>
                                    Dodaj
                                </Button>
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                </Box>
            </Fade>
        </Modal>
    )
}