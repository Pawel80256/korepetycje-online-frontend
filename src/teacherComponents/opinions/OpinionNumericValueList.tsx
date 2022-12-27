import React, {useState} from 'react';
import {OpinionDto} from "../../dtos/models/Opinion";
import {Button, Grid, Typography} from '@mui/material';
import StarRatings from "react-star-ratings";
import {getAverageRating} from "../../app/utils/utils";
import {CreateOpinionModal} from "./CreateOpinionModal";
import {Roles} from "../../app/enums/Roles";

interface Props {
    opinions: OpinionDto[];
}

export const OpinionNumericValueList: React.FC<Props> = ({opinions}) => {
    const [isOpenCreateOpinionModal, setIsOpenCreateOpinionModal] = useState<boolean>(false)

    const opinionCounts = [1, 2, 3, 4, 5].map(value =>
        opinions.filter(opinion => opinion.numericValue === value).length
    );

    const opinionPercents = opinionCounts.map(count => (count / opinions.length) * 100);
    const role = localStorage.getItem("role")
    return (
        <Grid container>
            <Grid container item>
                <Typography fontSize={"30px"}> {`${opinions.length} opinie: `}&nbsp; </Typography>
                <Grid item style={{marginTop: "5px"}}>
                    <StarRatings rating={getAverageRating(opinions)} numberOfStars={5}
                                 starRatedColor="#3990E8" starDimension={"30px"}
                                 starSpacing={"1px"}/>
                </Grid>
                <Typography fontSize={"30px"}>&nbsp;{` ${getAverageRating(opinions).toFixed(2)} / 5`}</Typography>
                {role === Roles.CLIENT &&
                <Button
                    variant="contained"
                    style={{marginLeft: "40%"}}
                    onClick={() => setIsOpenCreateOpinionModal(true)}
                >
                    Dodaj opinię
                </Button>}
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
            <CreateOpinionModal open={isOpenCreateOpinionModal} setOpen={setIsOpenCreateOpinionModal}/>
        </Grid>
    );
};

export default OpinionNumericValueList;