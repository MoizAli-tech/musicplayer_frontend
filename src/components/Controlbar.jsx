import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import "../css/Controlbar.css";
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from "react";
import { isPlaying, selectedSongId } from "../redux/services/playerSlice"

const Controlbar = () => {
    const dispatch = useDispatch();
    const player = useSelector((state) => state.player);
    const { data } = useSelector((state) => state.musicPlayerApi)
    const audioRef = useRef();
    const [songId, setSongId] = useState(0);
    const [isLoading, setLoading] = useState(true);



    function handlePause() {
        if (isLoading) {
            setTimeout(() => {
                audioRef.current.pause()
                dispatch(isPlaying(false));
            }, 2000)
            return
        }
        audioRef.current.pause()
        dispatch(isPlaying(false));


    }

    function handlePlay() {

        if (isLoading) {
            setTimeout(() => {
                audioRef.current.play()
                dispatch(isPlaying(true));
            }, 2000)
            return;
        }
        audioRef.current.play()
        dispatch(isPlaying(true));

    }

    function handleClick() {

        if (player.isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }


    }
    console.log(player.selectedSongId, "blah balh", songId)
    console.log(isLoading)

    if (player.selectedSongId != songId) {

        handlePause();
        audioRef.current.load()
        handlePlay()
        setSongId(player.selectedSongId);

    }


    return (


        <div className='controlbar flex justify-around items-center'>
            <audio controls ref={audioRef} className="hidden" onLoadedData={() => setLoading(false)}>
                <source src={player.selectedSong} type="audio/mpeg" />
            </audio>

            {/* <FaBackward className='fa fa-backword' /> */}
            <div className="control-app-header" onClick={handleClick}>
                {(!player.isPlaying) ? <FaPlay className=' fa fa-play' /> :
                    <FaPause className='fa fa-pause' />
                }
            </div>
            {/* <FaForward className='fa fa-forward' /> */}
            {/* <div className='control-links'>
                <a href="#" target='blank'></a>

            </div> */}
        </div>



    )
}

export default Controlbar



