import Image from "next/image";
import { Baloo_2, Poppins } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['600'] })
const balooNegrito = Baloo_2({ subsets: ['latin'], weight: ['800'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['600'] })

export default function Home() {
  return (
    <div className={`flex flex-col ml-8 ${baloo.className}`} style={{ justifyContent: 'flex-start', display: 'inline-flex' }}>

      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className={` ${balooNegrito.className}`} style={{ width: 456, height: 46, color: '#020318', fontSize: 60 }}>
            Hello, Amanda
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
            <div className="bg-light-blue hover:bg-light-blue-active" style={{ width: 458, height: 140, paddingLeft: 24, paddingRight: 24, paddingTop: 20, paddingBottom: 20, borderRadius: 30, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', display: 'flex' }}>
              <div className={`mb-1 ${balooNegrito.className}`} style={{ width: 336, height: 33, fontSize: 32 }}>Lorem ipsum</div>
              <div className={`${baloo.className}`} style={{ width: 336, height: 26, fontSize: 24 }}>Lorem ipsum</div>
            </div>
          </div>

          <div className='flex flex-row mt-4 ml-6'>
            <button className='bg-box hover:bg-indigo' style={{ width: 40, height: 40, borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <Image src={"/icons/arrow-left.svg"} width={16} height={16} />
            </button>
            <button className='bg-box hover:bg-indigo ml-10' style={{ width: 40, height: 40, borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <Image src={"/icons/arrow-right.svg"} width={16} height={16} />
            </button>

            <button className={`ml-10 w-[276px] h-[37px] bg-box text-black ${baloo.className} hover:bg-black hover:text-box`} style={{ padding: 10, borderRadius: 40, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div style={{ textAlign: 'center', fontSize: 20 }}>Lançar aviso</div>
            </button>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col w-[244px] h-[246px] mt-6">
              <button className="mb-2 w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{ paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24 }}>9° ano A</div>
                <div style={{ fontSize: 16 }}>Fundamental II</div>
              </button>
              <button className="mb-2 w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{ paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24 }}>9° ano A</div>
                <div style={{ fontSize: 16 }}>Fundamental II</div>
              </button>
              <button className="mb-2 w-[244px] h-[64px] bg-light-green text-black-300 hover:bg-green-active" style={{ paddingLeft: 20, paddingRight: 20, borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div className={`mt-1 ${balooNegrito.className}`} style={{ fontSize: 24 }}>9° ano A</div>
                <div style={{ fontSize: 16 }}>Fundamental II</div>
              </button>

              <button className={` ${baloo.className} text-black`} style={{ width: 80, height: 30, fontSize: 20, display: 'flex-start' }}>
                Ver mais
              </button>
            </div>

            <div className="flex flex-col bg-box px-1 mt-3 ml-8" style={{ width: 184, height: 252, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex', borderRadius: 30 }}>
              <button className='w-[184px] px-1 flex mt-3 rounded-full'>
                <Image
                  className="mt-1"
                  src={'/icons/gestor.svg'}
                  width={48}
                  height={48}
                />
                <div className="flex flex-col ml-3 w-[104] h-[33">
                  <div className={`${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                  <div style={{ fontSize: 16 }}>Professor</div>
                </div>
              </button>
              <button className='w-[184px] px-1 flex mt-3 rounded-full'>
                <Image
                  className="mt-1"
                  src={'/icons/gestor.svg'}
                  width={48}
                  height={48}
                />
                <div className="flex flex-col ml-3 w-[104] h-[33">
                  <div className={`${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                  <div style={{ fontSize: 16 }}>Professor</div>
                </div>
              </button>
              <button className='w-[184px] h-[64px] px-1 flex mt-3 rounded-full'>
                <Image
                  className="mt-1"
                  src={'/icons/gestor.svg'}
                  width={48}
                  height={48}
                />
                <div className="flex flex-col ml-3 w-[104] h-[33]">
                  <div className={`${balooNegrito.className}`} style={{ fontSize: 16 }}>Amanda</div>
                  <div style={{ fontSize: 16 }}>Professor</div>
                </div>
              </button>

              <button className={`${baloo.className} text-black`} style={{ width: 180, height: 30, fontSize: 20, justifyContent: 'center', alignItems: 'center', display: 'center' }}>
                Ver mais
              </button>
            </div>
          </div>

        </div>

        <div className={`flex flex-col bg-box ml-10 mt-4 ${poppins.className}`} style={{ width: 482 , height: 553, borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
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
  )
}
