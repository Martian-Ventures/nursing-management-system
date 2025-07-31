import {
  Heart,
  Shield,
  Users,
  Calendar,
  Activity,
  Baby,
  Stethoscope,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="shadow-lg bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">NMS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#technology"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Technology
            </Link>
            <Link
              href="#security"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Security
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-1 border hover-lift border-gray-300 text-gray-700 rounded font-semibold hover:bg-gray-50 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-1 bg-blue-600 hover-lift text-white rounded font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Healthcare Innovation
          </span>
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-primary block">Martian</span>
            Nursing Management System
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive healthcare management system focused on pregnant
            mothers and infant babies. Streamline workflows, improve patient
            outcomes, and enhance care coordination with our modern platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <button className="px-3 py-2 bg-primary text-background hover-lift rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Go to Dashboard
              </button>
            </Link>
            <button className="px-4 py-2 border-2 border-primary text-primary hover-lift rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg bg-transparent">
              Schedule Demo
            </button>
          </div>
          <div className="mt-12 h-[80vh] bg-muted-foreground rounded-lg shadow-md"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Care Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to provide exceptional maternal and neonatal
              care in one integrated platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Patient Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete profiles for mothers and babies with medical history,
                family information, and care coordination
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <Calendar className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Prenatal Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Appointment scheduling, vital signs tracking, pregnancy progress
                monitoring, and risk assessment
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <Activity className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Labor & Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time labor progress tracking, delivery planning, and
                postpartum care management
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <Baby className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Neonatal Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Newborn assessment, growth monitoring, feeding management, and
                immunization scheduling
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <Stethoscope className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Clinical Decision Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Evidence-based protocols, automated alerts, risk scoring, and
                standardized care pathways
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <BarChart3 className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Analytics & Reporting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Population health insights, quality metrics, research data, and
                compliance reporting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powered by cutting-edge technologies for reliability, scalability,
              and security
            </p>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              HIPAA Compliant & Secure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with healthcare security standards in mind, ensuring patient
              data protection and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Data Encryption
              </h3>
              <p className="text-gray-600 text-sm">
                End-to-end encryption at rest and in transit
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Role-Based Access
              </h3>
              <p className="text-gray-600 text-sm">
                Granular permissions and user role management
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Activity className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Audit Logging
              </h3>
              <p className="text-gray-600 text-sm">
                Complete audit trail for all data access
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Compliance Ready
              </h3>
              <p className="text-gray-600 text-sm">
                HIPAA, SOC 2, and healthcare standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join healthcare providers who trust NMS for better maternal and
            neonatal care outcomes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 transition-colors text-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg bg-transparent">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">NMS</span>
              </div>
              <p className="text-gray-400">
                Built with ❤️ for better maternal and neonatal care
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nursing Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
