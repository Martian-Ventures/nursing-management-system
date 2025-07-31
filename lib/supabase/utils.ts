import { supabase } from './client'
import type { Patient, Appointment, VitalSigns, PregnancyRecord, NeonatalRecord } from './client'

// Patient operations
export async function getPatients() {
  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as Patient[]
}

export async function getPatientById(id: string) {
  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data as Patient
}

export async function createPatient(patient: Omit<Patient, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('patients')
    .insert(patient)
    .select()
    .single()
  
  if (error) throw error
  return data as Patient
}

export async function updatePatient(id: string, updates: Partial<Patient>) {
  const { data, error } = await supabase
    .from('patients')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  
  if (error) throw error
  return data as Patient
}

export async function deletePatient(id: string) {
  const { error } = await supabase
    .from('patients')
    .delete()
    .eq('id', id)
  
  if (error) throw error
}

// Appointment operations
export async function getAppointments() {
  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .order('appointment_date', { ascending: true })
  
  if (error) throw error
  return data as Appointment[]
}

export async function getAppointmentsByPatient(patientId: string) {
  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .eq('patient_id', patientId)
    .order('appointment_date', { ascending: true })
  
  if (error) throw error
  return data as Appointment[]
}

export async function createAppointment(appointment: Omit<Appointment, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('appointments')
    .insert(appointment)
    .select()
    .single()
  
  if (error) throw error
  return data as Appointment
}

export async function updateAppointment(id: string, updates: Partial<Appointment>) {
  const { data, error } = await supabase
    .from('appointments')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  
  if (error) throw error
  return data as Appointment
}

// Vital signs operations
export async function getVitalSignsByPatient(patientId: string) {
  const { data, error } = await supabase
    .from('vital_signs')
    .select('*')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as VitalSigns[]
}

export async function createVitalSigns(vitalSigns: Omit<VitalSigns, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('vital_signs')
    .insert(vitalSigns)
    .select()
    .single()
  
  if (error) throw error
  return data as VitalSigns
}

// Pregnancy records operations
export async function getPregnancyRecordsByPatient(patientId: string) {
  const { data, error } = await supabase
    .from('pregnancy_records')
    .select('*')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as PregnancyRecord[]
}

export async function createPregnancyRecord(record: Omit<PregnancyRecord, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('pregnancy_records')
    .insert(record)
    .select()
    .single()
  
  if (error) throw error
  return data as PregnancyRecord
}

// Neonatal records operations
export async function getNeonatalRecordsByPatient(patientId: string) {
  const { data, error } = await supabase
    .from('neonatal_records')
    .select('*')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as NeonatalRecord[]
}

export async function createNeonatalRecord(record: Omit<NeonatalRecord, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('neonatal_records')
    .insert(record)
    .select()
    .single()
  
  if (error) throw error
  return data as NeonatalRecord
}

// Dashboard statistics
export async function getDashboardStats() {
  const { data: patients, error: patientsError } = await supabase
    .from('patients')
    .select('patient_type')
  
  if (patientsError) throw patientsError
  
  const { data: appointments, error: appointmentsError } = await supabase
    .from('appointments')
    .select('status')
    .gte('appointment_date', new Date().toISOString().split('T')[0])
    .lte('appointment_date', new Date().toISOString().split('T')[0])
  
  if (appointmentsError) throw appointmentsError
  
  const stats = {
    totalPatients: patients?.length || 0,
    pregnantMothers: patients?.filter(p => p.patient_type === 'pregnant').length || 0,
    neonatalCases: patients?.filter(p => p.patient_type === 'neonatal').length || 0,
    todaysAppointments: appointments?.length || 0
  }
  
  return stats
} 