import Image from 'next/image'
import ClassList from '@/components/student/classList'
import StudentCard from '@/components/student/card'


export default function Student() {
  return (
    <main
      className={`min-h-screen grid grid-cols-2`}
    >
      <div className="ml-10 flex flex-col mr-12">
        
        <StudentCard />

        <div className='bg-box w-[17rem] mt-5 mb-5 text-center p-2 rounded-full hover:opacity-70 hover:cursor-pointer'>
          Ver todas as  turmas
        </div>

        <div className='bg-box flex flex-col justify-evenly h-[22rem] rounded-2xl'>
          <ClassList />
          <ClassList />
          <ClassList />
          <ClassList />
        </div>

      </div>


      <div className="mr-36 mt-12">
        <div className='mt-5 text-xl font-bold'>
          Últimos bilhetes sobre Rubens
        </div>
        <div className='flex justify-between mt-4 '>
          <div className='bg-light-blue w-[11rem] h-[3.75rem] flex items-center justify-center rounded-2xl hover:bg-light-blue-active hover:cursor-pointer'>
            + Bilhete
          </div>
          <div className='bg-light-green w-[11rem] h-[3.75rem] flex items-center justify-center rounded-2xl hover:bg-green-300 hover:cursor-pointer'>
            Ver tudo
          </div>
        </div>
        
        <div className='bg-box mt-10 p-4 rounded-2xl'>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </div>

        <div className='bg-box mt-10 p-4 rounded-2xl'>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </div>
      </div>
    </main>
  )
}
