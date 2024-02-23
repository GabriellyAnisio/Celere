import Image from "next/image";
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['500'] })

export default function TeamCard({children}){

    return(
        <>
         <div className='w-44 h-16 flex rounded-full pl-1 hover:bg-indigo'>
             <Image 
              src={"/icons/gestor.svg"}
              height={50}
              width={50}
             />
             <div className='flex flex-col ml-2'>
                <div className='text-sm font-extrabold'>
                  Amanda
                </div>
                <div className=' text-sm'>
                  Professor
                </div>
                <div className='rounded-full border-black border-2 text-xs text-center '>
                  História
                </div>
             </div>
          </div>
        </>
    )

}