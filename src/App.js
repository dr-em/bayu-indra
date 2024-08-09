import "./styles.css";
import {useState} from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [res, setRes] = useState("");


  function handleInput(e) {
    const input = e.target.value;
    const filterInput = input.replace(/[^0-9]/g, "")
    // console.log("filter", filterInput)
    setNumber(filterInput)
  }

  function handleSubmits(){
    if(number.length === 0){
     console.log("fill number first")
     setRes("")
    }
    if(number){
      const reverseNum = parseInt(number.split("").reverse().join(""))
      // console.log("revnum", reverseNum)
      const dif = Math.abs(parseInt(number) - reverseNum)
      // console.log("cek", dif)
      setRes(dif)
    }
  }

  return (
    <div className="App">
      <div>
        Number: <input onChange={handleInput} value={number}/>
        <button onClick={handleSubmits}>Submit</button>
      </div>
      <div>Result: {res}</div>
    </div>
  );
}
