import { useState } from "react"
import BlogList from "./bloglist"

const Home = () => {
    var [name,setName] = useState(null)
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

function handleClick(event){
    console.log("the click button is pressed \nevent is:" + event)
}
function handleChange(event){
    setName(event.target.value)
}

    return ( 
        <div>
            <div>the body container of this application</div>
            <h2>Hello {name ? name: "There"}</h2>
           <BlogList blogs={blogs}  title={"All Blogs"}/>
            <button onClick={handleClick}>Click me to log</button>
            <input onChange={handleChange} text="input"/>
        </div>
     );
}
 
export default Home;