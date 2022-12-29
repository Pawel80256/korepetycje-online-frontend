import {Box, Divider, List, ListItem, ListItemButton, ListItemText, Tab, Tabs} from "@mui/material"

export const AdminPanelMenu = () =>{
    return(<>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example">
            <Tab label="Nauczyciele"  />
            <Tab label="Uczniowie" />
            <Tab label="Spotkania" />
            <Tab label="Opinie" />
        </Tabs>
        </Box>
    </>)
}