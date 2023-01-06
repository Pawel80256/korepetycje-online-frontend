import Backdrop from "@mui/material/Backdrop";
import {Box, Button, Fade, Grid, Modal, Typography} from "@mui/material";
import {AppointmentDto} from "../../dtos/models/AppointmentDto";
import {SubjectDto} from "../../dtos/models/Subject";
import {cancelBooking, deleteAppointment} from "../../app/services/AppointmentService";
import {useSnackbar} from "notistack";

export interface CancelBookingModalProps {
    open: boolean,
    setOpen: (value: boolean) => void,
    appointmentId:string,
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

export const CancelBookingModal:React.FC<CancelBookingModalProps> = (props) =>{
    const {open,setOpen,appointmentId} = props
    const handleClose = () => setOpen(false);
    const {enqueueSnackbar} = useSnackbar()
    const loggedUserId = localStorage.getItem("userDataId")

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
                                Czy chcesz anulować wizytę?
                            </Typography>
                            <Grid item style={{textAlign:"center"}}>
                                <Button variant={"contained"} onClick={()=> {
                                    cancelBooking(appointmentId,loggedUserId!).then(()=>window.location.reload())
                                }}>
                                    Tak
                                </Button>
                                <Button variant={"contained"} color={"error"} onClick={handleClose}>
                                    Nie
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </Modal>
    )
}