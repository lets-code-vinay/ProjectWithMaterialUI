import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { CardComponent } from "./Component/CardComponent";

function App() {
  return (
    <div className="App">
      <Button
        variant="contained"
        disableElevation
        // style={{ backgroundColor: "red" }}
        sx={{ backgroundColor: "red" }}
      >
        Hello World
      </Button>

      <CardComponent />
    </div>
  );
}

export default App;
