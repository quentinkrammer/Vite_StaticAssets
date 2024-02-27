import { useState } from "react";
import { Logo } from "./logos";

function App() {
  const [showSecondReactLogo, setShowSecondReactLogo] = useState(false);
  const [showViteLogo, setShowViteLogo] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "10rem" }}>
      <button onClick={() => setShowSecondReactLogo((old) => !old)}>
        Show second React logo
      </button>
      <button onClick={() => setShowViteLogo((old) => !old)}>
        Show Vite logo
      </button>
      <Logo logo="react" />
      {showSecondReactLogo && <Logo logo="react" />}
      {showViteLogo && <Logo logo="vite" />}
    </div>
  );
}

export default App;
