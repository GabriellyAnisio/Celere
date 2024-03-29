import Link from 'next/link'
import Image from 'next/image'
import { Baloo_2 } from 'next/font/google'
import TeamCard from '@/components/team/card'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['700'] })

export const getServerSideProps = async (ctx) => {
    
  const resGes = await fetch(`http://127.0.0.1:8000/gestor_detail_list/`, { 
      method: "GET",
      cache: 'no-store', 
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
  })

  const resProf = await fetch(`http://127.0.0.1:8000/professor_detail_list/`, { 
      method: "GET",
      cache: 'no-store', 
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
  })

  const gestores = await resGes.json()
  const professores = await resProf.json()


  return {
    props: {
      professores: professores,
      gestores: gestores
    }
  }
}

export default function Team({professores, gestores}) {
  return (
    <main
      className={`min-h-screen flex flex-col ml-10 mr-28`}
    >
      <div className='mt-12 flex justify-between h-40 w-[70rem]'>
        <div className='flex '>
          <div className='bg-box rounded-full w-11 h-11 flex items-center justify-center p-2'>
            <Image
              src={'/icons/users.svg'} 
              width={30}
              height={30}
            />
          </div>
          <div className={`ml-5 text-4xl font-extrabold ${baloo.className}`}>Equipe</div>

          <Image
              src={'/icons/team.svg'} 
              width={162}
              height={162}
            />
        </div>
        <div className='place-self-end '>
          <Link href={"/team/register"}>
            <div className='bg-light-blue w-40 h-14 rounded-2xl flex justify-center items-center font-bold hover:bg-light-blue-active'>
              + Adicionar
            </div>
          </Link>
        </div>
      </div>

      <div className='h-[9rem]'>
        <div className={`text-2xl font-extrabold ${baloo.className} mb-2`}>Coordenação</div>

        <div className='bg-box w-[70rem] h-20 rounded-2xl flex items-center px-4 scroll-content' style={{ overflowX: 'scroll'}}>
          {
            gestores.map(gestor => {
              return (
                <TeamCard name={gestor.name} funct={"Coordenação"} />
              )
            })
          }
          
        </div>

      </div>

      <div className='h-[16rem]'>
        <div className={`text-2xl font-extrabold ${baloo.className} mb-4`}>Professores</div>
        <div className='bg-box w-[70rem] h-[14rem] rounded-2xl  flex py-4 px-4 flex-wrap scroll-content '  style={{ overflowX: 'scroll'}} >
        {
            professores.map(professor => {
              return (
                <TeamCard name={professor.name} funct={"Professor"} isProfessor={true} disciplina={professor.disciplinas[0] != undefined ? professor.disciplinas[0].name : "" } />
              )
            })
          }

        </div>
        {/* <div className='bg-box w-full rounded-2xl rounded-t-none flex py-4 px-4'>
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />

        </div> */}
      </div>
    </main>
  )
}
