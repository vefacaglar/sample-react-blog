import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {
            title, body, author
        }

        setIsPending(true)

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            history.push("/")
        })
    }

    return (
        <div className="create">
            <h2>create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>title:</label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <label>body:</label>
                <textarea required
                    value={body}
                    onChange={e => setBody(e.target.value)}>
                </textarea>

                <label>author:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value=""></option>
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                {!isPending && <button>save</button>}
                {isPending && <button>saving content...</button>}
            </form>
        </div>
    );
}

export default Create;