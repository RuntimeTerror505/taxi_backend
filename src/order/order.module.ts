import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { OrderService } from "../shcemas/order.service";
import { MongooseModule } from '@nestjs/mongoose';
import { SportSchema } from "src/shcemas/sport.schema";
import { BaggageSchema } from "src/shcemas/baggage.schema";
import { PetsSchema } from "src/shcemas/pets.schema";
import { SeatsSchema } from "src/shcemas/seats.schema";
import { OrderSchema } from "src/shcemas/order.schema";


@Module({
    imports: [MongooseModule.forFeature([
        { name: 'order', schema: OrderSchema },
        { name: 'sport', schema: SportSchema },
        { name: 'baggage', schema: BaggageSchema },
        { name: 'pets', schema: PetsSchema }, 
        { name: 'seats', schema: SeatsSchema }
    ])],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule {}