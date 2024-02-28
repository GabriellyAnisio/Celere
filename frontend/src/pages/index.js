import Image from "next/image";
import { Baloo_2, Poppins } from 'next/font/google';
import Link from "next/link";
import { useEffect, useState } from "react";
import NewsCard from "@/components/newsCard";
import CardTurma from "@/components/cardTurma";
import CardProfessor from "@/components/cardProfessor";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Textarea,} from "@nextui-org/react";

const baloo = Baloo_2({ subsets: ['latin'], weight: ['600'] })
const balooNegrito = Baloo_2({ subsets: ['latin'], weight: ['800'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['600'] })

export const getServerSideProps = async (ctx) => {
    
  const resTurmas = await fetch(`http://127.0.0.1:8000/turma_detail_list`, { 
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

  const resAvisos = await fetch(`http://127.0.0.1:8000/comunicado`, { 
    method: "GET",
    cache: 'no-store', 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
  })

  const turmas = await resTurmas.json()
  const professores = await resProf.json()
  const avisos = await resAvisos.json()


  return {
    props: {
      turmas: turmas,
      professores: professores,
      avisos: avisos
    }
  }
}

export default function Home({turmas, professores, avisos}) {
  const [actualNews, setActualNews] = useState(0)
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [newAviso, setNewAviso] = useState(0)

  avisos.sort(function (a, b) {return b.id - a.id});
  const [avisosSorted, setAvisosSorted] = useState(avisos)

  const onSetNews = (value) => {
    if(!(actualNews + value > avisos.length - 1) && !(actualNews + value < 0)) {
      setActualNews(actualNews + value)
    }
    
  }

  const sendNews = async(onClose) =>{
    const res = await fetch(`http://127.0.0.1:8000/comunicado/create`, { 
        method: "post",
        cache: 'no-store', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          text: text,
          end_date: "2024-03-05T00:00:00Z",
          author: 2,
          reader: [1,2,3,4,5],
          tags: "Urg"
        }) 
    })

    if(!res.ok){
      return console.log("Erro de envio de aviso")
    }

    setNewAviso(+1)
    onClose();

  }

  useEffect(()=>{
    const getAvisos = async() => {
      const resAvisos = await fetch(`http://127.0.0.1:8000/comunicado`, { 
      method: "GET",
      cache: 'no-store', 
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      })
      const news = await resAvisos.json()

      news.sort(function (a, b) {return b.id - a.id});
      setAvisosSorted(news)
    }
    getAvisos();
  }, [newAviso])

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <div className={`flex flex-col ml-8 ${baloo.className}`} style={{ justifyContent: 'flex-start', display: 'inline-flex' }}>

        <div className="flex flex-row">
          <div className="flex flex-col mt-8">
            <div className={` ${balooNegrito.className}`} style={{ width: 456, height: 46, color: '#020318', fontSize: 60 }}>
              Olá, Amanda
            </div>
            <div className={`flex flex-row mt-4 ${balooNegrito.className}`} style={{ width: 421, height: 30, fontSize: 32 }}>
              <div className='mr-2 text-black' > modo </div>
              <div className='text-indigo' > c </div>
              <div className='text-light-blue'> e </div>
              <div className='text-light-green'> l </div>
              <div className='text-indigo'> e </div>
              <div className='text-light-blue'> r </div>
              <div className='text-light-green'> e </div>
              <div className='ml-2 text-black'> ativado </div>
            </div>

            <div className={`mt-6 text-black`} style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
              <NewsCard title={avisosSorted[actualNews].title} subtitle={"b"} />
            </div>

            <div className='flex flex-row mt-4 ml-6'>
              <button className='bg-box hover:bg-indigo' style={{ width: 40, height: 40, borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }} onClick={() => onSetNews(-1)}>
                <Image src={"/icons/arrow-left.svg"} width={16} height={16} />
              </button>
              <button className='bg-box hover:bg-indigo ml-10' style={{ width: 40, height: 40, borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }} onClick={() => onSetNews(1)}>
                <Image src={"/icons/arrow-right.svg"} width={16} height={16} />
              </button>

              <button className={`ml-[4.5rem] w-[276px] h-[37px]  bg-box text-black ${baloo.className} hover:bg-black hover:text-box`} style={{ padding: 10, borderRadius: 40, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }} onClick={onOpen}>
                <div style={{ textAlign: 'center', fontSize: 20 }}>Lançar aviso</div>
              </button>
            </div>

            <div className="flex flex-row ">
              <div className="flex flex-col w-[244px] h-[246px] mt-6 mr-8">
                <CardTurma serie={"1º ano A"} nivel={"Ensino Médio"} id={1} />
                <CardTurma serie={"1º ano B"} nivel={"Ensino Médio"} id={2} />
                <CardTurma serie={"2º ano A"} nivel={"Ensino Médio"} id={3} />


                <Link href={"/class"}>
                  <button className={` ${baloo.className} text-black`} style={{ width: 80, height: 30, fontSize: 20, display: 'flex-start' }}>
                    Ver mais
                  </button>
                </Link>
              </div>

              <div className="flex flex-col bg-box px-1 mt-3 ml-4" style={{ width: 210, height: 252, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex', borderRadius: 30 }}>
              <CardProfessor name={professores[0].name}/>
              <CardProfessor name={professores[1].name}/>
              <CardProfessor name={professores[2].name}/>
                

                <Link href={"/team"}>
                  <button className={`${baloo.className} text-black`} style={{ width: 180, height: 30, fontSize: 20, justifyContent: 'center', alignItems: 'center', display: 'center' }}>
                    Ver mais
                  </button>
                </Link>
              </div>
            </div>

          </div>

          <div className={`flex flex-col bg-box ml-10 mt-12 ${poppins.className}`} style={{ width: 482 , height: 553, borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
            <div className="flex flex-col" style={{ paddingLeft: 20, paddingRight: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 9.70 }}>
              <div style={{ gap: 16, display: 'inline-flex' }}>
                <div style={{ width: 48.52, height: 24.26, textAlign: 'center', color: '#020318', fontSize: 19.41 }}>Dom</div>
                <div style={{ width: 44.88, height: 24.26, textAlign: 'center', color: '#020318', fontSize: 19.41 }}>Seg</div>
                <div style={{ width: 44.88, height: 24.26, textAlign: 'center', color: '#020318', fontSize: 19.41 }}>Ter</div>
                <div style={{ width: 44.88, height: 24.26, textAlign: 'center', color: '#020318', fontSize: 19.41 }}>Qua</div>
                <div style={{ width: 44.88, height: 24.26, textAlign: 'center', color: '#020318', fontSize: 19.41 }}>Qui</div>
                <div style={{ width: 44.88, height: 24.26, textAlign: 'center', color: '#020318', fontSize: 19.41 }}>Sex</div>
                <div style={{ width: 44.88, height: 24.26, textAlign: 'center', color: '#020318', fontSize: 19.41 }}>Sáb</div>
              </div>
              <div style={{ gap: 24.26, display: 'inline-flex' }}>
                <div style={{ flexDirection: 'column', gap: 9.70, display: 'inline-flex' }}>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#A6A6A8', fontSize: 19.41}}>30</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>6</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>13</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>20</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>27</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9.70, display: 'inline-flex' }}>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#A6A6A8', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>31</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>7</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#C6C7FD', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>14</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>21</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>28</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9.70, display: 'inline-flex' }}>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>1</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#A5E2FE', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>8</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>15</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>22</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>30</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9.70, display: 'inline-flex' }}>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>2</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>9</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>16</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>23</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>30</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9.70, display: 'inline-flex' }}>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>3</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>10</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#BCF0DD', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>17</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>24</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#A6A6A8', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>1</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9.70, display: 'inline-flex' }}>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>4</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>11</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>18</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>25</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#A6A6A8', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>2</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9.70, display: 'inline-flex' }}>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>5</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>12</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>19</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#020318', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>26</div>
                  </div>
                  <div style={{ width: 38.82, height: 38.82, padding: 9.70, background: '#F9F9FF', borderRadius: 14.56, justifyContent: 'center', alignItems: 'center', gap: 12.13, display: 'inline-flex' }}>
                    <div style={{ textAlign: 'center', color: '#A6A6A8', fontSize: 19.41, fontWeight: '500', wordWrap: 'break-word' }}>3</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'flex' }}>
              <button className="bg-light-blue hover:bg-light-blue-active" style={{ width: 415, height: 57, paddingLeft: 24, paddingRight: 24, borderRadius: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
                <div style={{ width: 32, height: 32, padding: 8, background: '#F9F9FF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                  <div style={{ textAlign: 'center', color: '#020318', fontSize: 16, fontWeight: '500', wordWrap: 'break-word' }}>8</div>
                </div>
                <div style={{ width: 243, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                  <div style={{ height: 19, color: '#020318', fontSize: 16 }}>Título da atividade</div>
                  <div style={{ height: 14, color: '#020318', fontSize: 12 }}>Descrição da atividade</div>
                </div>
              </button>
              <button className="bg-indigo hover:bg-indigo-active" style={{ width: 415, height: 57, paddingLeft: 24, paddingRight: 24, borderRadius: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
                <div style={{ width: 32, height: 32, padding: 8, background: '#F9F9FF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                  <div style={{ textAlign: 'center', color: '#020318', fontSize: 16, fontWeight: '500', wordWrap: 'break-word' }}>14</div>
                </div>
                <div style={{ width: 243, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                  <div style={{ height: 19, color: '#020318', fontSize: 16, fontWeight: '500', wordWrap: 'break-word' }}>Título da atividade</div>
                  <div style={{ height: 14, color: '#020318', fontSize: 12, fontWeight: '500', wordWrap: 'break-word' }}>Descrição da atividade</div>
                </div>
              </button>
              <button className="bg-light-green hover:bg-green-active" style={{ width: 415, height: 57, paddingLeft: 24, paddingRight: 24, borderRadius: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
                <div style={{ width: 32, height: 32, padding: 8, background: '#F9F9FF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                  <div style={{ textAlign: 'center', color: '#020318', fontSize: 16, fontWeight: '500', wordWrap: 'break-word' }}>17</div>
                </div>
                <div style={{ width: 243, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                  <div style={{ height: 19, color: '#020318', fontSize: 16, fontWeight: '500', wordWrap: 'break-word' }}>Título da atividade</div>
                  <div style={{ height: 14, color: '#020318', fontSize: 12, fontWeight: '500', wordWrap: 'break-word' }}>Descrição da atividade</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div >
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        classNames={{
          footer: "flex items-center"
        }}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">Adicionar nota</ModalHeader>
              <ModalBody>
                <div className="flex flex-col py-2 px-1">
                   <Input 
                    placeholder="Título"
                    onChange={ e => setTitle(e.target.value)}
                    value={title}
                   />
                   <Textarea 
                    placeholder="Aviso"
                    onChange={ e => setText(e.target.value)}
                    value={text}
                    className="mt-4"
                    size="lg"
                   />
                </div>
              </ModalBody>
              <ModalFooter className="">
                <button onClick={() => sendNews(onClose) } className="bg-indigo p-2 rounded-full hover:bg-black hover:text-white">Lançar Aviso</button>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
