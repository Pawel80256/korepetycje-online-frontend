import {OpinionDto} from "../../dtos/models/Opinion";
import {ParagraphDto} from "../../dtos/models/ParagraphDto";

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
    if (opinions === undefined || !opinions || opinions.length === 0) {
        return 0;
    }
    const sum = opinions.map(opinion => opinion.numericValue).reduce((total, nv) => total + nv, 0);
    return sum / opinions.length;
};

export const sortParagraphsByOrder = (paragraphs: ParagraphDto[]) => {
    return paragraphs.sort((a: ParagraphDto, b: ParagraphDto) => a.orderr - b.orderr);
}

function isMinOrder(paragraphs: ParagraphDto[], orderr: number): boolean {
    return orderr === Math.min(...paragraphs.map(p => p.orderr));
}

function isMaxOrder(paragraphs: ParagraphDto[], orderr: number): boolean {
    return orderr === Math.max(...paragraphs.map(p => p.orderr));
}