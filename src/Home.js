import React from "react";
import { Tab } from "@headlessui/react";
import "./Home.css";

function Home() {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="tab_body">
          <Tab>
            <a href="/">About</a>{" "}
          </Tab>
          &emsp;
          <Tab>
            <a href="/">Facilities</a>{" "}
          </Tab>
          &emsp;
          <Tab>
            <a href="/">About</a>{" "}
          </Tab>
          &emsp;
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

export default Home;
