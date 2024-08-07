export type ButtonDownloadProps = {
    content: string
    icon: string
    onClick?: () => void
}

export default function ButtonDownload({content, icon, onClick}: ButtonDownloadProps) {
    return (
        <div onClick={onClick} className="h-10 w-32 bg-white text-[#161024] text-xs rounded-md flex items-center justify-around cursor-pointer font-semibold">
            <img src={icon} alt="" className="h-4 w-4"/>
            <h1>{content}</h1>
        </div>
    );
}
