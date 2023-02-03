import React, { useEffect, useState } from "react";

function useFetchData(url) {
    const [data, setData] = useState([])

    //component mounts

    async function getData() {
        const resp = await fetch(url)
        const data = await resp.json()
        setData(data)
    }

    useEffect(() => {
        getData()
    }, [url])


    return [data]
}

export default useFetchData