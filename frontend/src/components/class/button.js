import { Baloo_2 } from 'next/font/google'
import Link from 'next/link'

const baloo = Baloo_2({subsets:['latin'], weight: ['600']})
const balooNegrito = Baloo_2({subsets:['latin'], weight: ['800']})

export default function ClassButton({title, subtitle, id}){

    return(
        <>
             <Link href={`/class/${id}`}>
                <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                    <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>{title}</div>
                    <div style={{ fontSize: 16, fontWeight: '300' }}>{subtitle}</div>
                </button>
             </Link>
        </>
    )

}