import { useState, useEffect } from "react"

function useGithubUser(){
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
    
    return{
        data,
        handleUsername,
    }
}

export default useGithubUser