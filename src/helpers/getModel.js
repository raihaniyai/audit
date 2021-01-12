import { useState, useEffect } from 'react';
import * as cocossd from "@tensorflow-models/coco-ssd";

const GetModel = () => {
  const fetcher = cocossd.load();
  const [result, setResult] = useState({ loading: true, returnData: null });

  useEffect(() => {
    if (!result.returnData) {
      fetcher.then(res => setResult({ loading: false, returnData: res }));
    }
  }, [fetcher, result.returnData]);
  
  return { loading: result.loading, returnData: result.returnData };
};

export default GetModel;