import { useEffect, useState } from 'react'
import daveIdleSummer from './assets/dave-idle-summer.png'
import titleScreen from './assets/title-screen.png'

const fidgetFrames = [0, 6, 6, 0]
const sunglassesFrames = [0, 2, 3, 3, 3, 5, 0]

export default function TitleScreen() {
  const [cycleFrames, setCycleFrames] = useState(fidgetFrames)
  const [cycleIndex, setCycleIndex] = useState(0)
  const frame = cycleFrames[cycleIndex]

  useEffect(() => {
    const isLastFrame = cycleIndex === cycleFrames.length - 1
    const delay = isLastFrame ? 5_000 : 1_000 / 5
    const timer = window.setTimeout(() => {
      if (isLastFrame) {
        const nextCycle = Math.random() < 1 / 3 ? sunglassesFrames : fidgetFrames
        setCycleFrames(nextCycle)
        setCycleIndex(0)
        return
      }

      setCycleIndex((currentIndex) => currentIndex + 1)
    }, delay)

    return () => window.clearTimeout(timer)
  }, [cycleFrames, cycleIndex])

  const column = frame % 4
  const row = Math.floor(frame / 4)

  return (
    <main className="title-screen">
      <div className="title-screen__art">
        <img className="title-screen__logo" src={titleScreen} alt="Runners Quest" />
        <div className="title-screen__dave-wrap">
          <div
            aria-label="Dave idling"
            className="title-screen__dave"
            role="img"
            style={{
              backgroundImage: `url(${daveIdleSummer})`,
              backgroundPosition: `${(column / 3) * 100}% ${row * 100}%`,
            }}
          />
        </div>
      </div>
    </main>
  )
}
