import { React, useState, useEffect, useRef } from "react"
import payload from "../../package.json"
import { ArrowPathRoundedSquareIcon, BackwardIcon, ForwardIcon, HeartIcon, PlayIcon, PauseIcon, QueueListIcon } from '@heroicons/react/24/outline'

export default function Player() {
    const [IconHolder, setIconHolder] = useState(PlayIcon)
    const [playButton, setPlayButton] = useState(1);
    const [currentSong, setCurrentSong] = useState("");
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [lyrics, setLyrics] = useState("");
    const mainPlayer = useRef();

    useEffect(() => {
        fetch(`${payload.proxy}/song`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const {artist, lyrics, title, track} = data
            setCurrentSong(track.substring(1));
            setTitle(title);
            setArtist(artist);
            setLyrics(lyrics)
            mainPlayer.current.load();
        })
    }, [])

    useEffect(()=>{
        if(playButton%2 === 0){
            setIconHolder(PauseIcon)
            mainPlayer.current.play();
        }else{
            // Send pause post request to API
            setIconHolder(PlayIcon);
            mainPlayer.current.pause();
        }
    },[playButton])

    const favorite = () => {
        alert("Favorite button was clicked")
    }

    const backward = () => {
        alert("Backward button was clicked")
    }

    const play = () => {
        //alert("Play")
    }

    const forward = () => {
        alert("Forward button was clicked")
    }

    const repeat = () => {
        alert("Repeat button was clicked")
    }

    const list = () => {
        alert("List button was clicked")
    }

    return (
        <div className="container min-w-100px w-auto max-w-100 mx-auto mt-10">
            <div className="card flex flex-col items-center bg-gradient-to-tr from-slate-300 to-slate-700 text-xl font-mono p-4 rounded-md text-white" >
                <div className="cover flex flex-col items-center min-w-80px w-auto max-w-880px">
                    <img src="https://w0.peakpx.com/wallpaper/574/25/HD-wallpaper-amoled-astronaut-929-abstract-dark-minimal-q-simple-space-theme.jpg" alt="Album Cover" className="w-3/6 rounded-xl" />
                    <p className="-translate-y-10 w-3/6 text-center break-words">{`${title} by ${artist}`}</p>
                </div>
                <audio id="song" className="block w-full max-w-md mx-auto mb-4" controls ref={mainPlayer}>
                    <source src={`${payload.proxy}${currentSong}`} type="audio/mpeg" />
                </audio>
                <div className="flex flex-row">
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={favorite}>
                        <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={backward}>
                        <BackwardIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={()=>setPlayButton(playButton+1)}>
                        <IconHolder className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={forward}>
                        <ForwardIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={repeat}>
                        <ArrowPathRoundedSquareIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={list}>
                        <QueueListIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <button data-popover-target="popover-click" data-popover-placement="top" data-popover-trigger="click" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lyrics</button>
                    <div data-popover id="popover-click" role="tooltip" className="absolute z-10 invisible inline-block w-1/4 h-100 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Lyrics provided by Blackbox AI</h3>
                        </div>
                        <div className="px-3 py-2 whitespace-pre-line">
                            <p>{lyrics}</p>
                        </div>
                        <div data-popper-arrow></div>
                    </div>
                </div>
            </div>
        </div>
    )
}