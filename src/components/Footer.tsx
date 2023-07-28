export type FooterProps = { width: number }

export default function Footer({width}: FooterProps) {
    return (
        <div className="h-full mt-10 bg-[#272332] font-montserrat text-[10px] w-full h-full flex flex-row justify-between">

            <div className="flex flex-col px-5 py-5 sm:px-10 justify-start sm:justify-between">
                <div className="flex flex-row items-center">
                    <img src="img/Logo.png" alt="" className="h-8 w-8"/>
                    <h1 className="text-white font-semibold ml-4">YOURNIGHT</h1>
                </div>

                {
                    width > 640 &&
                    <h1 className="text-[#B7B7B7] max-w-[200px]">L’application mobile la plus complète concernant
                        l’organisation de soirées entre amis</h1>
                }

                <div className="flex flex-row items-center mt-4 sm:mt-0">
                    <img src="img/Instagram.png" alt="" className="h-6 w-6"/>
                    <img src="img/TikTok.png" alt="" className="h-6 w-6 ml-2"/>
                </div>
            </div>

            <div className="flex flex-col items-start px-10 py-5 text-white">
                <h1 className="font-semibold mt-2">CONTACT :</h1>
                <div className="mt-6">
                    <div className="flex flex-col items-start md:flex-row md:items-center">
                        <h1 className="font-medium">Mail :</h1>
                        <h1 className="md:ml-2 text-[#B7B7B7]">yournight.corp@gmail.com</h1>
                    </div>
                    <div className="flex flex-col items-start md:flex-row md:items-center mt-2 md:mt-1">
                        <h1 className="font-medium">Instagram :</h1>
                        <h1 className="md:ml-2 text-[#B7B7B7]">YourNightApp</h1>
                    </div>
                </div>

            </div>

            {
                width > 640 &&
                <div className="flex h-full items-end px-10 py-5">
                    <h1 className="text-[#B7B7B7]">Created by Thibaud Luro</h1>
                </div>
            }
        </div>
    );
}
