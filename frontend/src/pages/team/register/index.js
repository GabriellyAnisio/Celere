import Image from "next/image";
import { Baloo_2, Poppins } from 'next/font/google'
import { useEffect, useMemo, useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useRouter } from 'next/router'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['500'] })
const balooNegrito = Baloo_2({ subsets: ['latin'], weight: ['800'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function registerClass() {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [data, setData] = useState("")
    const [rg, setRg] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [telefone, setTelefone] = useState("")

    const router = useRouter()

    const createProfessional = async() =>{

        if(selectedValue == "professor"){
            const res = await fetch(`http://127.0.0.1:8000/professor/create`, { 
                method: "post",
                cache: 'no-store', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name:name,
                    email: email,
                    password: senha,
                    birth_date: "1980-05-12",
                    tel: telefone,
                    rg: rg,
                    cpf: cpf
                }) 
            })
        
            if(!res.ok){
              return console.log("Erro ma criação")
            }


            router.push("/team")

            return ""
        }


        const res = await fetch(`http://127.0.0.1:8000/gestor/create`, { 
                method: "post",
                cache: 'no-store', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name:name,
                    email: email,
                    password: senha,
                    birth_date: "1980-05-12",
                    tel: telefone,
                    rg: rg,
                    cpf: cpf
                }) 
            })
        
            if(!res.ok){
              return console.log("Erro ma criação")
            }


            router.push("/team")
       
    
      }

    const cleanText = () => {
        setName("")
        setCpf("")
        setRg("")
        setEmail("")
        setSenha("")
        setTelefone("")
    }

    const [selectedKeys, setSelectedKeys] = useState(new Set(["Função >"]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );


    return (
        <div style={{display:"grid", gridTemplateColumns:"40% 50%"} }>
        <div className={`flex flex-col ml-8 mt-10 ${poppins.className}`} style={{ justifyContent: 'flex-start', display: 'inline-flex' }}>

            {/* TÍTULO */}
            <div className="flex flex-row">
                <div className="mt-4">
                    <Image src={"/icons/users.svg"} width={28} height={28} />
                </div>
                <div className={`ml-4 ${balooNegrito.className}`} style={{ height: 23, color: '#020318', fontSize: 40, fontWeight: '700' }}>
                    Equipe
                </div>
            </div>



            <div className="flex flex-row mt-4" style={{ gap: 32 }}>

                {/* CAMPO NOME */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-4`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        Nome
                    </div>

                    <div className="bg-gray  p-2 w-[428px] h-[40px] flex flex-row mt-3" style={{ borderRadius: 30 }}>
                        <input className="bg-gray justify-start  w-[428px] p-3 outline-none" type="search" placeholder="Nome completo" onChange={e => setName(e.target.value)} value={name}/>
                    </div>
                </div>


                <div className="flex mt-12" style={{ gap: 32}}>
                {/* DROPDOWN FUNÇÃO */}
                    <Dropdown className="bg-indigo">
                        <DropdownTrigger>
                            <Button 
                                variant="bordered" 
                                className="capitalize bg-indigo"
                            >
                                {selectedValue}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Single selection example"
                            variant="solid"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                            className="bg-indigo"
                        >
                            <DropdownItem key="professor">Professor</DropdownItem>
                            <DropdownItem key="gestor">Gestor</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                {/* <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-4`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}></div>

                    <div className="">
                        <div className="flex outline-none justify-start mt-3 items-center bg-indigo p-2 w-[225px] h-[40px] cursor-pointer" style={{ borderRadius: 100, gap: 115 }}
                            onClick={() => DropdownAction()}>
                            Função
                            <div className=" text-black">
                                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                        </div>
                        <div id="dropdown" className="absolute bg-indigo divide-gray-100 w-[225px]  hidden" style={{ borderRadius: 20, fontSize: 16 }}>
                            <ul className="py-2 cursor-pointer ">
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        Coordenação
                                    </li>
                                </div>
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        Docente
                                    </li>
                                </div>
                

                            </ul>
                        </div>
                    </div>
                </div> */}
                </div>

            </div>


            <div className="flex flex-row" style={{ gap: 32 }}>

                {/* CAMPO CPF */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-8`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        CPF
                    </div>

                    <div className="bg-gray  p-2 w-[308px] h-[40px] flex flex-row mt-3" style={{ borderRadius: 30 }}>
                        <input className="bg-gray justify-start  w-[428px] p-3 outline-none" type="search" placeholder="XXX.XXX.XXX-XX" onChange={e => setCpf(e.target.value)} value={cpf} />
                    </div>
                </div>

                {/* CAMPO DATA DE NASCIMENTO */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-8`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        Data de Nascimento
                    </div>

                    <div className="bg-gray  p-2 w-[308px] h-[40px] flex flex-row mt-3" style={{ borderRadius: 30 }}>

                        <input className="bg-gray justify-start  w-[428px] p-3 outline-none" type="search" placeholder="DD/MM/AAAA" >

                        </input>
                    </div>
                </div>

            </div>

            <div className="flex flex-row" style={{ gap: 32 }}>
            {/* CAMPO RG */}
            <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-8`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        RG
                    </div>

                    <div className="bg-gray  p-2 w-[308px] h-[40px] flex flex-row mt-3" style={{ borderRadius: 30 }}>

                        <input className="bg-gray justify-start  w-[428px] p-3 outline-none" type="search" placeholder="X.XXX.XXX" onChange={e => setRg(e.target.value)} value={rg}/>
                    </div>
                </div>

                {/* CAMPO TELEFONE */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-8`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        Telefone de contato
                    </div>

                    <div className="bg-gray  p-2 w-[308px] h-[40px] flex flex-row mt-3" style={{ borderRadius: 30 }}>

                        <input className="bg-gray justify-start  w-[428px] p-3 outline-none" type="search" placeholder="(XX) XXXXX-XXXX" onChange={e => setTelefone(e.target.value)} value={telefone} />
                    </div>
                </div>                                                                
                </div>

                <div className="flex flex-row" style={{ gap: 32 }}>
                {/* CAMPO E-mail */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-8`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        E-mail 
                    </div>

                    <div className="bg-gray  p-2 w-[308px] h-[40px] flex flex-row mt-3" style={{ borderRadius: 30 }}>

                        <input className="bg-gray justify-start  w-[428px] p-3 outline-none" type="search" placeholder="...@gmail.com" onChange={e => setEmail(e.target.value)} value={email}/>
                   </div>
                </div>

                {/* CAMPO SENHA */}
                 <div className="flex flex-col ">
                        <div className={`${poppins.className} mt-8`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                            Senha
                        </div>

                        <div className="bg-gray  p-2 w-[308px] h-[40px] flex flex-row mt-3" style={{ borderRadius: 30 }}>

                            <input className="bg-gray justify-start  w-[428px] p-3 outline-none" type="password" placeholder="*********" onChange={e => setSenha(e.target.value)} value={senha} />
                       </div>
                    </div>
                 </div>

            <div className="flex flex-row mt-6" style={{gap:24}}>

                    {/* BOTÃO DE LIMPAR */}
                    <button className={` w-[276px] h-[37px] bg-box text-black ${baloo.className} hover:bg-black hover:text-box`} style={{ padding: 10, borderRadius: 40, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }} onClick={cleanText}>
                        <div style={{ textAlign: 'center', fontSize: 20, fontWeight: '500' }}>
                            Limpar
                        </div>
                    </button>

                    {/* BOTÃO DE FINALIZAR */}
                    <button className={`ml-4 w-[276px] h-[37px] bg-indigo text-black ${baloo.className} hover:bg-black hover:text-box`} style={{ padding: 10, borderRadius: 40, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }} onClick={createProfessional}>
                        <div style={{ textAlign: 'center', fontSize: 20, fontWeight: '500' }}>
                            Finalizar
                        </div>
                    </button>
                    
            </div>
                    
        </div>

          {/*   <div className="flex flex-col ">
                <div className={`${baloo.className}`} style={{marginTop:135, marginLeft:70, width: 188, height: 23, fontSize: 20 }}>
                    Escolha um ícone
                    <div className="flex flex-row" style={{ gap: 12 }}>
                    <button className="border-radius">
                    <Image src={"/icons/menino.svg"} width={44} height={44} />
                    </button>

                    <button>
                    <Image src={"/icons/gestor.svg"} width={44} height={44} />
                    </button>
                    </div>
                    
                </div>

                <div className="" style={{marginTop:85, marginLeft:20}}>
                <Image src={"/icons/alunos.svg"} width={296} height={360} />
                </div>
               
            </div> */}
    </div>
    )
}