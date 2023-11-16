import { useState } from "react";

const useFatch = (url) => {
    const [data, setData] useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = axios.get(url)
                setData(res.data);
            } catch(err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    },[url])
}