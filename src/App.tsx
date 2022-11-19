import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { SinglePersonGame } from "./components/SinglePersonGame";
import { gameMode } from "./types";
import { getCountryNames } from "./utils/getCountryNames";

function App(): JSX.Element {
  const [mode, setMode] = useState<gameMode>("start");
  const [wordPack, _] = useState<string[]>(getCountryNames());
  return (
    <>
      {mode === "start" && <LandingPage setMode={setMode} />}
      {mode === "single-player" && (
        <SinglePersonGame setMode={setMode} wordpack={wordPack} />
      )}
    </>
  );
}

export default App;
