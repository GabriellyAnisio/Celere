import Image from "next/image";
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({subsets:['latin'], weight: ['600']})
const balooNegrito = Baloo_2({subsets:['latin'], weight: ['800']})

export default function seeNews() {

    return (
    <div style={{display:"grid", gridTemplateColumns:"40% 50%"} }>

            <div className={`flex-col ml-8`}>

                    <div className={`mt-6 text-black`} style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <div className="bg-light-blue hover:bg-light-blue-active mt-6" style={{ width: 612, height: 210, paddingLeft: 24, paddingRight: 24, paddingTop: 20, paddingBottom: 20, borderRadius: 30, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', display: 'flex' }}>
                            <div className={`mb-1 ${balooNegrito.className}`} style={{ width: 336, height: 33, fontSize: 32 }}>Lorem ipsum</div>
                            <div className={`${baloo.className}`} style={{ width: 336, height: 26, fontSize: 24 }}>Lorem ipsum</div>
                        </div>
                    </div>

                    <div className='flex flex-row mt-6 ml-4'>

                         <button className='bg-box hover:bg-indigo' style={{ width: 40, height: 40, borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <Image src={"/icons/arrow-left.svg"} width={16} height={16} />
                        </button>
                        <button className='bg-box hover:bg-indigo ml-10' style={{ width: 40, height: 40, borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <Image src={"/icons/arrow-right.svg"} width={16} height={16} />
                        </button>

                        <p style= {{fontSize: 16, padding: 10, paddingLeft: 360, gap: 10}}> 
                            DD/MM/AAAA
                        </p>

                    </div>

                    <div className={`mt-6 font-poppins`} style={{ width: 612, fontSize: 16 }}>Lorem ispum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum Lorem ispum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum Lorem ispum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum Lorem ispum lorem ipsum lorem ipsumlorem ipsum lorem ipsum  lorem ipsum Lorem ispum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum Lorem ispum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum Lorem ispum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum Lorem ispum lorem ipsum lorem ipsum</div>
                        
            </div>

            <div className="bg-box mt-11" style={{width: 336, height: 548, padding: 20, borderRadius: 30, flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
                <div className="scrollable-content" style={{ overflow: 'scroll',width: 336, height: 446, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                    <div style={{alignItems: 'center'}}>
                        <button className="w-[288px] h-[112px] bg-light-blue text-black-300 hover:bg-light-blue-active mb-4" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 32, height:33}}>Lorem ipsum</div>
                            <div className={`${baloo.className}`} style={{ fontSize: 24}}>Lorem ipsum</div>
                        </button>
                        <button className="w-[288px] h-[112px] bg-light-blue text-black-300 hover:bg-light-blue-active mb-4" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 32, height:33}}>Lorem ipsum</div>
                            <div className={`${baloo.className}`} style={{ fontSize: 24}}>Lorem ipsum</div>
                        </button>
                        <button className="w-[288px] h-[112px] bg-light-blue text-black-300 hover:bg-light-blue-active mb-4" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 32, height:33}}>Lorem ipsum</div>
                            <div className={`${baloo.className}`} style={{ fontSize: 24}}>Lorem ipsum</div>
                        </button>
                        <button className="w-[288px] h-[112px] bg-light-blue text-black-300 hover:bg-light-blue-active mb-4" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 32, height:33}}>Lorem ipsum</div>
                            <div className={`${baloo.className}`} style={{ fontSize: 24}}>Lorem ipsum</div>
                        </button>
                        <button className="w-[288px] h-[112px] bg-light-blue text-black-300 hover:bg-light-blue-active" style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 32, height:33}}>Lorem ipsum</div>
                            <div className={`${baloo.className}`} style={{ fontSize: 24}}>Lorem ipsum</div>
                        </button>
                        
                    </div>
                    
                </div>
                    <div><button className="bg-indigo mt-6 hover:bg-indigo-active" style={{ fontSize: 16, fontWeight: '600', width: 276, height: 37, padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                                Lançar aviso
                    </button></div>
                    
            </div>
    </div>

    )
}