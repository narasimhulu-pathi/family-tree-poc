import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-8xl font-heading font-bold text-primary/20">404</p>
      <h1 className="mt-4 text-2xl font-heading font-bold text-text-base">Page not found</h1>
      <p className="mt-2 text-text-muted">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
