import { useState, useEffect } from 'react';

export default function useFetch(action, url, opts = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!action) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await fetch(url, opts);
        if (!response.ok) throw new Error(response.statusText);
        if (response.status === 204) setData([]);
        else {
          const data = await response.json();
          setData(data);
        }
      } catch (e) {
        setError(`Ошибка загрузки данных с ресурса ${url} (${e.message})`);
        setTimeout(() => setError(null), 3000);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, action]);

  return [{ data, loading, error }];
}
