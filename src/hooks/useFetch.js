import { useEffect, useState } from "react";



const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/${url}`
                );
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const result = await res.json();
                setData(result)
            } catch (err) {
                console.error("Fetch error:", err)
                setError(err.message);
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, loading, error };
}

export default useFetch;