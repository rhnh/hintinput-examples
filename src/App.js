import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BlueBar } from "./components/BlueBar";
import { Hintput } from "@ribrary/hintput";
const items = [
  "Roberto Carlos",
  "Roberto Firmino",
  "Roberto Baggio",
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Neymar",
  "Robert Lewandowski",
  "Kylian Mbapp",
  "Kevin De Bruyne",
  "Virgil van Dijk",
  "Sadio Man",
  "Ronaldo",
  "Zlatan Ibrahimovic",
  "Kylian Mbappe",
  "Zinedine Zidane",
];
function App() {
  return (
    <div className="App">
      <h1>
        Type any of the names from the list below in any of follow search/input
        boxes.
      </h1>

      <header className="App-header">
        <section style={{ padding: "30px " }}>
          {items.map((n) => (
            <span style={{ color: "#282c34" }}>{n}, </span>
          ))}
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "150px",
          }}
        >
          <div>
            <p>Inline Mode</p>
            <Hintput
              style={{ color: "#1d3557", padding: "5px" }}
              items={items}
              placeholder="Type a name ...Inline Mode"
              isInline={true}
            />
          </div>
          <div>
            {/* <p>Multiple suggestion Mode</p> */}
            <Hintput
              items={items}
              placeholder="Type a name  ...Normal Mode"
              style={{ color: "#d62828", padding: "3px" }}
              fadePercentage={0.55}
              textDirection="right"
            />
          </div>
          <div>
            <p>Custom style</p>

            <BlueBar items={items} />
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
