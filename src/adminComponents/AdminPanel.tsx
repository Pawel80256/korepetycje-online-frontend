import {AdminPanelMenu} from "./AdminPanelMenu";
import {Grid} from "@mui/material";
import {OpinionsTable} from "./OpinionsTable";
import {useParams} from "react-router-dom";
import {TeachersTable} from "./TeachersTable";

export const AdminPanel = () =>{
    const params = useParams();
    const tab = params.tab
    return (
        <>
            <Grid container direction={"column"}>
                <Grid item >
                    <AdminPanelMenu/>
                </Grid>
                {tab === "opinions" &&
                <Grid item>
                    <OpinionsTable/>
                </Grid>
                }
                {tab === "teachers" &&
                <Grid item>
                    <TeachersTable/>
                </Grid>
                }

            </Grid>
        </>
    )
}