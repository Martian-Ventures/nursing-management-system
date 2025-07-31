# Nursing Management System (NMS)

A comprehensive healthcare management system focused on pregnant mothers and infant babies, built with Next.js and Supabase.

## 🎯 Project Overview

The Nursing Management System (NMS) is designed to streamline healthcare workflows for maternal and neonatal care. The system provides comprehensive patient management, clinical decision support, and care coordination tools specifically tailored for obstetric and pediatric nursing.

## 🏥 Core Features

### Patient Management

- **Mother Profiles**: Complete medical history, pregnancy details, risk factors
- **Baby Profiles**: Birth records, growth tracking, immunization schedules
- **Family Information**: Contact details, emergency contacts, support system

### Prenatal Care Module

- **Appointment Scheduling**: Regular check-ups, ultrasound appointments
- **Vital Signs Tracking**: Blood pressure, weight, fetal heart rate
- **Pregnancy Progress**: Gestational age, fetal development milestones
- **Risk Assessment**: High-risk pregnancy identification and monitoring
- **Nutrition Tracking**: Dietary recommendations and compliance

### Labor & Delivery Management

- **Labor Progress Tracking**: Contraction monitoring, cervical dilation
- **Delivery Planning**: Birth plan, emergency protocols
- **Postpartum Care**: Immediate post-delivery monitoring
- **Complication Management**: Emergency protocols and interventions

### Neonatal Care Module

- **Newborn Assessment**: APGAR scores, physical examination
- **Growth Monitoring**: Weight, length, head circumference tracking
- **Feeding Management**: Breastfeeding support, formula tracking
- **Immunization Schedule**: Vaccination tracking and reminders
- **Developmental Milestones**: Motor, cognitive, social development

### Clinical Decision Support

- **Evidence-based Protocols**: Standardized care guidelines
- **Alert System**: Critical values, missed appointments, overdue tests
- **Risk Scoring**: Automated risk assessment algorithms
- **Clinical Pathways**: Step-by-step care protocols

### Communication & Education

- **Patient Portal**: Mothers can view their records, schedule appointments
- **Educational Resources**: Pregnancy and baby care information
- **SMS/Email Reminders**: Appointment and medication reminders
- **Telemedicine Integration**: Remote consultations

### Reporting & Analytics

- **Population Health**: Maternal and infant health outcomes
- **Quality Metrics**: Care quality indicators and benchmarks
- **Research Data**: De-identified data for research purposes
- **Compliance Reporting**: Regulatory and accreditation requirements

## 🛠️ Technology Stack

### Frontend

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Tailwind-based component library
- **React Hook Form**: Form management
- **Zod**: Schema validation

### Backend

- **Supabase**: Backend-as-a-Service
  - PostgreSQL database
  - Real-time subscriptions
  - Row Level Security (RLS)
  - Authentication
  - Storage for medical images
  - Edge Functions for serverless logic

### Development Tools

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **TypeScript**: Type safety

## 📁 Project Structure

```
nms/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── dashboard/         # Main dashboard
│   │   ├── patients/          # Patient management
│   │   ├── appointments/      # Appointment scheduling
│   │   ├── prenatal/          # Prenatal care
│   │   ├── labor/             # Labor & delivery
│   │   ├── neonatal/          # Neonatal care
│   │   └── reports/           # Analytics & reporting
│   ├── components/            # Reusable components
│   │   ├── ui/               # Custom UI components
│   │   ├── forms/            # Form components
│   │   ├── charts/           # Data visualization
│   │   └── layout/           # Layout components
│   ├── lib/                  # Utility functions
│   │   ├── supabase/         # Supabase client & utilities
│   │   ├── utils/            # Helper functions
│   │   └── validations/      # Zod schemas
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript type definitions
│   └── styles/               # Global styles
├── public/                   # Static assets
├── supabase/                 # Supabase configuration
│   ├── migrations/           # Database migrations
│   └── functions/            # Edge functions
└── docs/                     # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nms
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Set up Supabase**

   ```bash
   npm install -g supabase
   supabase login
   supabase init
   ```

5. **Run database migrations**

   ```bash
   supabase db push
   ```

6. **Start the development server**

   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

### Core Tables

- `patients` - Mother and baby profiles
- `appointments` - Scheduled visits and procedures
- `vital_signs` - Clinical measurements
- `pregnancy_records` - Prenatal care data
- `labor_records` - Labor and delivery information
- `neonatal_records` - Baby care data
- `immunizations` - Vaccination records
- `medications` - Prescribed medications
- `documents` - Medical documents and images

## 🔐 Security & Compliance

### HIPAA Compliance

- Row Level Security (RLS) policies
- Data encryption at rest and in transit
- Audit logging for all data access
- Secure authentication and authorization

### User Roles

- **Administrators**: System management and configuration
- **Nurses**: Patient care and record management
- **Doctors**: Clinical decision making and oversight
- **Patients**: Limited access to own records
- **Support Staff**: Appointment scheduling and basic operations

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
```

## 📦 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

### Other Platforms

- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@nms.com or join our Slack channel.

## 🔄 Roadmap

### Phase 1: Core Patient Management (Q1 2024)

- [x] Project setup and architecture
- [ ] Patient registration and profiles
- [ ] Basic appointment scheduling
- [ ] Simple vital signs tracking

### Phase 2: Clinical Workflows (Q2 2024)

- [ ] Prenatal care protocols
- [ ] Labor and delivery tracking
- [ ] Neonatal assessment tools
- [ ] Clinical decision support

### Phase 3: Advanced Features (Q3 2024)

- [ ] Patient portal
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Telemedicine integration

### Phase 4: Enterprise Features (Q4 2024)

- [ ] Multi-tenant support
- [ ] Advanced reporting
- [ ] API for third-party integrations
- [ ] AI-powered insights

---

**Built with ❤️ for better maternal and neonatal care**
