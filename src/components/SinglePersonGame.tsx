import { gameMode } from "../types";
import { InputPanel } from "./InputPanel";
import { WordDisplay } from "./WordDisplay";

interface SinglePersonGameInterface {
  wordpack: string[];
  setMode: React.Dispatch<React.SetStateAction<gameMode>>;
}

export function SinglePersonGame({
  setMode,
  wordpack,
}: SinglePersonGameInterface): JSX.Element {
  const endgame = () => {
    setMode((prev) => "start");
  };
  return (
    <>
      <header>Game</header>
      <main>
        <button onClick={endgame}>end game</button>
        <WordDisplay />
        <InputPanel />
        {wordpack.map((word) => (
          <p key={word}>{word}</p>
        ))}
      </main>
      <footer>footer</footer>
    </>
  );
}
