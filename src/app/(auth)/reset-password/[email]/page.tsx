import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

const ResetPasswordPage = () => {
  return (
    <form
      className={cn(
        "flex flex-col gap-6 rounded-lg border bg-card p-6 shadow-md shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800"
      )}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Change your account password</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="token">One Time Password(OTP)</Label>
          <Input id="token" placeholder="123456" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="newPassword">New password</Label>
          <Input
            id="newPassword"
            type="password"
            placeholder="********"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="retypePassword">Re-type password</Label>
          <Input
            id="retypePassword"
            type="password"
            placeholder="********"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordPage;
