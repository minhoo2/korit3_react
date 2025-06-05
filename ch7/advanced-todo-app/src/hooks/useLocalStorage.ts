import { useState } from "react";

export function useLocalStorage<T>(key: string, initualValue: T) {
  const [ storedValue, setStoredValue ] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initualValue;
    } catch (error) {
      console.error('LocalStorage error: ', error);
      return initualValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('LocalStorage error : ', error);
    }
  };

  return [ storedValue, setValue ] as const;
};