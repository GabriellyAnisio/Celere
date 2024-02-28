
import Image from 'next/image'
import Link from 'next/link'
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['600'] })
const balooNegrito = Baloo_2({ subsets: ['latin'], weight: ['800'] })

export default function CardProfessor({name}) {
  return (
    <>
        <button className='w-[210px] px-1 flex mt-3 rounded-full'>
                <Image
                  className="mt-1"
                  src={'/icons/gestor.svg'}
                  width={48}
                  height={48}
                />
                <div className="flex flex-col ml-3 w-[190] h-[33]">
                  <div className={`${balooNegrito.className}`} style={{ fontSize: 16 }}>{name}</div>
                  <div style={{ fontSize: 16 }}>Professor</div>
                </div>
              </button>
    </>
  )
}
