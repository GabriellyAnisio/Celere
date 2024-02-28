
import Image from 'next/image'
import Link from 'next/link'
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['600'] })
const balooNegrito = Baloo_2({ subsets: ['latin'], weight: ['800'] })

export default function NewsCard({title, subtitle}) {
  return (
    <>
        <Link href={"/seeNews"}>
            <div className="bg-light-blue hover:bg-light-blue-active" style={{ width: 500, height: 140, paddingLeft: 24, paddingRight: 24, paddingTop: 20, paddingBottom: 20, borderRadius: 30, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', display: 'flex' }}>
                <div className={`mb-1 ${balooNegrito.className}`} style={{  height: 33, fontSize: 32 }}>{title}</div>
                {/* <div className={`${baloo.className}`} style={{ width: 336, height: 26, fontSize: 24 }}>{subtitle}</div> */}
            </div>
        </Link>
    </>
  )
}
