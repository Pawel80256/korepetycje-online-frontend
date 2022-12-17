import {useParams} from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import {Box, Button, Fade, Grid, Modal, TextField} from "@mui/material";
import {Form, Formik} from 'formik';
import StarRatings from 'react-star-ratings';

export interface CreateOpinionModalProps {
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

export const CreateOpinionModal: React.FC<CreateOpinionModalProps> = (props) => {
    const {open, setOpen} = props
    const clientUserDataId = localStorage.getItem('userDataId')
    const handleClose = () => setOpen(false);
    const params = useParams();
    const {teacherId} = params
    return (<>
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
                    <Formik
                        initialValues={{
                            rating: 0,
                            text: ''
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({values, handleChange}) => (
                            <Form style={{margin: "auto", width: "80%"}}>
                                <Grid container direction={"column"} style={{display: "flex"}}>
                                    <Grid item xs={6} style={{margin: "auto"}}>
                                        <StarRatings
                                            rating={values.rating}
                                            changeRating={(newRating) => handleChange({
                                                target: {
                                                    name: 'rating',
                                                    value: newRating
                                                }
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} style={{margin: "auto", width: "100%"}}>
                                        <TextField
                                            name="text"
                                            value={values.text}
                                            onChange={handleChange}
                                            multiline
                                            style={{height: "150%", width: "100%"}}
                                        />
                                    </Grid>
                                    <Grid item xs={12} style={{margin: "auto", marginTop: "3%"}}>
                                        <Button type="submit" variant="contained">Zatwierdź</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Fade>
        </Modal>
    </>)
}