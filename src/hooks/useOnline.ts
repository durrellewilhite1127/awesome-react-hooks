// useOnline.ts

import { useState, useEffect } from "react";

/**
 * @description The useOnline hook is used to check if the user is online.
 * @returns {boolean} - Online status
 * @example
 * const online = useOnline();
 */

const useOnline = (): boolean => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = (): void => {
      setOnline(true);
    };

    const handleOffline = (): void => {
      setOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
};

export default useOnline;
