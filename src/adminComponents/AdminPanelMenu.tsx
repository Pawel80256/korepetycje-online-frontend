import {Box, Button, Divider, List, ListItem, ListItemButton, ListItemText, Tab, Tabs} from "@mui/material"
import {useNavigate} from "react-router-dom";

export const AdminPanelMenu = () =>{
    const items = ['Nauczyciele', 'Uczniowie', 'Spotkania', 'Opinie'];
    const navigate = useNavigate();
    return (
        <div>
            {items.map(item => (
                <Button
                    key={item}
                    onClick={() => {
                        switch (item){
                            case "Nauczyciele":
                                navigate('/adminPanel/teachers')
                                break
                            case "Uczniowie":
                                navigate('/adminPanel/uczniowie')
                                break
                            case "Spotkania":
                                navigate('/adminPanel/appointments')
                                break
                            case "Opinie":
                                navigate("/adminPanel/opinions")
                                break
                        }
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    {item}
                </Button>
            ))}
        </div>
    );
}