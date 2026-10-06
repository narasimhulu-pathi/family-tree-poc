export interface Service {
  slug: string
  title: string
  icon: string
  shortDescription: string
  fullDescription: string
  bullets: string[]
}

export const services: Service[] = [
  {
    slug: 'pediatrics-neonatology',
    title: 'Pediatrics & Neonatology',
    icon: 'Baby',
    shortDescription:
      'Comprehensive healthcare for newborns, infants, children, and adolescents by an experienced Pediatrician & Neonatologist.',
    fullDescription:
      'Our Pediatrics & Neonatology department provides comprehensive healthcare for newborns, infants, children, and adolescents, ensuring healthy growth and development at every stage. Led by Dr. Shravan Krishna Reddy P, an experienced Pediatrician and Neonatologist with over 9 years of expertise, we cover everything from routine check-ups and vaccinations to managing complex neonatal conditions. We bring the best of clinical excellence — trained at Rainbow, Manipal, Aster, and Ovum hospitals — into a setting that feels familiar and safe for your family.',
    bullets: [
      'Routine check-ups, growth monitoring, and vaccinations',
      'Specialized neonatal care including premature and critically ill infants',
      'Evidence-based pediatric nutrition guidance',
      'Parental counseling for growth milestones and preventive care',
      'Management of respiratory, infectious, and developmental conditions',
    ],
  },
  {
    slug: 'general-medicine',
    title: 'General Medicine',
    icon: 'Stethoscope',
    shortDescription:
      'Holistic adult healthcare including chronic disease management, preventive care, and nutrition counseling.',
    fullDescription:
      'Our General Medicine department offers comprehensive adult healthcare services, from diagnosing and managing a broad spectrum of health conditions to chronic illness management and preventive care. Dr. Harshita Reddy G brings extensive clinical experience and a patient-centric, compassionate approach that ensures every adult receives individualized care tailored to their specific needs.',
    bullets: [
      'Comprehensive primary care for adults of all ages',
      'Diagnosis and management of chronic illnesses',
      'Preventive health strategies and lifestyle counseling',
      'Nutritional guidance for improved patient outcomes',
      'Holistic patient education and follow-up care',
    ],
  },
  {
    slug: 'obstetrics-gynaecology',
    title: 'Obstetrics & Gynaecology',
    icon: 'Heart',
    shortDescription:
      "Complete women's health services — prenatal care, safe deliveries, and gynaecological treatments.",
    fullDescription:
      "Our Obstetrics & Gynaecology department provides complete women's healthcare across all life stages. From prenatal care and safe deliveries to gynaecological consultations and treatments, our specialists ensure every woman receives compassionate, evidence-based care in a supportive environment.",
    bullets: [
      'Antenatal and postnatal care',
      'High-risk pregnancy management',
      'Normal and complicated deliveries',
      'Gynaecological consultations and treatments',
      'Adolescent and menopausal health care',
    ],
  },
  {
    slug: 'fertility-infertility',
    title: 'Fertility & Infertility Services',
    icon: 'Sprout',
    shortDescription:
      'Personalized fertility evaluations and treatments to help families achieve their dream of parenthood.',
    fullDescription:
      "Our Fertility & Infertility Services offer hope and expert guidance to couples on their journey to parenthood. We provide thorough evaluations, evidence-based treatments, and compassionate support through every step of the process. Dr. Rachana Reddy's expertise ensures couples receive personalized care with the best possible outcomes.",
    bullets: [
      'Comprehensive fertility evaluation for couples',
      'Hormonal and ovulation assessments',
      'Intrauterine insemination (IUI)',
      'Counseling and emotional support',
      'Coordination with advanced fertility centers when required',
    ],
  },
  {
    slug: 'vaccination-clinic',
    title: 'Vaccination Clinic',
    icon: 'Syringe',
    shortDescription:
      'Complete immunization programs for children and adults — all vaccines available in one convenient location.',
    fullDescription:
      'Our Vaccination Clinic ensures your family stays protected with timely, complete immunizations. We follow the Indian Academy of Pediatrics (IAP) immunization schedule for children and offer travel vaccines and adult booster doses. Our trained nurses explain each vaccine clearly, making the experience comfortable for children and parents alike.',
    bullets: [
      'Full IAP schedule for newborns, infants, and children',
      'Travel and adult booster vaccinations',
      'Flu (influenza) vaccines for all ages from 6 months to seniors',
      'Safe, clean, child-friendly vaccination environment',
      'Vaccination records and reminders provided',
    ],
  },
  {
    slug: 'laboratory-services',
    title: 'Laboratory Services',
    icon: 'FlaskConical',
    shortDescription:
      'Accurate, fast diagnostic tests — blood work, urine analysis, cultures, and more — all under one roof.',
    fullDescription:
      "Our Laboratory Services provide accurate, timely diagnostic support for all clinical departments. With modern equipment and trained lab technicians, we deliver reliable results that guide precise treatment decisions. From routine blood panels to specialized tests, everything is available in-house so you don't need to travel elsewhere.",
    bullets: [
      'Complete blood counts, metabolic panels, and lipid profiles',
      'Urine, stool, and culture analyses',
      'Thyroid, hormonal, and diabetes monitoring tests',
      'Rapid tests for infections (Dengue, Malaria, COVID)',
      'Results available same day for most routine tests',
    ],
  },
  {
    slug: 'pharmacy',
    title: '24/7 Pharmacy',
    icon: 'Pill',
    shortDescription:
      'Round-the-clock pharmacy stocked with prescribed medications, ensuring you never wait for essential medicines.',
    fullDescription:
      'Our 24/7 in-house Pharmacy ensures that essential medicines are always available when you need them — day or night. Our knowledgeable pharmacy staff dispenses prescriptions accurately, suggests alternatives when specific medicines are unavailable, and provides guidance on dosage and storage. No more late-night searches for a pharmacy.',
    bullets: [
      'Open 24 hours, 7 days a week',
      'Comprehensive stock of prescribed and OTC medicines',
      'Knowledgeable staff who suggest safe alternatives',
      'Pediatric and adult formulations available',
      'Prescription verification and dosage counseling',
    ],
  },
  {
    slug: 'inpatient-care',
    title: 'Inpatient Care',
    icon: 'BedDouble',
    shortDescription:
      'Comfortable, well-equipped inpatient facilities with round-the-clock nursing care for patients who need admission.',
    fullDescription:
      'Our Inpatient Care facility provides a safe, comfortable environment for patients who require admission and close monitoring. With 24/7 nursing care, modern monitoring equipment, and a dedicated medical team, we ensure every admitted patient receives the continuous attention they need for a smooth and speedy recovery.',
    bullets: [
      'Well-equipped patient rooms with continuous monitoring',
      '24/7 nursing care and physician rounds',
      'Dedicated neonatal care unit for newborns',
      'ICU support for critical cases',
      'Hygienic, family-friendly environment',
    ],
  },
]
