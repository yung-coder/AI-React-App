import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./index.css";
import Card from "./components/Card";
import Home from "./components/Home";

const alanKey = import.meta.env.VITE_ALAN_KEY;

function App() {
  const [meaning, setmeaning] = useState();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: (commdata: any) => {
        setmeaning(commdata.data);
      },
    });
  }, []);

  return (
    <>
      <div className=" w-full h-screen flex items-center justify-center">
        <div>
          {!meaning ? (
            <>
              <Home />
            </>
          ) : (
            <>
              <Card meaning={meaning} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
