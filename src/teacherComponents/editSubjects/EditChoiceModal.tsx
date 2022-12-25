import {useParams} from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import {Box, Button, ButtonGroup, Fade, Grid, Modal, Typography} from "@mui/material";
import {SubjectDto} from "../../dtos/models/Subject";
import {useState} from "react";
import {SubjectToEditList} from "./SubjectToEditList";

export interface EditChoiceModalProps {
    open: boolean,
    setOpen: (value: boolean) => void
    subjects: SubjectDto[]
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: "50%",
    // // height: "35%",
    // height: "auto",
    bgcolor: 'background.paper',
    border: '2px solid blue',
    boxShadow: 24,
    p: 4,
    display: "flex"
};

export const EditChoiceModal: React.FC<EditChoiceModalProps> = (props) => {
    const {open, setOpen, subjects} = props
    const handleClose = () => setOpen(false);
    const params = useParams();
    const {teacherId} = params
    const [isAdding, setIsAdding] = useState<boolean>(false)
    const [isDeleting, setIsDeleting] = useState<boolean>(true)

    return (<Modal
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
                <Grid container direction={"row"}>
                    <Typography style={{fontWeight: "bold", fontSize: "140%", margin: "auto"}}>
                        Edycja tematów nauczania
                    </Typography>
                    <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                        style={{width: "100%"}}
                    >
                        <Button fullWidth>Dodaj</Button>
                        <Button fullWidth>Usuń</Button>
                    </ButtonGroup>
                    {isDeleting &&
                    <SubjectToEditList subjects={subjects}/>}
                </Grid>
            </Box>
        </Fade>
    </Modal>)
}