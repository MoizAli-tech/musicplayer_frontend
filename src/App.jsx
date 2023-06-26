import Discover from "./components/Discover";
import Navbar from "./components/Navbar";
import SongDetail from './components/songDetail';
import { fetchMusicData } from './redux/services/musicPlayerApi';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import Controlbar from "./components/Controlbar";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMusicData())
  }, [])

  const { loading } = useSelector((state) => state.musicPlayerApi)

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <Navbar />
      <div className='w-full flex  justify-between'>
        <SongDetail />
        <Discover />
      </div>
      <Controlbar />
    </div>
  )
}

export default App