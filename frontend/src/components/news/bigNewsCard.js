
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['600'] })
const balooNegrito = Baloo_2({ subsets: ['latin'], weight: ['800'] })

export default function BigNewsCard({title, subtitle}) {
  return (
    <>
        <div className="bg-light-blue mt-6" style={{ width: 650, height: 210, paddingLeft: 24, paddingRight: 24, paddingTop: 0, paddingBottom: 20, borderRadius: 30, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', display: 'flex' }}>
            <div className={`mb-1 ${balooNegrito.className}`}  style={{  height: 33, fontSize: 32 }}>{title}</div>
            {/* <div className={`${baloo.className}`} style={{ width: 336, height: 26, fontSize: 24 }}>Lorem ipsum</div> */}
        </div>
    </>
  )
}
