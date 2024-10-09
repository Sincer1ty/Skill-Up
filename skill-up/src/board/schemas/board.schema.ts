import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { BoardStatus } from "../dto/board.dto";

export type BoardDocument = Board & Document;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })
export class Board{
    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    createdAt: Date;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    updatedAt: Date;

    @Prop()
    content: string;

    @Prop({default: BoardStatus.PUBLIC})
    status: BoardStatus;
}

export const BoardSchema = SchemaFactory.createForClass(Board);