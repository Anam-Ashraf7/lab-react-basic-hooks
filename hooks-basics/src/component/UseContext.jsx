import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext(){

    const [text,setText] =  useState(false)
    const [likes,setLike] =  useState(0)

    useEffect(() => {
        alert("Content button is clicked")
    },[text])

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
      {text && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quibusdam necessitatibus optio. Esse, provident eveniet magni dolor mollitia molestiae dolorem voluptatibus, facere ad officiis maxime fuga repudiandae obcaecati, adipisci et.</p> }
      <button onClick={() => setText(!text)}>Content</button>
      <h3>{likes}</h3>
      <button onClick={() => setLike(likes + 1)}>Likes</button>
    </div>
  )
}

export default UseContext;