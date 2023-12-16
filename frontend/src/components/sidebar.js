
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='w-[12rem] bg-white flex justify-end'>
       <div className='w-[4rem] h-[35rem] bg-indigo mt-12 flex flex-col items-center justify-between py-10 rounded-3xl'>
        <Link href={'/'}>
            <div className='flex flex-col items-center hover:opacity-60'>
                <Image
                    src={'/icons/home.svg'} 
                    width={30}
                    height={30}
                />
                <div className='text-xs mt-1 text-center'>
                    Início
                </div>
            </div>
        </Link>

        <Link href={'/'}>
            <div className='flex flex-col items-center hover:opacity-60'>
                <Image
                    src={'/icons/calendar.svg'} 
                    width={30}
                    height={30}
                />
                <div className='text-xs mt-1 text-center'>
                    Datas
                </div>
            </div>
            
        </Link>

        <Link href={'/'}>
            <div className='flex flex-col items-center hover:opacity-60'>
                <Image
                src={'/icons/tag.svg'} 
                width={30}
                height={30}
                />
                <div className='text-xs mt-1 text-center'>
                    Avisos
                </div>
            </div>  
        </Link>

        <Link href={'/'}>
            <div className='flex flex-col items-center hover:opacity-60'>
                <Image
                src={'/icons/square.svg'} 
                width={30}
                height={30}
                />

                <div className='text-xs mt-1 text-center'>
                    Turmas
                </div>
            </div>
            
        </Link>

        <Link href={'/'}>
            <div className='flex flex-col items-center hover:opacity-60'>
                <Image
                src={'/icons/users.svg'} 
                width={30}
                height={30}
                />
                
                <div className='text-xs mt-1 text-center'>
                    Equipe
                </div>
            </div>

        </Link>

        <Link href={'/'}>
            <div className='flex flex-col items-center hover:opacity-60'>
                <Image
                src={'/icons/file.svg'} 
                width={30}
                height={30}
                />

                <div className='text-xs mt-1'>
                    Arquivos
                </div>
            </div>
            
        </Link>
    </div>
  </div>
  )
}
