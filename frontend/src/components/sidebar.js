
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='w-56 bg-white flex justify-end'>
       <div className='w-20 h-[35rem] bg-indigo mt-4 p-4 flex flex-col items-center gap-6 rounded-3xl'>
        <Link href={'/'}>
        <div className='p-2'>
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
        <div className='p-2 flex justify-center'>
            <Image
            src={'/icons/calendar.svg'} 
            width={30}
            height={30}
            />
        </div>
        <div className='text-xs mt-1 text-center'>
            Datas
        </div>
        </Link>

        <Link href={'/'}>
        <div className='p-2 flex justify-center'>
            <Image
            src={'/icons/tag.svg'} 
            width={30}
            height={30}
            />
        </div>
        <div className='text-xs mt-1 text-center'>
            Avisos
        </div>
        </Link>

        <Link href={'/'}>
        <div className='p-2 flex justify-center'>
            <Image
            src={'/icons/square.svg'} 
            width={30}
            height={30}
            />
        </div>
        <div className='text-xs mt-1 text-center'>
            Turmas
        </div>
        </Link>

        <Link href={'/'}>
        <div className='p-2 flex justify-center'>
            <Image
            src={'/icons/users.svg'} 
            width={30}
            height={30}
            />
        </div>
        <div className='text-xs mt-1 text-center'>
            Equipe
        </div>
        </Link>

        <Link href={'/'}>
        <div className='p-2 flex justify-center'>
            <Image
            src={'/icons/file.svg'} 
            width={30}
            height={30}
            />
        </div>
        <div className='text-xs mt-1'>
            Arquivos
        </div>
        </Link>
    </div>
  </div>
  )
}
