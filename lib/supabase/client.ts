import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for TypeScript
export interface Patient {
  id: string;
  created_at: string;
  patient_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  phone: string;
  email: string;
  address: string;
  patient_type: "pregnant" | "postpartum" | "neonatal";
  pregnancy_week?: number;
  due_date?: string;
  risk_level: "low" | "medium" | "high";
  emergency_contact: string;
  emergency_phone: string;
  notes: string;
}

export interface Appointment {
  id: string;
  created_at: string;
  patient_id: string;
  appointment_date: string;
  appointment_time: string;
  appointment_type:
    | "prenatal"
    | "ultrasound"
    | "labor"
    | "neonatal"
    | "postpartum";
  doctor_name: string;
  notes: string;
  status: "scheduled" | "completed" | "cancelled" | "no_show";
}

export interface VitalSigns {
  id: string;
  created_at: string;
  patient_id: string;
  blood_pressure_systolic: number;
  blood_pressure_diastolic: number;
  weight: number;
  temperature: number;
  heart_rate: number;
  fetal_heart_rate?: number;
  notes: string;
}

export interface PregnancyRecord {
  id: string;
  created_at: string;
  patient_id: string;
  gestational_age: number;
  fundal_height: number;
  fetal_movement: string;
  ultrasound_findings: string;
  complications: string;
  medications: string;
  next_appointment: string;
}

export interface NeonatalRecord {
  id: string;
  created_at: string;
  patient_id: string;
  birth_date: string;
  birth_weight: number;
  birth_length: number;
  head_circumference: number;
  apgar_score: number;
  feeding_type: "breastfeeding" | "formula" | "mixed";
  current_weight: number;
  current_length: number;
  current_head_circumference: number;
  immunizations: string;
  developmental_milestones: string;
}
