import {
  Baby,
  Calendar,
  FileText,
  Heart,
  LayoutDashboardIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import React, { ComponentProps } from "react";

export default function DashboardLayout({ children }: ComponentProps<"div">) {
  return (
    <div className="w-full flex gap-2">
      <aside className="w-80 bg-white shadow-md">
        <div className=" sticky top-0 left-0">
          <div className="p-6">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-600">Martian NMS</h1>
            </Link>
          </div>
          <nav className="mt-6">
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover-lift text-blue-600 bg-blue-50"
            >
              <LayoutDashboardIcon className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover-lift text-gray-600 hover:bg-gray-50"
            >
              <Users className="w-5 h-5 mr-3" />
              Patients
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover-lift text-gray-600 hover:bg-gray-50"
            >
              <Baby className="w-5 h-5 mr-3" />
              Neonatal
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover-lift text-gray-600 hover:bg-gray-50"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Appointments
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover-lift text-gray-600 hover:bg-gray-50"
            >
              <Heart className="w-5 h-5 mr-3" />
              Vitals
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover-lift text-gray-600 hover:bg-gray-50"
            >
              <FileText className="w-5 h-5 mr-3" />
              Notes
            </Link>
          </nav>
        </div>
      </aside>
      <div className="w-full">{children}</div>
    </div>
  );
}
