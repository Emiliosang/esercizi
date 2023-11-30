import { useEffect, useState } from "react"

function GithubUser() {
    const [data, setData] = useState(null)
    const [username, setUsername] = useState(null)

    async function fetchGithubUser() {
        const response = await fetch(`https://api.github.com/search/users?q=${username}`)
        const json = await response.json()
        setData(json)
    }
    function handleUsername(e) {
        e.preventDefault()
        setUsername(e.target.username.value)
    }
    useEffect(() => {
        fetchGithubUser(username)
    },[username])
    return (
        <>
            <form onSubmit={handleUsername}>
                <input type="text" name="username" />
                <button type="submit" >Fetch</button>
            </form>
            {data && <h1>Username: {data.items[0].login}</h1>}
            {data && <h2>ID: {data.items[0].id}</h2>}
            {data && <img srcSet={data.items[0].avatar_url}></img>}
        </>
    )
}

export default GithubUser