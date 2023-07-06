import { React, useState, useEffect } from "react"
import { ArrowPathRoundedSquareIcon, BackwardIcon, ForwardIcon, HeartIcon, PlayIcon, PauseIcon, QueueListIcon } from '@heroicons/react/24/outline'

export default function Player() {
    let IconHolder = PlayIcon;
    const [playButton, setPlayButton] = useState(1);

    useEffect(()=>{
        if(playButton%2 === 0){
            //Send play post request to API
        }else{
            // Send pause post request to API
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
        <div class="container min-w-100px w-auto max-w-100 mx-auto mt-10">
            <div class="card flex flex-col items-center bg-gradient-to-tr from-slate-300 to-slate-700 text-xl font-mono p-4 rounded-md text-white" >
                <div class="cover flex flex-col items-center min-w-80px w-auto max-w-880px">
                    <img src="https://w0.peakpx.com/wallpaper/574/25/HD-wallpaper-amoled-astronaut-929-abstract-dark-minimal-q-simple-space-theme.jpg" alt="Album Cover" class="w-3/6 rounded-xl" />
                    <p class="-translate-y-10 w-3/6 text-center break-words">The Edge of Space</p>
                </div>
                <div class="flex flex-row">
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={favorite}>
                        <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={backward}>
                        <BackwardIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={()=>setPlayButton(playButton+1)}>
                        {playButton%2 === 0 ? <PauseIcon className="h-6 w-6 text-white" aria-hidden="true" /> : <PlayIcon className="h-6 w-6 text-white" aria-hidden="true" />}
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
                </div>
            </div>
        </div>
    )
}