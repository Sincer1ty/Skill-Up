import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { BoardController } from "./board.controller";
import { BoardService } from "./board.service";
import { Board, BoardSchema } from "./schemas/board.schema";

@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }])],
      controllers: [BoardController],
      providers: [BoardService],
    //   exports :[BoardService],
})
export class BoardModule {}