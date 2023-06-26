import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import "../css/SongDetail.css"

const SongDetail = () => {

    const { selectedSongId, selectedSong } = useSelector((state) => state.player)
    const { data: songs } = useSelector((state) => state.musicPlayerApi)

    const songData = () => {


        return (
            <>
                <div className='now-playing'>
                    <div id="active">
                        <strong>Now Playing</strong>
                    </div>
                    <div className="header">
                        {
                            songs[selectedSongId]?.name
                        }
                    </div>
                </div>

                <div className="album-img">

                </div>

                <div className="artist-img sm:hidden">

                    <img className="rounded-full" src={songs[selectedSongId]?.links?.images[0]?.url} alt="artist-image" />
                    <p className='artist-name'>{songs[selectedSongId]?.author}</p>

                </div>
            </>
        )



    }
    return (
        <div className='w-1/4 sticky top-20  h-1/2 pb-4 z-10 song-detail' style={{ backgroundImage: `url(${songs[selectedSongId].links.images[1].url})` }}>
            {songData()}
        </div>
    )
}

export default SongDetail;

