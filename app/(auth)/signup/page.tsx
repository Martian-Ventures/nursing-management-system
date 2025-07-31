"use client";

import SignupForm from "@/components/parts/forms/SignupForm";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-sm w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-primary text-2xl">🏥</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Staff Registration
          </h1>
          <p className="text-muted-foreground">
            Create your account to access the nursing management system
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-white p-8 border-2 border-muted rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Create Account
          </h2>

          <SignupForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-muted">
            <p className="text-xs text-muted-foreground text-center">
              By creating an account, you agree to our healthcare privacy
              policies.
              <br />
              All registrations require administrator approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
