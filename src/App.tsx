import React, { useState } from "react";
import ClownForm from "./ClownForm";
import ClownList from "./ClownList";

interface Clown {
  name: string;
  type: string;
  image: string;
}

const App: React.FC = () => {
  const [clowns, setClowns] = useState<Clown[]>([]);

  const addClown = (clown: Clown) => {
    setClowns([...clowns, clown]);
  };

  return (
    <div>
      <h1>Clown Tracker</h1>
      <ClownForm addClown={addClown} />
      <ClownList clowns={clowns} />
    </div>
  );
};

export default App;
