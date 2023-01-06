import {OpinionDto} from "../../dtos/models/Opinion";
import {Grid} from "@mui/material";
import {OpinionElement} from "./OpinionElement";

export interface OpinionListProps {
    opinions: OpinionDto[]
}

export const OpinionList: React.FC<OpinionListProps> = (props) => {
    const {opinions} = props
    return (
        <Grid container direction={"row"}>
            {opinions.map(opinion => {
                return <OpinionElement key={opinion.id} opinion={opinion}/>
            })}
        </Grid>
    )
}