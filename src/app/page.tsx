'use client'

import { useRouter } from 'next/navigation';


// ----------------------------------------------------------------------

export default function HomePage() {
  const router = useRouter()

  return router.push('auth/jwt/login/?returnTo=%2Fdashboard%2F');
}
