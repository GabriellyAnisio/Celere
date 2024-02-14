import Image from "next/image";
import { Baloo_2, Poppins } from 'next/font/google'
import { useState } from "react";

const baloo = Baloo_2({ subsets: ['latin'], weight: ['500'] })
const balooNegrito = Baloo_2({ subsets: ['latin'], weight: ['800'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function registerClass() {

    {/* DROPDOWN */ }
    const [dropdown, setDropdown] = useState(false);
    const DropdownAction = () => {
        const dropTest = !dropdown;

        if (dropTest) {
            document.getElementById("dropdown").classList.remove("hidden");
        } else {
            document.getElementById("dropdown").classList.add("hidden");
        }

        setDropdown(!dropdown);

    }

    const [dropdown2, setDropdown2] = useState(false);
    const DropdownAction2 = () => {
        const dropTest = !dropdown2;

        if (dropTest) {
            document.getElementById("dropdown2").classList.remove("hidden");
        } else {
            document.getElementById("dropdown2").classList.add("hidden");
        }

        setDropdown2(!dropdown2);

    }

    return (
        <div className={`flex flex-col ml-8 ${poppins.className}`} style={{ justifyContent: 'flex-start', display: 'inline-flex' }}>

            {/* TÍTULO */}
            <div className="flex flex-row">
                <div className="mt-2">
                    <Image src={"/icons/classes.svg"} width={44} height={44} />
                </div>
                <div className={`ml-4 ${balooNegrito.className}`} style={{ height: 23, color: '#020318', fontSize: 40, fontWeight: '700' }}>
                    Criação de Turma
                </div>
            </div>



            <div className="flex flex-row" style={{ gap: 32 }}>

                {/* CAMPO NOME DA TURMA */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-4`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        Nome da Turma
                    </div>

                    <div className="bg-gray  p-2 w-[428px] h-[40px] flex flex-row mt-3" style={{ borderRadius: 30 }}>

                        <input className="bg-gray justify-start  w-[428px] p-3 outline-none" type="search" placeholder="Nome da Turma" >

                        </input>
                    </div>
                </div>

                {/* DROPDOWN COORDENADOR */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-4`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        Coordenador responsável
                    </div>

                    <div className="">
                        <div className="flex outline-none justify-start flex mt-3 items-center bg-indigo p-2 w-[225px] h-[40px] cursor-pointer" style={{ borderRadius: 100, gap: 70 }}
                            onClick={() => DropdownAction()}>
                            Coordenação
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
                                        Fulano
                                    </li>
                                </div>
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        Beltrano
                                    </li>
                                </div>
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        Cicrano
                                    </li>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>


                {/* DROPDOWN NÍVEL DA TURMA */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-4`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        Nível da turma
                    </div>

                    <div className="">
                        <div className="flex outline-none justify-start flex mt-3 items-center bg-indigo p-2 w-[225px] h-[40px] cursor-pointer" style={{ borderRadius: 100, gap: 70 }}
                            onClick={() => DropdownAction2()}>
                            Escolha o nível
                            <div className=" text-black">
                                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                        </div>
                        <div id="dropdown2" className="absolute bg-indigo divide-gray-100 w-[225px]  hidden" style={{ borderRadius: 20, fontSize: 16 }}>
                            <ul className="py-2 cursor-pointer ">
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        Infantil
                                    </li>
                                </div>
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        Fundamental I
                                    </li>
                                </div>
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        Fundamental II
                                    </li>
                                </div>
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        Ensino médio
                                    </li>
                                </div>
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        Ensino médio Técnico
                                    </li>
                                </div>
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        EJA
                                    </li>
                                </div>
                                <div >
                                    <li className="block px-4 py-2 hover:bg-gray-100">
                                        Curso
                                    </li>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>


            <div className="flex flex-row" style={{ gap: 32 }}>

                {/* CAMPO HORÁRIOS DE AULA */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-9`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        Horários de Aula
                    </div>

                    <div className="bg-gray  p-2 w-[428px] h-[40px] flex flex-row mt-3" style={{ borderRadius: 30 }}>

                        <input className="bg-gray justify-start  w-[428px] p-3 outline-none" type="search" placeholder="00h - 00h" >

                        </input>
                    </div>
                </div>


                {/* CAMPO NÚMERO DE ALUNOS */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-9`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        Quantos alunos?
                    </div>

                    <div className="bg-light-blue  p-2 w-[117px] h-[40px] flex flex-row mt-3" style={{ borderRadius: 12 }}>

                        <input className="bg-light-blue justify-start  w-[108px] p-3 outline-none" type="search" placeholder="Número" >

                        </input>
                    </div>
                </div>

            </div>



            <div className="flex flex-row" style={{ gap: 32 }}>

                {/* CAMPO DIAS DE AULA */}
                <div className="flex flex-col ">
                    <div className={`${poppins.className} mt-9`} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                        Dias de aula
                    </div>

                    <div className={`mt-3 w-[244px] h-[212px] bg-box ${poppins.className}`} style={{ padding: 12, background: '#F1F3FB', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
                        <div className="mt-2" style={{ height: 172, justifyContent: 'center', alignItems: 'flex-start', gap: 12, display: 'flex' }}>

                            {/* COLUNA DA ESQUERDA */}
                            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
                                <button className="w-[99px] h-[34px] bg-light-green" style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                    <div style={{ width: 99, fontSize: 16, fontWeight: '400' }}>Domingo</div>
                                </button>
                                <button className="w-[99px] h-[34px] bg-light-green" style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                    <div style={{ width: 99, fontSize: 16, fontWeight: '400' }}>Segunda</div>
                                </button>
                                <button className="w-[99px] h-[34px] bg-light-green" style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                    <div style={{ width: 99, fontSize: 16, fontWeight: '400' }}>Terça</div>
                                </button>
                                <button className="w-[99px] h-[34px] bg-light-green" style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                    <div style={{ width: 99, fontSize: 16, fontWeight: '400' }}>Quarta</div>
                                </button>
                            </div>

                            {/* COLUNA DA DIREITA */}
                            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
                                <button className="w-[99px] h-[34px] bg-light-green" style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                    <div style={{ width: 99, fontSize: 16, fontWeight: '400' }}>Quinta</div>
                                </button>
                                <button className="w-[99px] h-[34px] bg-light-green" style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                    <div style={{ width: 99, fontSize: 16, fontWeight: '400' }}>Sexta</div>
                                </button>
                                <button className="w-[99px] h-[34px] bg-light-green" style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                    <div style={{ width: 99, fontSize: 16, fontWeight: '400' }}>Sábado</div>
                                </button>
                            </div>
                        </div>


                    </div>

                </div>


                {/* CAMPO PROFESSORES */}
                <div className="flex flex-col ">

                    <div className="flex flex-row mt-9">
                        {/* TÍTULO */}
                        <div className={`${poppins.className} `} style={{ height: 23, color: '#020318', fontSize: 20, fontWeight: '300' }}>
                            Professores da turma
                        </div>

                        {/* BOTÃO DE ADICIONAR PROFESSOR */}
                        <button className={`ml-10 w-[276px] h-[37px] bg-box text-black ${baloo.className} hover:bg-black hover:text-box`} style={{ padding: 10, borderRadius: 40, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ textAlign: 'center', fontSize: 20, fontWeight: '500' }}>
                                +  Professor
                            </div>
                        </button>
                    </div>

                    {/* SCROLL DE PROFESSORES */}
                    <div className={` mt-4 w-[704px] h-[176px] bg-box ${poppins.className}`} style={{ padding: 12, background: '#F1F3FB', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
                        <div className="flex flex-col scrollable-content ml-1" style={{ overflowX: 'scroll', width: 666, height: 152, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                           
                            {/* PRIMEIRA LILNHA */}
                            <div style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
                                <button className='w-[184px] h-[64px] px-1 flex bg-box rounded-full hover:bg-indigo'>
                                    <Image
                                        className="mt-1"
                                        src={'/icons/gestor.svg'}
                                        width={56}
                                        height={56}
                                    />
                                    <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                        <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                        <div className={` ${baloo.className}`} style={{ fontSize: 16 }}>Professor</div>
                                        <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-[184px] h-[64px] px-1 flex bg-box rounded-full hover:bg-indigo'>
                                    <Image
                                        className="mt-1"
                                        src={'/icons/gestor.svg'}
                                        width={56}
                                        height={56}
                                    />
                                    <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                        <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                        <div className={` ${baloo.className}`} style={{ fontSize: 16 }}>Professor</div>
                                        <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-[184px] h-[64px] px-1 flex bg-box rounded-full hover:bg-indigo'>
                                    <Image
                                        className="mt-1"
                                        src={'/icons/gestor.svg'}
                                        width={56}
                                        height={56}
                                    />
                                    <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                        <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                        <div className={` ${baloo.className}`} style={{ fontSize: 16 }}>Professor</div>
                                        <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-[184px] h-[64px] px-1 flex bg-box rounded-full hover:bg-indigo'>
                                    <Image
                                        className="mt-1"
                                        src={'/icons/gestor.svg'}
                                        width={56}
                                        height={56}
                                    />
                                    <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                        <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                        <div className={` ${baloo.className}`} style={{ fontSize: 16 }}>Professor</div>
                                        <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-[184px] h-[64px] px-1 flex bg-box rounded-full hover:bg-indigo'>
                                    <Image
                                        className="mt-1"
                                        src={'/icons/gestor.svg'}
                                        width={56}
                                        height={56}
                                    />
                                    <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                        <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                        <div className={` ${baloo.className}`} style={{ fontSize: 16 }}>Professor</div>
                                        <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                        </div>
                                    </div>
                                </button>

                            </div>

                            {/* SEGUNDA LINHA */}
                            <div style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
                                <button className='w-[184px] h-[64px] px-1 flex bg-box rounded-full hover:bg-indigo'>
                                    <Image
                                        className="mt-1"
                                        src={'/icons/gestor.svg'}
                                        width={56}
                                        height={56}
                                    />
                                    <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                        <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                        <div className={` ${baloo.className}`} style={{ fontSize: 16 }}>Professor</div>
                                        <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-[184px] h-[64px] px-1 flex bg-box rounded-full hover:bg-indigo'>
                                    <Image
                                        className="mt-1"
                                        src={'/icons/gestor.svg'}
                                        width={56}
                                        height={56}
                                    />
                                    <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                        <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                        <div className={` ${baloo.className}`} style={{ fontSize: 16 }}>Professor</div>
                                        <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-[184px] h-[64px] px-1 flex bg-box rounded-full hover:bg-indigo'>
                                    <Image
                                        className="mt-1"
                                        src={'/icons/gestor.svg'}
                                        width={56}
                                        height={56}
                                    />
                                    <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                        <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                        <div className={` ${baloo.className}`} style={{ fontSize: 16 }}>Professor</div>
                                        <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-[184px] h-[64px] px-1 flex bg-box rounded-full hover:bg-indigo'>
                                    <Image
                                        className="mt-1"
                                        src={'/icons/gestor.svg'}
                                        width={56}
                                        height={56}
                                    />
                                    <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                        <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                        <div className={` ${baloo.className}`} style={{ fontSize: 16 }}>Professor</div>
                                        <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-[184px] h-[64px] px-1 flex bg-box rounded-full hover:bg-indigo'>
                                    <Image
                                        className="mt-1"
                                        src={'/icons/gestor.svg'}
                                        width={56}
                                        height={56}
                                    />
                                    <div className="flex flex-col justify-right ml-3" style={{ alignItems: 'flex-right' }}>
                                        <div className={` ${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                                        <div className={` ${baloo.className}`} style={{ fontSize: 16 }}>Professor</div>
                                        <div style={{ height: 15, borderRadius: 30, border: '1px #020318 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                            <div style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>História</div>
                                        </div>
                                    </div>
                                </button>

                            </div>

                        </div>
                    </div>

                    <div className="flex flex-row mt-4" style={{justifyContent: 'right', gap:24}}>

                        {/* BOTÃO DE LIMPAR */}
                        <button className={`ml-10 w-[276px] h-[37px] bg-box text-black ${baloo.className} hover:bg-black hover:text-box`} style={{ padding: 10, borderRadius: 40, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ textAlign: 'center', fontSize: 20, fontWeight: '500' }}>
                                Limpar
                            </div>
                        </button>

                        {/* BOTÃO DE FINALIZAR */}
                        <button className={`ml-10 w-[276px] h-[37px] bg-indigo text-black ${baloo.className} hover:bg-black hover:text-box`} style={{ padding: 10, borderRadius: 40, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ textAlign: 'center', fontSize: 20, fontWeight: '500' }}>
                                Finalizar
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}