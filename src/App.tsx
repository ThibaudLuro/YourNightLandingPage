import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import ButtonDownload from "./components/ButtonDownload";
import Footer from "./components/Footer";
import Functionnality from "./components/Functionnality";
import './App.css'

function App() {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    return (
        <div className="h-full w-full font-montserrat">

            {
                screenSize.width > 768 &&
                <TopBar />
            }

            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center">
                <div className="px-10 pt-10 text-center md:text-start md:pt-0">
                    <div>
                        <h1 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl">Maîtrise</h1>
                        <h1 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl">l'orgnisation de</h1>
                        <h1 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl">tes soirées 🥳</h1>
                    </div>
                    <div className="mt-6">
                        <p className="text-white font-thin text-xs md:text-sm lg:text-base">En passant par la gestion
                            des invités, des
                            courses,</p>
                        <p className="text-white font-thin text-xs md:text-sm lg:text-base">des remboursements ou
                            même</p>
                        <p className="text-white font-thin text-xs md:text-sm lg:text-base">de la playlist</p>
                    </div>


                    <div className="mt-10 flex justify-center item-center md:justify-start">
                        <div className="mx-2">
                            <ButtonDownload content={"Apple Store"}
                                icon="img/AppStore.png"
                                onClick={() =>
                                    window.open("https://apps.apple.com/fr/app/yournight-gestion-de-soir%C3%A9es/id6450016678", "_blank")
                                } />
                        </div>
                        <div className="mx-2">
                            <ButtonDownload content={"Google Play"}
                                icon="img/PlayStore.png"
                                onClick={() =>
                                    window.open("https://play.google.com/store/apps/details?id=com.yournight.client&hl=fr&gl=US", "_blank")
                                } />
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center pt-10 md:justify-start">
                        <h1 className="text-white font-semibold text-xl mx-2">10+</h1>
                        <div className="text-white font-thin text-xs mx-2">
                            <h1>Utilisateurs</h1>
                            <h1>Quotidiens</h1>
                        </div>
                        <div className="w-[1px] h-[20px] bg-white mx-2" />
                        <h1 className="text-white font-semibold text-xl mx-2">5+</h1>
                        <div className="text-white font-thin text-xs mx-2">
                            <h1>Avis</h1>
                            <h1>Positifs</h1>
                        </div>
                    </div>
                </div>
                <div className="h-[500px] flex items-center justify-center md:h-[600px] lg:h-[700px]">
                    <img src={"img/MainPicture.png"} alt=""
                        className="w-[350px] absolute z-10 md:w-[450px] lg:w-[550px]" />
                    <img src="img/Light.png" alt=""
                        className="w-[400px] relative z-0 md:w-[500px] lg:w-[600px]" />
                </div>
            </div>

            <div className="px-10 pb-10">
                <div className="mt-10">
                    <Functionnality image="img/Playlist.png" title={"Playlist commune pour ta soirée 💽"}
                        content={"Ajoute tes musiques de soirées préférées avec tous tes invités dans une playlist commune pour ensuite l’exporter sur ton compte Spotify"}
                        imageDirection={"left"}
                        width={screenSize.width} />

                </div>
                <div className="mt-10">
                    <Functionnality image="img/Supplies.png" title={"Gestion des courses 🛒"}
                        content={"Définis une liste de courses afin d’anticiper tout ce dont vous avez besoin. Tes invités pourront ensuite s’attribuer ces courses pour savoir qui amène quoi"}
                        imageDirection={"right"}
                        width={screenSize.width} />
                </div>
                <div>
                    <Functionnality image="img/Refunds.png" title={"Gestion des remboursements 💸"}
                        content={"Aperçu en temps réel des dépenses de chacun des participants avec calcul automatique de qui doit combien à qui"}
                        imageDirection={"left"}
                        width={screenSize.width} />
                </div>
            </div>

            <div className="h-48">
                <Footer width={screenSize.width} />
            </div>
        </div>
    )
}

export default App
