export default function Appointments() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Appointments
          </h1>
          <p className="text-muted-foreground">
            Schedule and manage patient appointments
          </p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="/appointments/new"
              className="bg-primary text-white px-6 py-2 rounded-lg hover-lift inline-flex items-center"
            >
              + New Appointment
            </a>
            <select className="px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <select className="px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">All Types</option>
              <option value="prenatal">Prenatal Checkup</option>
              <option value="ultrasound">Ultrasound</option>
              <option value="labor">Labor Monitoring</option>
              <option value="neonatal">Neonatal Checkup</option>
            </select>
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Today's Appointments</h2>
          <div className="space-y-4">
            {/* Appointment 1 */}
            <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl">👩</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-muted-foreground text-sm">
                    Prenatal Checkup - 28 weeks
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">9:00 AM</p>
                <p className="text-muted-foreground text-sm">Dr. Smith</p>
              </div>
            </div>

            {/* Appointment 2 */}
            <div className="flex items-center justify-between p-4 bg-warning/5 rounded-lg border border-warning/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                  <span className="text-warning text-xl">👩</span>
                </div>
                <div>
                  <h3 className="font-semibold">Maria Rodriguez</h3>
                  <p className="text-muted-foreground text-sm">
                    High Risk Monitoring - 32 weeks
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-warning">10:30 AM</p>
                <p className="text-muted-foreground text-sm">Dr. Johnson</p>
              </div>
            </div>

            {/* Appointment 3 */}
            <div className="flex items-center justify-between p-4 bg-success/5 rounded-lg border border-success/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <span className="text-success text-xl">👶</span>
                </div>
                <div>
                  <h3 className="font-semibold">Baby Rodriguez</h3>
                  <p className="text-muted-foreground text-sm">
                    Neonatal Checkup - 2 weeks
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-success">2:00 PM</p>
                <p className="text-muted-foreground text-sm">Dr. Davis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Tomorrow</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-primary">👩</span>
                  <div>
                    <p className="font-medium">Jennifer Wilson</p>
                    <p className="text-sm text-muted-foreground">
                      Prenatal Checkup
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">11:00 AM</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-secondary">👶</span>
                  <div>
                    <p className="font-medium">Baby Thompson</p>
                    <p className="text-sm text-muted-foreground">
                      Growth Check
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">3:30 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">This Week</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-warning">👩</span>
                  <div>
                    <p className="font-medium">Emily Davis</p>
                    <p className="text-sm text-muted-foreground">
                      Postpartum Check
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  Wed 2:00 PM
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-primary">👩</span>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Ultrasound</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  Thu 9:30 AM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
