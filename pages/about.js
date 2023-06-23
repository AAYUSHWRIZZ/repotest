import Course from "./components/Course";
import Header from "./components/Header";
//

//export default about;
import { useState,useEffect } from "react";

const about = () => {
    const colors =["red","green","yelloow","purple"]


    const [count, setCount] = useState(0);
    const [color, setcolor] =useState(colors[0]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect( () => {
      console.log("function is called")
      let random_color = colors[Math.floor(Math.random()*colors.length)]
      // console.log(random_color);
      setcolor(random_color);

  } , [count, username]);

function increaseCount() {
  console.log('increasing count');
  setCount(count+1);
}

function getUsername(e) {
  setUsername(e.target.value);
}

function getPassword(e){
  setPassword(e.target.value);
}

function handleClick(e){
  e.preventDefault();
  console.log(username)
  console.log(password)
}   

return(
  
  <div>
      <h1>About Page</h1>

      <button onClick={increaseCount}>Increase Count</button>
      <h2>{count}</h2>
      <h1 style={{"color":color}}>AAYUSH</h1>

      <form>
          <input onChange={(e)=> getUsername(e)}  placeholder="Username" /> <br />
          <input onChange={(e)=> getPassword(e)} type="password" placeholder="Password" />
          <button onClick={(e)=> handleClick(e)} > Submit </button>
      </form>
      
  </div>
)
}

export default about;