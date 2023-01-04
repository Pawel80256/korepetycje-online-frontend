import Backdrop from "@mui/material/Backdrop";
import {Box, Button, Fade, Grid, Modal, Typography} from "@mui/material";
import {AppointmentDto} from "../../dtos/models/AppointmentDto";
import {SubjectDto} from "../../dtos/models/Subject";
import {deleteAppointment} from "../../app/services/AppointmentService";
import {useSnackbar} from "notistack";

export interface CreateAppointmentModalProps {
    open: boolean,
    setOpen: (value: boolean) => void,
    appointmentId:string,
    selectedSubject:SubjectDto
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "20%",
    // height: "35%",
    height: "auto",
    bgcolor: 'background.paper',
    border: '2px solid blue',
    boxShadow: 24,
    p: 4,
    display: "flex"
};

export const DeleteAppointmentModal:React.FC<CreateAppointmentModalProps> = (props) =>{
    const {open,setOpen,selectedSubject,appointmentId} = props
    const handleClose = () => setOpen(false);
    const {enqueueSnackbar} = useSnackbar()

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
                    <Grid container>
                        <Grid item style={{margin:"auto"}}>
                            <Typography>
                                Czy chcesz usunąć termin z kalendarza?
                            </Typography>
                            <Grid item style={{textAlign:"center"}}>
                                <Button variant={"contained"} onClick={()=> {
                                    if(selectedSubject === null){
                                        deleteAppointment(appointmentId).then(()=>window.location.reload())
                                    }else{
                                        enqueueSnackbar("Ta wizyta jest już zarezerwowana, w celu jej odwołania skontaktuj się z administratorem",{variant:"error"})
                                    }
                                }}>
                                    Potwierdź
                                </Button>
                                <Button variant={"contained"} color={"error"} onClick={handleClose}>
                                    Anuluj
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </Modal>
    )
}