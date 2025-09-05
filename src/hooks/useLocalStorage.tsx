import { useState } from "react";

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error al leer localStorage para la clave ${key}`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStorage =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStorage);
      window.localStorage.setItem(key, JSON.stringify(valueToStorage));
    } catch (error) {
      console.error(
        `Error al guardar en localStorage para la clave "${key}"`,
        error
      );
    }
  };

  //   const removeValue = () => {
  //     try {
  //       window.localStorage.removeItem(key);
  //       setStoredValue(initialValue);
  //     } catch (error) {
  //       console.error(
  //         `Error al eliminar de localStorage para la clave "${key}"`,
  //         error
  //       );
  //     }
  //   };

  return [
    storedValue,
    setValue,
    // removeValue
  ] as const;
};

export default useLocalStorage;
