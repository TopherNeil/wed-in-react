"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
});

export function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Card className="w-[400px] p-[20px]">
        <Form {...form}>
            <form className="flex-col gap-2" onSubmit={form.handleSubmit((data) => console.log(data))}>
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                    <Input placeholder="Enter name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input type="email" placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                    <Input type="password" placeholder="Enter password" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    
                )}
                />
                {/* Add similar FormField components for email and password */}
                <button type="submit">Register</button>
            </form>
        </Form>
    </Card>
    
  );
}