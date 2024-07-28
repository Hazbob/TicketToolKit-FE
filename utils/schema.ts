import { z } from "zod";

export const formSchema = z.object({
    eventName: z.string().min(1).max(50),
    eventDate: z.date(),
    purchaseDate: z.date(),
    purchasePrice: z.coerce.number({
        required_error: "Purchase price is required",
        invalid_type_error: "Purchase price must be a number",
    }).positive(),
    quantity: z.coerce.number({
        required_error: "Quantity required",
        invalid_type_error: "Quantity must be a number"
    }).positive(),
    viagogoLink: z.string(),
    isSold: z.boolean()
});
