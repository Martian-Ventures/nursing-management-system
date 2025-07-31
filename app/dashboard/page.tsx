import Popup from "@/components/layout/Popup";
import GenericLineChart from "@/components/parts/graphs/LineGraph";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import {
  ActivityIcon,
  Bell,
  Flashlight,
  FlashlightIcon,
  Plus,
  Search,
  User,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8  pt-0 sticky top-0 bg-background z-50">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <Popup
                align="vertical"
                trigger={
                  <Button className="text-background">
                    <ActivityIcon className="w-5 h-5 mr-2" />
                    Quick actions
                  </Button>
                }
              >
                <div className="bg-white min-w-60 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                  <div className="space-y-3">
                    <a
                      href="/patients/new"
                      className="block p-3 bg-primary/5 rounded-lg hover-lift text-primary font-medium"
                    >
                      + Add New Patient
                    </a>
                    <a
                      href="/appointments/new"
                      className="block p-3 bg-secondary/5 rounded-lg hover-lift text-secondary font-medium"
                    >
                      + Schedule Appointment
                    </a>
                    <a
                      href="/prenatal/checkup"
                      className="block p-3 bg-success/5 rounded-lg hover-lift text-success font-medium"
                    >
                      Prenatal Checkup
                    </a>
                    <a
                      href="/labor/monitoring"
                      className="block p-3 bg-warning/5 rounded-lg hover-lift text-warning font-medium"
                    >
                      Labor Monitoring
                    </a>
                  </div>
                </div>
              </Popup>

              <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <User />
              </div>
            </div>
          </div>
          <p className="text-muted-foreground pb-5">
            Overview of maternal and neonatal care activities
          </p>
          <div className="shadow-md w-full h-1"></div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Patients
                </p>
                <p className="text-2xl font-bold text-primary">124</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">👥</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Pregnant Mothers
                </p>
                <p className="text-2xl font-bold text-success">89</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                <span className="text-success text-xl">🤰</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Today's Appointments
                </p>
                <p className="text-2xl font-bold text-warning">12</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                <span className="text-warning text-xl">📅</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Neonatal Cases
                </p>
                <p className="text-2xl font-bold text-secondary">35</p>
              </div>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-secondary text-xl">👶</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg col-span-2 shadow-md">
            <h1 className="text-xl font-semibold mb-4">
              Babies and mothers over the past months
            </h1>
            <GenericLineChart />
          </div>

          <div className="col-span-3 flex gap-5">
            <div className="bg-white flex-1 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">
                    Patient Sarah Johnson - Prenatal checkup completed
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">
                    New patient Maria Rodriguez registered
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span className="text-sm">
                    Appointment reminder sent to 5 patients
                  </span>
                </div>
              </div>
            </div>
            {/* Alerts */}
            <div className="bg-white flex-1 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Important Alerts</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-error/10 rounded-lg border border-error/20">
                  <span className="text-error">⚠️</span>
                  <span className="text-sm">
                    High-risk pregnancy case requires immediate attention
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <span className="text-warning">📋</span>
                  <span className="text-sm">
                    3 patients have overdue prenatal appointments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
