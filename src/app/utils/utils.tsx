import {OpinionDto} from "../../dtos/models/Opinion";

export function parseJwt(token: any) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    return JSON.parse(jsonPayload);
}

export const getAverageRating = (opinions: OpinionDto[] | undefined) => {
    if (opinions === undefined) {
        return 0;
    }
    const sum = opinions.map(opinion => opinion.numericValue).reduce((total, nv) => total + nv, 0);
    return sum / opinions.length;
};