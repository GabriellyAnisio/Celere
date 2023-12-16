import Image from "next/image";
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['500'] })

export default function StudentCard({children}){

    return(
        <>
            <div className=" bg-box h-42 rounded-2xl mt-12 flex flex-row">
                <div className='ml-6 flex items-center'>
                    <Image
                        src={'/icons/aluno.svg'} 
                        width={200}
                        height={200}
                    />
                </div>
                <div className={`ml-8 ${baloo.className} p-2 w-full`}>
                    <div className=' text-2xl font-bold'>
                        Rubens Cruz
                    </div>
                    <div className='text-lg'>
                        <div>
                        Turma: <strong>9º ano C</strong>
                        </div>
                    </div>
                    <div className='flex items-center w-64 justify-between'>
                        07hs - 12hs
                        <div className>
                        <Image
                            src={'/icons/week.svg'} 
                            width={170}
                            height={20}
                        />
                        </div>
                    </div>
                    <div className='flex w-60 justify-between'>
                        <div className='flex'>
                            <div className='bg-indigo p-2 rounded-full'>
                                <Image
                                src={'/icons/calendar.svg'} 
                                width={20}
                                height={20}
                                />
                            </div>
                            <div className='flex items-center ml-2'>
                                Frequência
                            </div>
                        </div>
                        
                        
                        <div className='bg-indigo p-2 rounded-full'>
                            <Image
                                src={'/icons/info.svg'} 
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}