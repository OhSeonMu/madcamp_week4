import { useEffect, useState } from 'react';

const useInterval = (callback, delay) => {
  const [savedCallback, setSavedCallback] = useState(null) // useState사용

  useEffect(() => {
    setSavedCallback(callback);
  }, [callback]);
  
  useEffect(() => {
    console.log(savedCallback());
    const executeCallback = () => {
      savedCallback();
    };

    const timerId = setInterval(executeCallback, delay);

    return () => clearInterval(timerId);
  }, []);
};

export default useInterval;