"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  file: z.any().optional(),
  contactTime: z.string().min(1, "Please select a contact time"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    // console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-6">
            Fill out the form below to connect with us!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" {...register("name")} placeholder="John Doe" />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                {...register("email")}
                placeholder="john@example.com"
                type="email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+1 234 567 890"
                type="tel"
              />
            </div>

            <div>
              <Label>Project Type</Label>
              <Select onValueChange={(value) => setValue("projectType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Project Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Renovation">Renovation</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && (
                <p className="text-red-500 text-xs">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Describe your project..."
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="file">Upload File (Optional)</Label>
              <Input id="file" type="file" {...register("file")} />
            </div>

            <div>
              <Label>Preferred Contact Time</Label>
              <Select onValueChange={(value) => setValue("contactTime", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Morning">Morning</SelectItem>
                  <SelectItem value="Afternoon">Afternoon</SelectItem>
                  <SelectItem value="Evening">Evening</SelectItem>
                </SelectContent>
              </Select>
              {errors.contactTime && (
                <p className="text-red-500 text-xs">
                  {errors.contactTime.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
