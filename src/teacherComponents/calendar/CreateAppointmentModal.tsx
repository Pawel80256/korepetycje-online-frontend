import Backdrop from "@mui/material/Backdrop";
import {Box, Fade, Modal} from "@mui/material";

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
                    <>xd</>
                </Box>
            </Fade>
        </Modal>
    )
}