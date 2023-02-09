import { useEffect, useState } from "react"

export function useFetch(url) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    async function getData() {
        const resp = await fetch(url)
        const data = await resp.json()
        setData(data)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [url])

    return { loading, data }
}