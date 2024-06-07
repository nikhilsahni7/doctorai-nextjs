"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Login() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement actual form submission logic
    console.log(values);
    router.push("/landingPage");
  }

  const handleSocialSignIn = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: "/landingPage" });
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-gray-900">
      <div className="space-y-6 w-[500px] flex flex-col shadow-xl p-8 rounded-md bg-gray-800">
        <h1 className="font-bold text-3xl text-center text-white">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your.email@example.com"
                      {...field}
                      className="border-gray-600 bg-gray-700 text-white"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      className="border-gray-600 bg-gray-700 text-white"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Login
            </Button>
          </form>
        </Form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button
            type="button"
            className="w-full bg-red-500 hover:bg-[#1a1e21] text-white"
            onClick={() => handleSocialSignIn("google")}
          >
            Google
          </Button>
          <Button
            type="button"
            className="w-full bg-[#3d5a77] hover:bg-[#1a1e21] text-white"
            onClick={() => handleSocialSignIn("github")}
          >
            GitHub
          </Button>
        </div>

        <div className="text-center mt-4">
          <span className="text-gray-400">Don't have an account? </span>
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700 font-bold"
            onClick={() => router.push("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
}
