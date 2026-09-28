import { useEffect, useState } from 'react'
import pressStart from './assets/press-start.png'
import titleScreen from './assets/title-screen.png'

const daveFrames = [
  new URL('./assets/dave-adjust-sunglasses/frame_000.png', import.meta.url).href,
  new URL('./assets/dave-adjust-sunglasses/frame_001.png', import.meta.url).href,
  new URL('./assets/dave-adjust-sunglasses/frame_002.png', import.meta.url).href,
  new URL('./assets/dave-adjust-sunglasses/frame_003.png', import.meta.url).href,
  new URL('./assets/dave-adjust-sunglasses/frame_004.png', import.meta.url).href,
  new URL('./assets/dave-adjust-sunglasses/frame_005.png', import.meta.url).href,
  new URL('./assets/dave-adjust-sunglasses/frame_006.png', import.meta.url).href,
  new URL('./assets/dave-adjust-sunglasses/frame_007.png', import.meta.url).href,
  new URL('./assets/dave-adjust-sunglasses/frame_008.png', import.meta.url).href,
]

export default function TitleScreen({ onStart }: { onStart?: () => void }) {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    const isResting = frameIndex === 0
    const isLastFrame = frameIndex === daveFrames.length - 1
    const delay = isResting ? 6_000 + Math.random() * 10_000 : 150
    const timer = window.setTimeout(() => {
      setFrameIndex(isLastFrame ? 0 : frameIndex + 1)
    }, delay)

    return () => window.clearTimeout(timer)
  }, [frameIndex])

  return (
    <main className="title-screen">
      <div className="title-screen__art">
        <img className="title-screen__logo" src={titleScreen} alt="Runners Quest" />
        <button
          className="title-screen__start"
          type="button"
          onClick={onStart}
          disabled={!onStart}
          aria-label="Press Start"
        >
          <img className="title-screen__start-image" src={pressStart} alt="" />
        </button>
      </div>
      <div className="title-screen__dave-wrap">
        <img
          className="title-screen__dave"
          src={daveFrames[frameIndex]}
          alt="Dave idling"
        />
      </div>
    </main>
  )
}
