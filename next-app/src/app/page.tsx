'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const now = new Date()
    const currentHour = now.getHours()
    console.log(currentHour)
    if (22 <= currentHour || currentHour < 5) {
      // May peaceful slumber be upon thee.
      router.push('https://note.com/minerva_owl/n/nba7b0afef16c')
    } else {
      router.push('https://note.com/minerva_owl/n/nf58e9c59b1e9')
    }
  }, [router])

  return (
    <>
    </>
  )
}
