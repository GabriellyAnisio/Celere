
import Image from 'next/image'
import Link from 'next/link'
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['600'] })
const balooNegrito = Baloo_2({ subsets: ['latin'], weight: ['800'] })

export default function NewsCard({title, onClick}) {
  return (
    <>
       <button className="w-[288px] h-[112px] bg-light-blue text-black-300 hover:bg-light-blue-active mb-4" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }} onClick={onClick}>
            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 32}}>{title}</div>
            {/* <div className={`${baloo.className}`} style={{ fontSize: 24}}>Lorem ipsum</div> */}
        </button>
    </>
  )
}
