import { useState } from "react";
import "./index.scss";

import { Plus, Ellipsis } from "lucide-react";

// Components
import CardAddTask from "./components/CardAddTask";

const App = () => {
  return (
    <main className="container">
      <CardAddTask />
    </main>
  );
};

export default App;
