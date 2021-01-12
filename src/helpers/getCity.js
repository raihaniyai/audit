// https://nominatim.openstreetmap.org/reverse?format=json&lat=-6.200000&lon=106.816666&zoom=18&addressdetails=1
import { useState, useEffect } from 'react';

const GetCity = (lat, lon) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat?.toString()}&lon=${lon?.toString()}&zoom=18&addressdetails=1`
  const [result, setResult] = useState({ loading: true, returnData: null });

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setResult({ loading: false, returnData: result });
        }
      )
  }, [result.loading, result.returnData])
  
  return { loading: result.loading, returnData: result.returnData };
};

export default GetCity;