import Image from "next/image";
import { Baloo_2 } from 'next/font/google'
import { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Textarea,} from "@nextui-org/react";
import BigNewsCard from "@/components/news/bigNewsCard";
import NewsCard from "@/components/news/newsCard";

const baloo = Baloo_2({subsets:['latin'], weight: ['600']})
const balooNegrito = Baloo_2({subsets:['latin'], weight: ['800']})

export const getServerSideProps = async (ctx) => {

    const resAvisos = await fetch(`http://127.0.0.1:8000/comunicado`, { 
      method: "GET",
      cache: 'no-store', 
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
    })
  
    const avisos = await resAvisos.json()
  
  
    return {
      props: {
        avisos: avisos
      }
    }
  }

export default function seeNews({avisos}) {

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
        <div style={{display:"grid"} } className="grid-cols-2">

                <div className={`flex-col ml-8`}>

                        <div className={`mt-6 text-black`} style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <BigNewsCard title={avisosSorted[actualNews].title}/>
                        </div>

                        <div className='flex flex-row mt-6 ml-4'>

                            <button 
                                className='bg-box hover:bg-indigo' 
                                style={{ width: 40, height: 40, borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }} 
                                onClick={() => onSetNews(-1)} 
                            >
                            <Image src={"/icons/arrow-left.svg"} width={16} height={16}  />
                            </button>
                            <button 
                                className='bg-box hover:bg-indigo ml-10' 
                                style={{ width: 40, height: 40, borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }} 
                                onClick={() => onSetNews(1)}
                            >
                            <Image src={"/icons/arrow-right.svg"} width={16} height={16} />
                            </button>

                            <p style= {{fontSize: 16, padding: 10, paddingLeft: 360, gap: 10}}> 
                                {new Date(avisosSorted[actualNews].creation_date).toLocaleDateString("pt-BR")}
                            </p>

                        </div>

                        <div className={`mt-6 ml-4 font-poppins`} style={{ width: 612, fontSize: 16 }}>{avisosSorted[actualNews].text}</div>
                            
                </div>

                <div className="bg-box mt-11 ml-16" style={{width: 336, height: 548, padding: 20, borderRadius: 30, flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
                    <div className="scrollable-content" style={{ overflow: 'scroll',width: 336, height: 446, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                        <div style={{alignItems: 'center'}}>
                            {avisosSorted.map(aviso => {
                                return <NewsCard title={aviso.title} onClick={() => setActualNews(avisosSorted.indexOf(aviso))} key={aviso.id} />
                            })}             
                        </div>
                        
                    </div>
                        <div><button className="bg-indigo mt-6 hover:bg-indigo-active" style={{ fontSize: 16, fontWeight: '600', width: 276, height: 37, padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }} onClick={onOpen}>
                                    Lançar aviso
                        </button></div>
                        
                </div>
        </div>
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