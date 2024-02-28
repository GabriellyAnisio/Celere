import Image from "next/image";
import { Baloo_2, Poppins } from 'next/font/google'
import Link from "next/link";
import StudentButton from "@/components/class/studentButton";

const baloo = Baloo_2({ subsets: ['latin'], weight: ['500'] })
const balooNegrito = Baloo_2({ subsets: ['latin'], weight: ['800'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const getServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    
    const resTurma = await fetch(`http://127.0.0.1:8000/turma_detail/${id}`, { 
        method: "GET",
        cache: 'no-store', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })

    const turmas = await resTurma.json()
  
  
    return {
      props: {
        turmas: turmas,
      }
    }
  }

export default function classesList({turmas}) {

    return (
        <div className={`flex flex-col ml-8 ${baloo.className}`} style={{ justifyContent: 'flex-start', display: 'inline-flex' }}>

            {/* TÍTULO */}
            <div className="flex flex-row">
                <div className="mt-2">
                    <Image src={"/icons/classes.svg"} width={44} height={44} />
                </div>
                <div className={`ml-4 ${balooNegrito.className}`} style={{ height: 23, color: '#020318', fontSize: 40, fontWeight: '700' }}>
                    9° ano A
                </div>
            </div>

            {/* ÁREA DOS DOCENTES */}
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div className={`mt-4 ${balooNegrito.className}`} style={{ color: 'black', fontSize: 24 }}>
                        Docentes
                    </div>

                    <button className={`mt-3 w-[184px] h-[60px] bg-light-blue hover:bg-light-blue-active`} style={{ fontSize: 20, fontWeight: '500', width: '184', height: '60', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex' }}>
                        <Image src={"/icons/plus.svg"} width={24} height={24} />
                        Docente
                    </button>

                    {/* SCROLL DE DOCENTES */}
                    <div className="mt-3 scrollable-content" style={{ overflow: 'scroll', width: 228, height: 363, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                        <button className='w-[184px] h-[64px] px-1 flex mt-3 bg-box rounded-full hover:bg-indigo'>
                            <Image
                                className="mt-1"
                                src={'/icons/gestor.svg'}
                                width={56}
                                height={56}
                            />
                            <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                <div style={{ fontSize: 16 }}>Professor</div>
                                <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                </div>
                            </div>
                        </button>
                        <button className='w-[184px] h-[64px] px-1 flex mt-3 bg-box rounded-full hover:bg-indigo'>
                            <Image
                                className="mt-1"
                                src={'/icons/perfil.svg'}
                                width={56}
                                height={56}
                            />
                            <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                <div style={{ fontSize: 16 }}>Professor</div>
                                <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                </div>
                            </div>
                        </button>
                        <button className='w-[184px] h-[64px] px-1 flex mt-3 bg-box rounded-full hover:bg-indigo'>
                            <Image
                                className="mt-1"
                                src={'/icons/gestor.svg'}
                                width={56}
                                height={56}
                            />
                            <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                <div style={{ fontSize: 16 }}>Professor</div>
                                <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                </div>
                            </div>
                        </button>
                        <button className='w-[184px] h-[64px] px-1 flex mt-3 bg-box rounded-full hover:bg-indigo'>
                            <Image
                                className="mt-1"
                                src={'/icons/gestor.svg'}
                                width={56}
                                height={56}
                            />
                            <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                <div style={{ fontSize: 16 }}>Professor</div>
                                <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                </div>
                            </div>
                        </button>
                        <button className='w-[184px] h-[64px] px-1 flex mt-3 bg-box rounded-full hover:bg-indigo'>
                            <Image
                                className="mt-1"
                                src={'/icons/gestor.svg'}
                                width={56}
                                height={56}
                            />
                            <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                <div style={{ fontSize: 16 }}>Professor</div>
                                <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                </div>
                            </div>
                        </button>
                        <button className='w-[184px] h-[64px] px-1 flex mt-3 bg-box rounded-full hover:bg-indigo'>
                            <Image
                                className="mt-1"
                                src={'/icons/gestor.svg'}
                                width={56}
                                height={56}
                            />
                            <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                <div style={{ fontSize: 16 }}>Professor</div>
                                <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                </div>
                            </div>
                        </button>
                    </div>

                </div>

                {/* ÁREA DOS DISCENTES */}
                <div className="flex flex-col ml-16">

                    <div className={`mt-4 ${balooNegrito.className}`} style={{ color: 'black', fontSize: 24 }}>
                        Discentes
                    </div>

                    <div className="flex flex-row">
                        <Link href={"/student/register"}>
                            <button className={`mt-3 w-[184px] h-[60px] bg-light-blue hover:bg-light-blue-active`} style={{ fontSize: 20, fontWeight: '500', width: '184', height: '55', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap:6, display: 'inline-flex' }}>
                                <Image src={"/icons/plus.svg"} width={24} height={24} />
                                Discente
                            </button>
                        </Link>

                        {/* ALFABETO */}
                        <div className={`ml-12 mt-3 text-black ${poppins.className}`} style={{ flexDirection: 'column', gap: 5, display: 'inline-flex', fontSize: 16, fontWeight: '400' }}>
                            <div style={{ gap: 4, display: 'inline-flex' }}>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    A</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    B</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    C</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    D</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    E</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    F</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    G</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    H</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    I</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    J</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    K</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    L</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    M</button>
                            </div>
                            <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    N</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    O</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    P</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    Q</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    R</button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    S </button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    T </button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    U </button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    V </button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    W </button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    X </button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    Y </button>
                                <button style={{ width: 28, height: 28, background: '#BCF0DD', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    Z </button>
                            </div>
                        </div>

                    </div>

                    <div className={` mt-3 w-[644px] h-[392px] bg-box ${poppins.className} text-black`} style={{ padding: 12, background: '#F1F3FB', borderRadius: 30, flexDirection: 'column', gap: 10 }}>
                        <div className="scroll-content ml-1 h-[365px] flex flex-wrap " style={{ overflowY: 'scroll', gap: 15}}>
                            {turmas.alunos.map(aluno =>{
                                return (
                                    <StudentButton name={aluno.name} id={aluno.registration_number} />
                                )
                            })}
                            <StudentButton name={"Aluno"} id={12123} />
                            <StudentButton name={"Aluno"} id={12123} />
                            <StudentButton name={"Aluno"} id={12123} />
                            <StudentButton name={"Aluno"} id={12123} />
                            <StudentButton name={"Aluno"} id={12123} />
                            <StudentButton name={"Aluno"} id={12123} />
                            <StudentButton name={"Aluno"} id={12123} />
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}