import {useParams} from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import {Box, Fade, Grid, Modal, TextField} from "@mui/material";
import {useFormik} from "formik";
import Button from "@mui/material/Button";
import * as React from "react";
import {addToProfileInfo} from "../../app/services/TeacherService";
import {AddParagraphRequestDto} from "../../dtos/models/ParagraphDto";

export interface ParagraphInputModalProps {
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

export const ParagraphInputModal: React.FC<ParagraphInputModalProps> = (props) => {
    const {open, setOpen} = props
    const handleClose = () => setOpen(false);
    const params = useParams();
    const {teacherId} = params

    const formik = useFormik({
        initialValues: {header: '', content: ''},
        onSubmit: (values) => {
            console.log(values)
            const paragraph: AddParagraphRequestDto = {
                title: values.header,
                content: values.content
            }
            addToProfileInfo(teacherId!, paragraph).then(()=>window.location.reload())

        }
    });

    return (
        <>
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
                        <Grid container direction={"column"} style={{width: "100%"}}>
                            <form onSubmit={formik.handleSubmit}>

                                <TextField
                                    id="header"
                                    name="header"
                                    value={formik.values.header}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    label="Nagłówek"
                                    fullWidth
                                />
                                <TextField
                                    id="content"
                                    name="content"
                                    value={formik.values.content}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    label="Kontent"
                                    multiline
                                    fullWidth
                                    style={{marginTop: "2%"}}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                >
                                    Dodaj
                                </Button>
                            </form>
                        </Grid>

                    </Box>
                </Fade>
            </Modal>
        </>
    )
}