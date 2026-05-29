import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ ok: true, message: 'Auth endpoint placeholder. Napojte Supabase/Firebase/NextAuth.' });
}
