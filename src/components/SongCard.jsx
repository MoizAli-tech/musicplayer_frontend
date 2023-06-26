import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectedSong, selectedSongId } from "../redux/services/playerSlice"


const SongCard = ({ song, i, activeSong, isPlaying, songs }) => {

  const dispatch = useDispatch();
  const player = useSelector((state) => state.player)

  function handlePause() {
  }

  function handlePlay() {

  }

  function songClickHandler() {
    dispatch(selectedSongId(song.id))
    dispatch(selectedSong(song.url))
  }



  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 
    bg-opacity-50 backdrop-blur-sm 
    animate-slideup rounded-lg 
    cursor-pointer'
      onClick={() => { songClickHandler() }}
    >

      <div className='relative w-full h-42 group '>
        <div className={`absolute inset-0 justify-center items-center 
          bg-black bg-opacity-50 group-hover:flex
            ${activeSong?.name === song.name ? 'flex bg-black bg-opacity-60' : 'hidden'}
          `}>

        </div>
        <img alt="song_img" src={song?.links?.images[1]?.url} />
      </div>

      <h2 className="text-white w-full mt-4">{song.name}</h2>
      <p className="text-white w-full">{song.author}</p>
    </div>
  )
}

export default SongCard