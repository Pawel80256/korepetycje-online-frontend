import React from 'react';
import {OpinionDto} from "../../dtos/models/Opinion";
import {Grid, Typography} from '@mui/material';
import StarRatings from "react-star-ratings";
import {getAverageRating} from "../../app/utils/utils";

interface Props {
    opinions: OpinionDto[];
}

export const OpinionNumericValueList: React.FC<Props> = ({opinions}) => {
    const opinionCounts = [1, 2, 3, 4, 5].map(value =>
        opinions.filter(opinion => opinion.numericValue === value).length
    );

    const opinionPercents = opinionCounts.map(count => (count / opinions.length) * 100);

    return (
        <Grid container>
            <Grid container item>
                <Typography fontSize={"30px"}> {`${opinions.length} opinie: `}&nbsp; </Typography>
                <Grid item style={{marginTop: "5px"}}>
                    <StarRatings rating={getAverageRating(opinions)} numberOfStars={5}
                                 starRatedColor="#3990E8" starDimension={"30px"}
                                 starSpacing={"1px"}/>
                </Grid>
                <Typography fontSize={"30px"}>&nbsp;{` ${getAverageRating(opinions)} / 5`}</Typography>
            </Grid>


            <Grid container direction={"column"}>
                {opinionPercents.map((percent, index) => (
                    <Grid item xs={true} key={index}
                          style={{height: "25px", width: "100%"}}>
                        <span>{index + 1}</span>
                        <span style={{color: "blue"}}>&#9733;</span>
                        <progress value={percent} max={100} style={{width: "95%"}}/>
                        <span>{opinionCounts[index]}</span>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default OpinionNumericValueList;