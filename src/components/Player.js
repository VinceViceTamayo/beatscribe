import { React, useState } from "react"
import { ArrowPathRoundedSquareIcon, BackwardIcon, ForwardIcon, HeartIcon, PlayIcon, QueueListIcon } from '@heroicons/react/24/outline'

export default function Player() {
    // const [playButton, setPlayButton] = useState(false);
    const favorite = () => {
        alert("Favorite button was clicked")
    }

    const backward = () => {
        alert("Backward button was clicked")
    }

    const play = () => {
        alert("Play button was clicked")
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
                {/* <audio id="song" class="block w-full max-w-md mx-auto" controls>
                    <source src="https://open.spotify.com/track/7DE0I3buHcns00C0YEsYsY?si=5e0442c12f514f04" type="audio/mpeg" />
                </audio> */}
                <div class="flex flex-row">
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={favorite}>
                        <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={backward}>
                        <BackwardIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 mx-1 cursor-pointer" onClick={play}>
                        <PlayIcon className="h-6 w-6 text-white" aria-hidden="true" />
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