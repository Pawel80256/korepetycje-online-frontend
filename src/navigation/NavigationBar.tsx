import React from "react";
import {AppBar, Grid, MenuItem, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "./Routes";


export const NavigationBar = () => {
    const navigate = useNavigate()
    const userId = localStorage.getItem("userDataId")
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container alignContent={"center"}>
                    <Grid item xs={2}>
                        <MenuItem onClick={() => navigate(AppRoutes.HOME)}>
                            <Typography variant={"h5"}>KorepetycjeUWB</Typography>
                        </MenuItem>
                    </Grid>
                    <Grid item xs={7}/>
                    <Grid item xs={1}>
                        <MenuItem onClick={() => navigate(`/client/${userId}`)}>
                            ClientProfile
                        </MenuItem>
                    </Grid>
                    <Grid item xs={1}>
                        <MenuItem onClick={() => navigate(AppRoutes.LOGIN)}>
                            Logowanie
                        </MenuItem>
                    </Grid>
                    <Grid item xs={1}>
                        <MenuItem onClick={() => navigate(AppRoutes.REGISTER)}>
                            Rejestracja
                        </MenuItem>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    );
};
