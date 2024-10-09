import { Injectable } from "@nestjs/common";
import { BoardDto, BoardStatus } from "./dto/board.dto";

@Injectable()
export class BoardService {
    private boards: BoardDto[]=[];

    getHello(): string {
        return 'Hello Board!';
    }

    createBoard(title: string, content: string): BoardDto {
        const board: BoardDto = {
            title,
            content,
            status: BoardStatus.PUBLIC
        };
        this.boards.push(board);
        return board;
    }
    
    getAllBoards(): BoardDto[] {
        return this.boards;
    }
}