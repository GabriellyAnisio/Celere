import Image from "next/image";
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({subsets:['latin'], weight: ['600']})
const balooNegrito = Baloo_2({subsets:['latin'], weight: ['800']})

export default function classesList() {

    return (
        <div className={`flex flex-col mt-4 ml-8 ${baloo.className}`} style={{ justifyContent: 'flex-start', gap: 12, display: 'inline-flex' }}>

            <div className="flex flex-row">
                <div className="mt-2">
                    <Image src={"/icons/classes.svg"} width={44} height={44} />
                </div>
                <div className={`ml-4 ${baloo.className}`} style={{ width: 138, height: 23, color: '#020318', fontSize: 40, fontWeight: '700' }}>
                    Turmas
                </div>
            </div>

            {/* FILTROS */}
            <div className="flex flex-row mt-3">
                <Image src={"/icons/filter.svg"} width={24} height={24} />
                <div className="ml-3" style={{ width: '100%', height: '100%', color: 'black', fontSize: 24, fontWeight: '300' }}>
                    Filtro
                </div>
            </div>

            <div className="flex flex-row" style={{ gap: 77 }}>
                <div className="flex flex-col" style={{ gap: 12 }}>
                    <div style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 8, display: 'inline-flex' }}>
                        <button className="bg-indigo" style={{ fontSize: 16, fontWeight: '400', width: 75, height: 26, padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                            Infantil
                        </button>

                        <button style={{ fontSize: 16, fontWeight: '400', width: 122, height: 26, padding: 10, background: '#C6C7FD', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                            Fundamental I
                        </button>

                        <button style={{ fontSize: 16, fontWeight: '400', height: 26, padding: 10, background: '#C6C7FD', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                            Fundamental II
                        </button>
                    </div>

                    <div style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>

                        <button style={{ textAlign: 'center', fontSize: 16, fontWeight: '400', height: 26, padding: 10, background: '#C6C7FD', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            Ensino Médio
                        </button>

                        <button style={{ textAlign: 'center', fontSize: 16, fontWeight: '400', height: 26, padding: 10, background: '#C6C7FD', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                            Ensino Médio Técnico
                        </button>

                        <button style={{ textAlign: 'center', fontSize: 16, fontWeight: '400', width: 49, height: 26, padding: 10, background: '#C6C7FD', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                            EJA
                        </button>
                    </div>
                </div>

                {/* BOTÃO DE ADICIONAR TURMA */}
                <button className={`m-4 w-[184px] h-[60px] bg-light-blue hover:bg-light-blue-active`} style={{ fontSize: 20, fontWeight: '500', width: '184', height: '60', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex' }}>
                    <Image src={"/icons/plus.svg"} width={24} height={24} />
                    Turma
                </button>

            </div>

            {/* LISTA DE TURMAS */}
            <div className="w-[888px] h-[328px] bg-box" style={{padding: 20, borderRadius: 30, flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
                <div className="scrollable-content" style={{ overflow: 'scroll',width: 836, height: 288, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                    <div style={{alignItems: 'center', gap: 52, display: 'inline-flex' }}>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                    </div>
                    <div style={{alignItems: 'center', gap: 52, display: 'inline-flex' }}>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                    </div>
                    <div style={{alignItems: 'center', gap: 52, display: 'inline-flex' }}>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                    </div>
                    <div style={{alignItems: 'center', gap: 52, display: 'inline-flex' }}>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                    </div>
                    <div style={{alignItems: 'center', gap: 52, display: 'inline-flex' }}>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                        <button className="w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24, fontWeight: '800'}}>9° ano A</div>
                            <div style={{ fontSize: 16, fontWeight: '300' }}>Fundamental II</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}