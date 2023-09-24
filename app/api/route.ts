import { NextResponse } from 'next/server'
import { domains } from '../../constants'
 
export async function GET(request: Request) {
 
  return NextResponse.json(domains)
}