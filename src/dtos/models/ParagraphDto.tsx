export interface ParagraphDto {
    id: string,
    title: string,
    content: string,
    orderr: number
}

export interface AddParagraphRequestDto {
    title: string,
    content: string
}

export const initialParagraphDto: ParagraphDto = {
    id: '',
    title: '',
    content: '',
    orderr: 0
}