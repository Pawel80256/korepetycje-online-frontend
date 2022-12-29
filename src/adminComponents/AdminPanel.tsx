import {AdminPanelMenu} from "./AdminPanelMenu";
import {Grid} from "@mui/material";
import {OpinionsTable} from "./OpinionsTable";

export const AdminPanel = () =>{
    return (
        <>
            <Grid container direction={"column"}>
                <Grid item >
                    <AdminPanelMenu/>
                </Grid>
                <Grid item >
                    <OpinionsTable/>
                </Grid>
            </Grid>
        </>
    )
}