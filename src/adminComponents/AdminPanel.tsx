import {AdminPanelMenu} from "./AdminPanelMenu";
import {Grid} from "@mui/material";
import {OpinionsTable} from "./OpinionsTable";

export const AdminPanel = () =>{
    return (
        <>
            <Grid container>
                <Grid item style={{width:"10%"}}>
                    <AdminPanelMenu/>
                </Grid>
                <Grid item style={{width:"90%"}}>
                    <OpinionsTable/>
                </Grid>
            </Grid>
        </>
    )
}