export type TopbarProps = {}

export default function Topbar({}: TopbarProps) {
    return (
        <div className="h-14 font-montserrat text-[10px]">
            <div className="p-10 flex flex-row items-center">
                <img src="../../public/img/Logo.png" alt="" className="h-8 w-8"/>
                <h1 className="text-white font-semibold ml-4">YOURNIGHT</h1>
            </div>
        </div>
    );
}
