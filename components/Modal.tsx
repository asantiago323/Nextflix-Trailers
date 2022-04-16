import { XIcon } from '@heroicons/react/outline'
import MuiModal from '@mui/material/Modal'
import ReactPlayer from 'react-player/lazy'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { Movie, Element, Genre } from '../typings'

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [trailer, setTrailer] = useState('')
  const [muted, setMuted] = useState(false)
  const [genres, setGenres] = useState<Genre[]>([])
  useEffect(() => {
      if (!currentMovie) return

      async function fetchTrailer() {
          const data = await fetch(
              `https://api.themoviedb.org/3/${
                currentMovie?.media_type === 'tv' ? 'tv' : 'movie'
              }/${currentMovie?.id}?api_key=${
                process.env.NEXT_PUBLIC_MOVIE_API_KEY
              }&language=en-US&append_to_response=videos`
          ).then(res => res.json())

          if (data?.videos) {
              const index = data.videos.results
                .findIndex((element: Element) => element.type === 'Trailer')
                setTrailer(data.videos?.results[index]?.key)
          }

          if (data?.genres) {
              setGenres(data.genres)
          }
      }

      fetchTrailer()
  }, [currentMovie])
  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <MuiModal open={showModal} 
    >
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9
            border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: '0', left: '0' }}
                playing
                muted={muted}
            />
        </div>
      </>
    </MuiModal>
  )
}

export default Modal

// className="flex !top-7 left-0 right-0 x-50 mx-auto
//         w-fill max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"