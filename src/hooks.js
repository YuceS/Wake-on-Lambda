// hooks.js
import { useState, useEffect } from "react";


function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {



      
    const response = await fetch(url, {   
        method: "GET", 
        headers: new Headers ({
            'Authorization': 'Bearer '+res2.getJwtToken()
         }),
      cache: 'no-cache',
      mode:'cors'
    });

    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };