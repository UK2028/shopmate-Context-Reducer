
import {Header} from "./components";
import { AllRoutes } from "./allRoutes/AllRoutes";

import './App.css';

function App() {

  const items = [
    {
      "id":101,
      "name":"Sony Wh-Ch510 Bluetooth Wireless",
      "price":149,
      "image":require("./assets/1001.png")
    },
    {
      "id":102,
      "name":"boAt Rockerz 450",
      "price":49,
      "image":require("./assets/1002.png")
    },
    {
      "id":103,
      "name":"JBL Tune 760NC",
      "price":179,
      "image":require("./assets/1003.png")
    },
    {
      "id":104,
      "name":"Logitech H111 Wired",
      "price":39,
      "image":require("./assets/1004.png")
    },
    {
      "id":105,
      "name":"APPLE Airpods Max Bluetooth Headset",
      "price":199,
      "image":require("./assets/1005.png")
    },
    {
      "id":106,
      "name":"ZEBRONICS Zeb-Thunder Wired",
      "price":29,
      "image":require("./assets/1006.png")
    }
  ];

  return (
    <div className="App">
      <Header />
      <AllRoutes items={items} />
    </div>
  );
}

export default App;
