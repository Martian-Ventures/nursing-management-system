import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    role: "nurse" as "nurse" | "doctor" | "admin" | "support",
    department: "",
    licenseNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Validate password strength
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    try {
      // Create user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            role: formData.role,
            department: formData.department,
            license_number: formData.licenseNumber,
          },
        },
      });

      if (authError) {
        setError(authError.message);
      } else {
        // Create staff profile in database
        const { error: profileError } = await supabase
          .from("staff_profiles")
          .insert({
            user_id: authData.user?.id,
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            role: formData.role,
            department: formData.department,
            license_number: formData.licenseNumber,
            status: "pending_approval",
          });

        if (profileError) {
          setError(
            "Account created but profile setup failed. Please contact administrator."
          );
        } else {
          // Redirect to login with success message
          router.push(
            "/auth/login?message=Account created successfully. Please check your email for verification."
          );
        }
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {error && (
        <div className="mb-4 p-3 bg-error/10 border border-error/20 rounded-lg">
          <p className="text-error text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSignup} className="space-y-4">
        {/* Personal Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-foreground mb-2"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-2 text-sm py-1 border border-foreground rounded-lg focus:outline-none focus:border-primary"
              placeholder="First name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-2 text-sm py-1 border border-foreground rounded-lg focus:outline-none focus:border-primary"
              placeholder="Last name"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-2 text-sm py-1 border border-foreground rounded-lg focus:outline-none focus:border-primary"
            placeholder="Enter your email"
          />
        </div>

        {/* Professional Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
              className="w-full px-2 text-sm py-1 border border-foreground rounded-lg focus:outline-none focus:border-primary"
            >
              <option value="nurse">Nurse</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Administrator</option>
              <option value="support">Support Staff</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Department
            </label>
            <input
              id="department"
              name="department"
              type="text"
              value={formData.department}
              onChange={handleInputChange}
              required
              className="w-full px-2 text-sm py-1 border border-foreground rounded-lg focus:outline-none focus:border-primary"
              placeholder="Department"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="licenseNumber"
            className="block text-sm font-medium text-foreground mb-2"
          >
            License/ID Number
          </label>
          <input
            id="licenseNumber"
            name="licenseNumber"
            type="text"
            value={formData.licenseNumber}
            onChange={handleInputChange}
            required
            className="w-full px-2 text-sm py-1 border border-foreground rounded-lg focus:outline-none focus:border-primary"
            placeholder="Professional license or ID number"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full px-2 text-sm py-1 border border-foreground rounded-lg focus:outline-none focus:border-primary"
            placeholder="Create a password"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Must be at least 8 characters long
          </p>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            className="w-full px-2 text-sm py-1 border border-foreground rounded-lg focus:outline-none focus:border-primary"
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-1 px-4 rounded-lg hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </>
  );
}
