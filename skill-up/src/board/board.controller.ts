import { Body, Controller, Get, Post } from "@nestjs/common";
import { BoardService } from "./board.service";
import { BoardDto } from "./dto/board.dto";

@Controller('boards')
export class BoardController {
    constructor(private boardService: BoardService) {}
    
    @Get()
    getHello(): string {
        return this.boardService.getHello();
    }

    @Get('all')
    async getAllBoards() {
        console.log("get all Boards");
        const boards = await this.boardService.getAllBoards(); // boards가 배열인지 확인
        console.log(boards); // 데이터 확인
        return boards;
        // return this.boardService.getAllBoards();
    }

    // @Post()
    // createBoard(
    //     @Body('content') content:string,
    // ): BoardDto {
    //     console.log("create Board");
    //     return this.boardService.createBoard(content);
    // }
    @Post()
    async createBoard(
        @Body() boardDto: BoardDto
    ) {
        console.log("create Board");
        return this.boardService.createBoard(boardDto);
    }

}