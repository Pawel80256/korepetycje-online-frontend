import React from "react";
import {AppBar, Grid, MenuItem, Toolbar, Typography} from "@mui/material";


export const NavigationBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Grid container alignContent={"center"}>
                    <Grid item xs={2}>
                        <MenuItem>
                            <Typography variant={"h5"}>KorepetycjeUWB</Typography>
                        </MenuItem>
                    </Grid>
                    <Grid xs={8}/>
                    <Grid item xs={1}>
                        <MenuItem>
                            Logowanie
                        </MenuItem>
                    </Grid>
                    <Grid item xs={1}>
                        <MenuItem>
                            Rejestracja
                        </MenuItem>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    );
};
