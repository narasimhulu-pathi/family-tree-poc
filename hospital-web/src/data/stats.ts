export interface Stat {
  label: string
  value: number
  suffix: string
}

export const stats: Stat[] = [
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Expert Doctors', value: 4, suffix: '+' },
  { label: 'Families Served', value: 15000, suffix: '+' },
  { label: 'Satisfied Patients', value: 25000, suffix: '+' },
]
