
import Image from 'next/image'
import Link from 'next/link'
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['600'] })
const balooNegrito = Baloo_2({ subsets: ['latin'], weight: ['800'] })

export default function CardTurma({serie, nivel, id}) {
  return (
    <>
        <Link href={`/class/${id}`}>
            <button className="mb-2 w-[260px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{ paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24 }}>{serie}</div>
                <div style={{ fontSize: 16 }}>{nivel}</div>
            </button>
        </Link>
    </>
  )
}
