import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

const SignupPage = () => {
  return (
    <form
      className={cn(
        "flex flex-col gap-6 rounded-lg border bg-card p-6 shadow-md shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800"
      )}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Sign up to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to create a new account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" placeholder="John Deo" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Choose password</Label>
          <Input
            id="password"
            type="password"
            placeholder="m@example.com"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/sign-in" className="underline underline-offset-4">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default SignupPage;
