import { useEffect, useState } from "react"

function GithubUser({ username }) {
    const [data, setData] = useState(null)

    async function fetchGithubUser(e) {
        const response = await fetch(`https://api.github.com/search/users?q=${username}`)
        const json = await response.json()
        setData(json)
    }
    useEffect(() => {
        fetchGithubUser(username)
    },[username])
    return (
        <>
        {data && <h1>Username: {data.items[0].login}</h1>}
        {data && <h2>ID: {data.items[0].id}</h2>}
        {data && <img srcSet={data.items[0].avatar_url}></img>}
        </>
    )
}

export default GithubUser