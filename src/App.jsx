import {KgButton} from "./KgButton";
import Hello from "./Hello";
import Random from "./Random";

function App() {
  return <div>
    <h1 className="text-center" >
      This is simple react project
    </h1>
    <br />
    <Hello />
    <Random></Random>
    <Random></Random>
    <KgButton />
  </div>
}

export default App;