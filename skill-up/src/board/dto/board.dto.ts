export interface BoardDto {
    // id: string;
    // title: string;
    content: string;
    status: BoardStatus;
}

export enum BoardStatus {
    PUBLIC='PUBLIC',
    PRIVATE='PRIVATE'
}