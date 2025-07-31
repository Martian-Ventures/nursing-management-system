export default function Patients() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Patients</h1>
          <p className="text-muted-foreground">
            Manage maternal and neonatal patient records
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search patients by name, ID, or phone..."
                className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <select className="px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">All Patients</option>
              <option value="pregnant">Pregnant Mothers</option>
              <option value="postpartum">Postpartum</option>
              <option value="neonatal">Neonatal</option>
            </select>
            <a
              href="/patients/new"
              className="bg-primary text-white px-6 py-2 rounded-lg hover-lift inline-flex items-center"
            >
              + Add Patient
            </a>
          </div>
        </div>

        {/* Patients List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Patient Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">👩</span>
              </div>
              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                Pregnant
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Sarah Johnson</h3>
            <p className="text-muted-foreground text-sm mb-2">ID: P-001234</p>
            <p className="text-muted-foreground text-sm mb-4">
              28 weeks • Due: Dec 15, 2024
            </p>
            <div className="flex space-x-2">
              <a
                href="/patients/1"
                className="text-primary text-sm font-medium"
              >
                View Details
              </a>
              <a
                href="/patients/1/appointments"
                className="text-secondary text-sm font-medium"
              >
                Appointments
              </a>
            </div>
          </div>

          {/* Patient Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-secondary text-xl">👶</span>
              </div>
              <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                Neonatal
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Baby Rodriguez</h3>
            <p className="text-muted-foreground text-sm mb-2">ID: N-005678</p>
            <p className="text-muted-foreground text-sm mb-4">
              2 weeks old • Born: Nov 1, 2024
            </p>
            <div className="flex space-x-2">
              <a
                href="/patients/2"
                className="text-primary text-sm font-medium"
              >
                View Details
              </a>
              <a
                href="/patients/2/growth"
                className="text-secondary text-sm font-medium"
              >
                Growth Chart
              </a>
            </div>
          </div>

          {/* Patient Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                <span className="text-warning text-xl">👩</span>
              </div>
              <span className="px-2 py-1 bg-warning/10 text-warning text-xs rounded-full">
                High Risk
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Maria Rodriguez</h3>
            <p className="text-muted-foreground text-sm mb-2">ID: P-009876</p>
            <p className="text-muted-foreground text-sm mb-4">
              32 weeks • Due: Dec 8, 2024
            </p>
            <div className="flex space-x-2">
              <a
                href="/patients/3"
                className="text-primary text-sm font-medium"
              >
                View Details
              </a>
              <a
                href="/patients/3/monitoring"
                className="text-warning text-sm font-medium"
              >
                Monitor
              </a>
            </div>
          </div>

          {/* Patient Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                <span className="text-success text-xl">👩</span>
              </div>
              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                Postpartum
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Emily Davis</h3>
            <p className="text-muted-foreground text-sm mb-2">ID: P-003456</p>
            <p className="text-muted-foreground text-sm mb-4">
              4 weeks postpartum • Delivered: Oct 15, 2024
            </p>
            <div className="flex space-x-2">
              <a
                href="/patients/4"
                className="text-primary text-sm font-medium"
              >
                View Details
              </a>
              <a
                href="/patients/4/recovery"
                className="text-secondary text-sm font-medium"
              >
                Recovery
              </a>
            </div>
          </div>

          {/* Patient Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">👩</span>
              </div>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                Pregnant
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Jennifer Wilson</h3>
            <p className="text-muted-foreground text-sm mb-2">ID: P-007890</p>
            <p className="text-muted-foreground text-sm mb-4">
              16 weeks • Due: Mar 20, 2025
            </p>
            <div className="flex space-x-2">
              <a
                href="/patients/5"
                className="text-primary text-sm font-medium"
              >
                View Details
              </a>
              <a
                href="/patients/5/appointments"
                className="text-secondary text-sm font-medium"
              >
                Appointments
              </a>
            </div>
          </div>

          {/* Patient Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-secondary text-xl">👶</span>
              </div>
              <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                Neonatal
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Baby Thompson</h3>
            <p className="text-muted-foreground text-sm mb-2">ID: N-001122</p>
            <p className="text-muted-foreground text-sm mb-4">
              1 week old • Born: Oct 25, 2024
            </p>
            <div className="flex space-x-2">
              <a
                href="/patients/6"
                className="text-primary text-sm font-medium"
              >
                View Details
              </a>
              <a
                href="/patients/6/feeding"
                className="text-secondary text-sm font-medium"
              >
                Feeding
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
