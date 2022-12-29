import {Divider, List, ListItem, ListItemButton, ListItemText} from "@mui/material"

export const AdminPanelMenu = () =>{
    return(<>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Nauczyciele" />
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Uczniowie" />
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Spotkania" />
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Opinie" />
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Dane użytkowników" />
                </ListItemButton>
            </ListItem>
            <Divider/>
        </List>
    </>)
}