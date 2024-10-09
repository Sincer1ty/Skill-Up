import { Body, Controller, Get, Post } from "@nestjs/common";
import { BoardService } from "./board.service";
import { BoardDto } from "./dto/board.dto";
import { title } from "process";

@Controller('boards')
export class BoardController {
    constructor(private boardService: BoardService) {}
    
    @Get()
    getHello(): string {
        return this.boardService.getHello();
    }

    @Get('all')
    getAllBoards():BoardDto[]{
        return this.boardService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body('title') title:string,
        @Body('content') content:string,
    ): BoardDto {
        return this.boardService.createBoard(title, content);
    }
}