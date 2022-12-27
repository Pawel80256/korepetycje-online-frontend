import {OpinionDto} from "../../dtos/models/Opinion";
import {Grid, Typography} from "@mui/material";
import StarRatings from "react-star-ratings";
import * as React from "react";

export interface OpinionElementProps {
    opinion: OpinionDto
}

export const OpinionElement: React.FC<OpinionElementProps> = (props) => {
    const {opinion} = props
    return (
        <Grid container direction={"row"}
              sx={{padding: "5px", background: "#E4F2F5", marginTop: "5px", borderRadius: "5px"}}>

            <Grid container item direction={"column"} style={{width: "20%"}}>
                <Typography>
                    {opinion.client.userData.firstName}
                </Typography>
                <StarRatings rating={opinion.numericValue} numberOfStars={5}
                             starRatedColor="#3990E8" starDimension={"15px"}
                             starSpacing={"1px"}/>
                <Typography color="text.secondary" fontSize={"13px"}>
                    {new Date(opinion.createdAt).toLocaleDateString()}
                </Typography>
            </Grid>

            <Grid item style={{width: "80%"}}>
                <Typography style ={{overflowWrap:"break-word"}}>
                    {opinion.textValue}
                </Typography>
            </Grid>

        </Grid>
    )
}