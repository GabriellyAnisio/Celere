import Image from "next/image";
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['500'] })

export default function TeamCard({name, isProfessor, disciplina, funct }){

    return(
        <>
         <div className='w-48 h-16 flex rounded-full pl-2 hover:bg-indigo m-4 hover:cursor-pointer'>
             <Image 
              src={"/icons/gestor.svg"}
              height={50}
              width={50}
             />
             <div className='flex flex-col ml-2 justify-center'>
                <div className='text-xs font-extrabold'>
                  {name}
                </div>
                <div className=' text-xs'>
                  {funct}
                </div>
                {isProfessor && disciplina != "" ? <div className='rounded-full border-black border-2 text-xs text-center'>
                  {disciplina} </div>: <></>
                }
             </div>
          </div>
        </>
    )

}