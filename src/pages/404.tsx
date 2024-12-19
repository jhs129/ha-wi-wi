import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">The page you're looking for doesn't exist.</p>
        <Link 
          href="/" 
          className="text-secondary hover:underline font-christmas text-bold"
        >
          Return to homepage
        </Link>
      </div>
    </div>
  )
} 