import { gameMode } from "../types";

interface LandingPageInterface {
  setMode: React.Dispatch<React.SetStateAction<gameMode>>;
}

export function LandingPage({ setMode }: LandingPageInterface): JSX.Element {
  const handleClick = () => {
    setMode((prev) => "single-player");
  };
  return (
    <>
      <header>header</header>
      <main>
        <h1>Wordchain</h1>
        <p>single-player mode</p>
        <button onClick={handleClick}>start game</button>
      </main>
      <footer>footer</footer>
    </>
  );
}
