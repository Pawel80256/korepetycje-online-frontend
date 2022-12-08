export interface ParagraphDto{
    id:string,
    title:string,
    content:string,
    orderr:number
}

export const initialParagraphDto:ParagraphDto = {
    id:'',
    title:'',
    content:'',
    orderr:0
}