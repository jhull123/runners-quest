import titleScreen from './assets/title-screen.png'

export default function TitleScreen() {
  return (
    <main className="title-screen">
      <img className="title-screen__logo" src={titleScreen} alt="Runners Quest" />
    </main>
  )
}
