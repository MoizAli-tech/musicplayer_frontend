import { createSlice } from "@reduxjs/toolkit";


const playerSlice = createSlice({
    name: "Player",

    initialState: {
        selectedSongId: 0,
        songChanged: false,
        playerState: 0,
        volume: 50,
        isPlaying: false,
        currentLocation: "",
        selectedSong: 'https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3'
    },

    reducers: {
        volume(state, action) {
            return state.volume = action.payload;
        },
        duration(state, action) {
            return state.duration = action.payload;
        },
        currentLocation(state, action) {
            return state.currentLocation = action.payload;
        },
        playerStateSelected(state, action) {
            if (action.payload) {
                return state.playerState = (playerState + 1) % 2;
            } else {
                return state.playerState = action.payload;
            }

        },
        selectedSong(state, action) {
            state.selectedSong = action.payload;
        },
        selectedSongId(state, action) {
            state.selectedSongId = action.payload;
        },

        isPlaying(state, action) {
            state.isPlaying = action.payload;
        },

        songChanged(state, action) {
            state.songChanged = action.payload;
        }

    }
})

export const { isPlaying, selectedSong, selectedSongId, playerStateSelected, currentLocation, duration, volume } = playerSlice.actions;

export default playerSlice.reducer