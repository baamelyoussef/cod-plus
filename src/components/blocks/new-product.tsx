"use client"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"

const formSchema = z.object({
    name: z.string().min(2, {
      message: "required field",
    }),
    website: z.string().min(2, {
      message: "required field",
    }),
    sourcing_link: z.string().min(2, {
      message: "required field",
    }),
    creative_link: z.string().min(2, {
      message: "required field",
    }),
    gross_price: z.string().min(2, {
      message: "required field",
    }),
    selling_price: z.string().min(2, {
      message: "required field",
    }),
})
const NewProduct = () => {
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            website: "",
            sourcing_link: "",
            creative_link: "",
            gross_price: "",
            selling_price: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <div className="flex justify-center items-center ">

      <Form {...form} >

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <ScrollArea className="h-[300px] w-[750px] rounded-md border p-6 flex">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="creative_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Creative link</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sourcing_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gross_price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gross price</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="selling_price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Selling price</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
      </ScrollArea>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default NewProduct