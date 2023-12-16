import Image from "next/image"


export default function ClassList({ children }) {
  return (
    <>
       <div className='h-[5rem] w-full p-4 flex justify-between items-center hover:opacity-75 hover:cursor-pointer'>
            <div>
              <div className='font-bold'>
                Química
              </div>
              <div>
                Professor nome
              </div>
            </div>
            <div className='flex'>
              <div className='bg-indigo flex p-2 rounded-lg'>
                XX
                <Image
                  src={'/icons/arrow-up.svg'} 
                  width={20}
                  height={20}
                  className='ml-1'
                  />
              </div>
              <div className='bg-indigo flex p-2 rounded-lg ml-2'>
                XX
                <Image
                  src={'/icons/file-text.svg'} 
                  width={20}
                  height={20}
                  className='ml-1'
                  />
              </div>
            </div>
          </div>
    </>
  )
}