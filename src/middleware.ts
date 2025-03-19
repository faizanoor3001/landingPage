import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of allowed origins
const allowedOrigins = [
  'https://zoroenergy.com',
  'https://www.zoroenergy.com',
  'https://landingpage-git-master-faizanoor3001.vercel.app',
  'http://localhost:3000'
]

export function middleware(request: NextRequest) {
  // Get the origin from the request headers
  const origin = request.headers.get('origin') || ''
  
  // Check if the origin is allowed
  const isAllowedOrigin = allowedOrigins.includes(origin) || 
    origin.endsWith('.vercel.app') ||
    origin.endsWith('.zoroenergy.com')

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': isAllowedOrigin ? origin : allowedOrigins[0],
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400'
      }
    })
    return response
  }

  // Handle actual requests
  const response = NextResponse.next()
  
  // Add CORS headers
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  } else {
    response.headers.set('Access-Control-Allow-Origin', allowedOrigins[0])
  }
  
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  )

  return response
}

// Specify which routes should be handled by the middleware
export const config = {
  matcher: '/api/:path*'
} 