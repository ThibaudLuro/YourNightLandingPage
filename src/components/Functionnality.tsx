export type FunctionnalityProps = {
    image: string
    title: string
    content: string
    imageDirection: 'left' | 'right',
    width: number
}

export default function Functionnality({image, title, content, imageDirection, width}: FunctionnalityProps) {
    return (
        <div className="text-center flex flex-col items-center sm:flex-row sm:text-start sm:justify-center">
            {
                imageDirection === 'right' || width < 768 ?
                    <>
                        <div className="max-w-[300px]">
                            <h1 className="text-white font-semibold text-xl md:text-xl lg:text-2xl">{title}</h1>
                            <p className="text-white font-thin text-xs md:text-xs lg:text-sm mt-4">{content}</p>
                        </div>
                        <img src={image} alt="" className="w-[350px] mt-10 md:w-[375px] lg:w-[400px]"/>
                    </>
                    :
                    <>
                        <img src={image} alt="" className="w-[350px] mt-10 md:w-[375px] lg:w-[400px]"/>
                        <div className="max-w-[300px]">
                            <h1 className="text-white font-semibold text-xl md:text-xl lg:text-2xl">{title}</h1>
                            <p className="text-white font-thin text-xs md:text-xs lg:text-sm mt-4">{content}</p>
                        </div>
                    </>
            }
        </div>


    );
}
