import { useState } from "react"

const Home = () => {
    const [name, setName] = useState("mario")
    const [age, setAge] = useState(33)

    const handleClick = (e) => {
        setName("luigi")
        setAge(34)
    }

    return (
        <div className="home">
            <h2>home page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>
                click me
            </button>
        </div>
    );
}

export default Home;