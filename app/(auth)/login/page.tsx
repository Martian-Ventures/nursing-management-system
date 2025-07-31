import SigninForm from "@/components/parts/forms/SigninForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-sm w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-primary text-2xl">🏥</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Nursing Management System
          </h1>
          <p className="text-muted-foreground">
            Sign in to access patient records and care management
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white border-2 border-muted p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-center">Sign In</h2>
          <SigninForm />
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-muted">
            <p className="text-xs text-muted-foreground text-center">
              This system is for authorized healthcare personnel only.
              <br />
              All access is logged and monitored for patient safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
