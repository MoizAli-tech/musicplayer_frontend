import React from 'react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import SongCard from './SongCard';
const Discover = () => {

    const dispatch = useDispatch();
    const { data: songs } = useSelector((state) => state.musicPlayerApi)
    let authors = songs.map((song, id) => {
        return song.author
    })
    authors = [...new Set(authors)]






    return (
        <div className="sm:w-full md:w-3/4  flex flex-col  bg-teal-600 p-4">
            <div className="w-full flex  md:justify-between sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
                <select className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                    {
                        authors.map((author, i) => (
                            <option key={i}>{author}</option>
                        )

                        )
                    }

                </select>
            </div>



            <div className="flex flex-wrap  justify-center  gap-8">
                {songs.map((song, i) => {
                    return (
                        <SongCard
                            key={i}
                            song={song}

                            isPlaying
                            activeSong
                            songs
                            i={i}
                        />
                    )

                })}

            </div>

        </div>
    )
}

export default Discover