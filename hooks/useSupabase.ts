import { useState, useEffect } from 'react'
import * as supabaseUtils from '@/lib/supabase/utils'
import type { Patient, Appointment, VitalSigns, PregnancyRecord, NeonatalRecord } from '@/lib/supabase/client'

// Generic hook for data fetching
export function useSupabaseQuery<T>(
  queryFn: () => Promise<T[]>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await queryFn()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, dependencies)

  return { data, loading, error }
}

// Specific hooks for different data types
export function usePatients() {
  return useSupabaseQuery(supabaseUtils.getPatients)
}

export function usePatient(id: string) {
  const [data, setData] = useState<Patient | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await supabaseUtils.getPatientById(id)
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchPatient()
    }
  }, [id])

  return { data, loading, error }
}

export function useAppointments() {
  return useSupabaseQuery(supabaseUtils.getAppointments)
}

export function useAppointmentsByPatient(patientId: string) {
  return useSupabaseQuery(
    () => supabaseUtils.getAppointmentsByPatient(patientId),
    [patientId]
  )
}

export function useVitalSignsByPatient(patientId: string) {
  return useSupabaseQuery(
    () => supabaseUtils.getVitalSignsByPatient(patientId),
    [patientId]
  )
}

export function usePregnancyRecordsByPatient(patientId: string) {
  return useSupabaseQuery(
    () => supabaseUtils.getPregnancyRecordsByPatient(patientId),
    [patientId]
  )
}

export function useNeonatalRecordsByPatient(patientId: string) {
  return useSupabaseQuery(
    () => supabaseUtils.getNeonatalRecordsByPatient(patientId),
    [patientId]
  )
}

// Dashboard stats hook
export function useDashboardStats() {
  const [stats, setStats] = useState({
    totalPatients: 0,
    pregnantMothers: 0,
    neonatalCases: 0,
    todaysAppointments: 0
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await supabaseUtils.getDashboardStats()
        setStats(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return { stats, loading, error }
}

// Mutation hooks
export function useCreatePatient() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createPatient = async (patient: Omit<Patient, 'id' | 'created_at'>) => {
    try {
      setLoading(true)
      setError(null)
      const result = await supabaseUtils.createPatient(patient)
      return result
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { createPatient, loading, error }
}

export function useCreateAppointment() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createAppointment = async (appointment: Omit<Appointment, 'id' | 'created_at'>) => {
    try {
      setLoading(true)
      setError(null)
      const result = await supabaseUtils.createAppointment(appointment)
      return result
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { createAppointment, loading, error }
}

export function useCreateVitalSigns() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createVitalSigns = async (vitalSigns: Omit<VitalSigns, 'id' | 'created_at'>) => {
    try {
      setLoading(true)
      setError(null)
      const result = await supabaseUtils.createVitalSigns(vitalSigns)
      return result
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { createVitalSigns, loading, error }
} 