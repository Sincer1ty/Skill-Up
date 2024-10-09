import { Injectable } from "@nestjs/common";
import { BoardDto, BoardStatus } from "./dto/board.dto";
import { Board, BoardDocument } from "./schemas/board.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class BoardService {
    private boards: BoardDto[]=[];

    constructor(@InjectModel(Board.name) private boardModel: Model<BoardDocument>) {}

    getHello(): string {
        return 'Hello Board!';
    }

    // createBoard(content: string): BoardDto {
    //     const board: BoardDto = {
    //         content,
    //         status: BoardStatus.PUBLIC
    //     };
    //     this.boards.push(board);
    //     return board;
    // }

    async createBoard(boardDto:BoardDto): Promise<Board> {
        const board = new this.boardModel(boardDto);
        return await board.save(); // await을 사용하여 비동기적으로 처리
    }

    getAllBoards(): BoardDto[] {
        return this.boards;
    }
}