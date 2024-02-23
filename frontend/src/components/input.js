

export default function Input({title, width, placeholder}){

    return(
        <>
            <div className="flex flex-col mr-8">
                <div>{title}</div>
                <div className='mt-2'>
                    <input  className={`p-2 h-10  bg-box rounded-full`} placeholder={placeholder} style={{width: `${width}rem`}} ></input>
                </div>
            </div>
        </>
    )

}