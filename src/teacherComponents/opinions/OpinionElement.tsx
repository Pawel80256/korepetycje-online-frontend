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
        <Grid container direction={"row"}>

            <Grid container item direction={"column"} style={{width: "20%"}}>
                <Typography>
                    Imie
                </Typography>
                <StarRatings rating={opinion.numericValue} numberOfStars={5}
                             starRatedColor="#3990E8" starDimension={"15px"}
                             starSpacing={"1px"}/>
                <Typography>
                    12/11/2022
                    {/*{opinion.createdAt.toLocaleDateString()}*/}
                </Typography>
            </Grid>

            <Grid item style={{width: "80%"}}>
                Jest dobrze chłopaki dobrze robią
            </Grid>

        </Grid>
    )
}