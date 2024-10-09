import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type BoardDocument = Board & Document;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })
export class Board{
    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    createdAt: Date;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    updatedAt: Date;

}

export const BoardSchema = SchemaFactory.createForClass(Board);