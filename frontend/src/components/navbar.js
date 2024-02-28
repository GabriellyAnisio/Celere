
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
     <div className='flex flex-row min-w-full h-16 justify-center gap-[62rem] items-center pt-2 bg-white text-black'>
            <Link href={'/'}>
                <div className='p-2 ml-24'>
                    <Image
                        src={'/icons/logo.svg'} 
                        width={150}
                        height={44}
                    />
                </div>
            </Link>
            <Link href={'/'}>
                <div className='p-2 px-4 flex mr-16  bg-box rounded-full hover:bg-black hover:text-white'>
                    <Image
                        src={'/icons/gestor.svg'} 
                        width={35}
                        height={35}
                    />
                    <div className='m-2 text-xs font-bold'>Amanda</div>
                </div>
            </Link>

     </div>
  )
}
