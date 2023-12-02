import { useState, useEffect } from "react"

export default function useGithubUser(username) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(username){
        setLoading(true)
        setError(null)

        try{
            const response = await fetch(`https://api.github.com/search/users?q=${username}`)
            const json = await response.json()
            setData(json)

        } catch (error) {
            setError(error)
            setData(null)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGithubUser(username)
    }, [username])

    return{data, loading, error}
}