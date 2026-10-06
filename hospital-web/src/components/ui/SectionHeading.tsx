interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle, center = false }: SectionHeadingProps) {
  const align = center ? 'text-center' : ''
  return (
    <div className={`mb-10 ${align}`}>
      {eyebrow && (
        <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-text-muted text-lg max-w-2xl ${center ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  )
}
