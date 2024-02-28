import { Baloo_2 } from 'next/font/google'
import Link from 'next/link'
import Image from "next/image";

const baloo = Baloo_2({subsets:['latin'], weight: ['600']})
const balooNegrito = Baloo_2({subsets:['latin'], weight: ['800']})

export default function StudentButton({name, id}){

    return(
        <>
             <Link href={`/student/${id}`}>
                <button className="w-[293px] h-[48px] bg-indigo hover:bg-indigo-active" style={{ borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 18, display: 'inline-flex' }}>
                    <Image src={"/icons/at-sign.svg"} width={24} height={24} style={{position: 'relative'}} />
                    <div style={{  height: 20, fontSize: 16, fontWeight: '400'}}>{name}</div>
                    <Image src={"/icons/chevron-right.svg"} width={24} height={24} style={{position: 'relative'}} />
                </button>
             </Link>
        </>
    )

}