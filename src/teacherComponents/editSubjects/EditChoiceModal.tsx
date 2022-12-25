import {useParams} from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import {Box, Button, ButtonGroup, Fade, Grid, Modal, TextField, Typography} from "@mui/material";
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
    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const [subjectName, setSubjectName] = useState<string>('')

    const toggleDeleting = () => {
        setIsAdding(false)
        setIsDeleting(!isDeleting)
    }

    const toggleAdding = () => {
        setIsDeleting(false)
        setIsAdding(!isAdding)
    }

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
                        <Button fullWidth onClick={toggleAdding}>Dodaj</Button>
                        <Button fullWidth onClick={toggleDeleting}>Usuń</Button>
                    </ButtonGroup>

                    {isDeleting &&
                    <SubjectToEditList subjects={subjects}/>}

                    {isAdding &&
                    <Grid container item style={{margin: "auto", marginTop: "2%"}} direction={"column"}>
                        <TextField
                            label="Przedmiot nauczania"
                            id="subjectName"
                            name="subjectName"
                            value={subjectName}
                            onChange={(event => setSubjectName(event.target.value))}
                        />
                        <Button variant={"contained"} onClick={() => {
                            console.log(subjectName)
                        }}>Dodaj przedmiot</Button>
                    </Grid>
                    }
                </Grid>
            </Box>
        </Fade>
    </Modal>)
}