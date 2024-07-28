"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { date, z } from "zod";

import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { formSchema } from "@/utils/schema";
import { createTicket } from "@/ServerActions/tickets";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/Components/ui/popover"
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/Components/ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import LoadingSpinner from "@/Components/ui/shared/LoadingSpinner";


// Type for form data
type FormData = z.infer<typeof formSchema>;

// Form submit handler

export default function ProfileForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const onSubmit: SubmitHandler<FormData> = async (data) => {
        // "use server"
        setLoading(true)
        try{
            await createTicket(data)
            setLoading(false)
            router.push('/inventory');
        }catch(e){
            console.log(e)
        }
    };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      eventDate: new Date(),
      purchaseDate: new Date(),
      purchasePrice: 0,
      quantity: 0,
      viagogoLink: "",
      isSold: false
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/5 mx-auto">
        {/* Event Name Field */}
        <FormField
          name="eventName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Name</FormLabel>
              <FormControl>
                <Input placeholder="Event Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event Date Field */}
        <FormField
          control={form.control}
          name="purchaseDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date Of Purchase</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Purchase Date Field */}
        <FormField
          control={form.control}
          name="eventDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Event Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Purchase Price Field */}
        <FormField
          name="purchasePrice"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Purchase Price</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Quantity Field */}
        <FormField
          name="quantity"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Viagogo Link Field */}
        <FormField
          name="viagogoLink"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Viagogo Link</FormLabel>
              <FormControl>
                <Input type="url" placeholder="http://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit Button */}
        <Button type="submit">{loading? <LoadingSpinner/> : "Submit"}</Button>
      </form>
    </Form>
  );
}
