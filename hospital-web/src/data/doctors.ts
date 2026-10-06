export interface Doctor {
  name: string
  photo: string
  specialty: string
  qualifications: string
  bio: string
  featured: boolean
}

export const doctors: Doctor[] = [
  {
    name: 'Dr. Shravan Krishna Reddy P',
    photo: '/images/doctors/dr-shravan.jpeg',
    specialty: 'Pediatrician & Neonatologist',
    qualifications: 'MBBS, MD (Pediatrics), Fellowship in Perinatal Medicine',
    bio: "With 9 years of clinical excellence, Dr. Shravan brings expertise from leading hospitals including Rainbow Children's Hospital, Manipal, Aster, and Ovum. He specializes in comprehensive pediatric care, neonatology, pediatric nutrition, and parental counseling.",
    featured: true,
  },
  {
    name: 'Dr. Harshita Reddy G',
    photo: '/images/doctors/dr-harshita.jpeg',
    specialty: 'Physician – General Medicine',
    qualifications: 'MBBS, MD (Internal Medicine)',
    bio: 'Dr. Harshita brings extensive experience in adult healthcare from top-tier institutions. Known for her compassionate, patient-centric approach, she specializes in chronic disease management, preventive care, and individualized treatment planning.',
    featured: true,
  },
  {
    name: 'Dr. Rachana Reddy',
    photo: '/images/doctors/dr-rachana.jpeg',
    specialty: 'Obstetrician, Gynaecologist & Fertility Specialist',
    qualifications: 'MBBS, MS (Obstetrics & Gynaecology)',
    bio: "Dr. Rachana is dedicated to women's health across all life stages — from prenatal care and safe deliveries to fertility evaluations and gynaecological treatments. Her patient-first philosophy ensures every woman feels heard and well cared for.",
    featured: true,
  },
]
