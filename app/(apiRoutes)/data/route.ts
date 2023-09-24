import { NextResponse } from 'next/server'
import { data } from '../../../constants'
 
export async function GET(request: Request) {
    
  return NextResponse.json(data)
}