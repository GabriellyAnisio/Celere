import Link from 'next/link'
import Image from 'next/image'
import { Baloo_2 } from 'next/font/google'
import TeamCard from '@/components/team/card'
import Input from '@/components/input'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['700'] })

export default function Team() {
  return (
    <main
      className={`min-h-screen flex flex-col ml-10 mr-28`}
    >
      <div className='mt-12 flex justify-between mb-4'>
        <div className='flex '>
          <div className='bg-box rounded-full w-11 h-11 flex items-center justify-center p-2'>
            <Image
              src={'/icons/at-sign.svg'} 
              width={30}
              height={30}
            />
          </div>
          <div className={`ml-5 text-4xl font-extrabold ${baloo.className}`}>Novo Aluno</div>
        </div>
      </div>

      <div className='flex mb-6'>
        <Input width={30} title={"Nome do aluno(a)"} placeholder={"Nome do aluno(a)"} />
        <Input width={10} title={"Matrícula"} placeholder={"XXXXXXXXX"}/>

      </div>

      <div className='flex mb-6'>
        <Input width={25} title={"Data de Nascimento"} placeholder={"DD/MM/YYYY"} />
        <Input width={15} title={"CEP"} placeholder={"XXXXX-XX"}/>
        <Input width={15} title={"Turma"} placeholder={"Pesquise a turma"}/>
      </div>
    
      <div className='flex mb-6'>
        <Input width={30} title={"Nome do Responsável"} placeholder={"Nome do Responsável"} />
        <Input width={20} title={"Parentesco"} placeholder={"Parentesco"}/>
      </div>

      <div className='flex mb-6'>
        <Input width={25} title={"CPF do Responsável"} placeholder={"___.___.___-__"} />
        <Input width={25} title={"Data de Nascimento"} placeholder={"DD/MM/YYYY"}/>
      </div>

      <div className='flex mb-6'>
        <div className='flex'>
            <Input width={25} title={"Telefone do Responsável"} placeholder={"(XX)XXXXX-XXXX"} />
            <Input width={25} title={"E-mail do Responsável"} placeholder={"xxxx@xx.xxx"}/>
        </div>
        <div className='flex flex-col'>
            <button className='bg-box p-1 w-[17rem] rounded-full hover:bg-black hover:text-white' onClick={() =>{}}>
                Limpar
            </button>
            <Link href={"/student/new"} className='bg-indigo p-1 w-[17rem] rounded-full text-center mt-2 hover:bg-black hover:text-white'>
                <div className=''>
                    Finalizar
                </div>
            </Link>
        </div>
      </div>

    </main>
  )
}
