import Backdrop from "@mui/material/Backdrop";
import {Box, Button, Fade, Modal, TextField} from "@mui/material";
import {useState} from "react";
import dayjs, {Dayjs} from 'dayjs';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';

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
    const [value, setValue] = useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

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

                        <DateTimePicker
                            label="Date&Time picker"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <Button variant="contained" onClick={() => {
                            console.log(value?.toISOString())
                        }}>
                            Dodaj
                        </Button>
                    </LocalizationProvider>
                </Box>
            </Fade>
        </Modal>
    )
}