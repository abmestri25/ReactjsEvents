import React,{useState} from 'react';
import './App.css'

// HOOKS in REACTJS
const App = () => {

    const bgcolor = 'purple'
    const [bg, setBg] = useState(bgcolor)

    const [content, setContent] = useState("Hover me !")

    const Changebg = () => {
        let bgcolor = 'yellow'
        setBg(bgcolor)
        setContent("Hurray !")
    }
    const Changebgback = () => {
        let bgcolor = 'purple'
        setBg(bgcolor)
        setContent("How is it ?")
        
    }

    // when u want to return multiple elements
    return(
        <>
        <div className="container" style = {{ backgroundColor : bg }}>
            {/* <h1 className="title" >Welcome to <span className="heading" >ReactJs CLock</span></h1> */}
            
                {/* <h1 className="count">{newTime}</h1> */}
               

                    <button onMouseOver={Changebg} onMouseLeave={Changebgback}  className="clickme">{content}</button>
   
            
        </div>
        </>
    )
};

export default App;