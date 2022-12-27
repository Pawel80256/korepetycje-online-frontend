import React from "react";
import {AppBar, Grid, MenuItem, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "./Routes";
import {Roles} from "../app/enums/Roles";
import {logout} from "../app/slices/AuthSlice";
import {useAppDispatch} from "../app/hooks";


export const NavigationBar = () => {
    const navigate = useNavigate()
    const userId = localStorage.getItem("userDataId")
    const role = localStorage.getItem("role")
    const dispatch = useAppDispatch()
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container alignContent={"center"}>
                    <Grid item xs={2}>
                        <MenuItem onClick={() => navigate(AppRoutes.SEARCH)}>
                            <Typography variant={"h5"}>KorepetycjeUWB</Typography>
                        </MenuItem>
                    </Grid>
                    <Grid item xs={7}/>
                    <Grid item xs={1}>
                        <MenuItem onClick={() => {
                            if(role === Roles.CLIENT){
                                navigate(`/client/${userId}`)
                            }
                            if(role === Roles.TEACHER){
                                navigate(`/teacher/${userId}`)
                            }
                        }}>
                            Profil
                        </MenuItem>
                    </Grid>
                    <Grid item xs={1}>
                        <MenuItem onClick={() => {
                            dispatch(logout())
                            window.location.reload()
                        }}>
                            Wyloguj
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
