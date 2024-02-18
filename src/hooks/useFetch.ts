import { useState } from "react";

export const useFetch = (callback: (s?: string) => Promise<void>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetching = async (...args: string[] | []) => {
    try {
      setErr("");
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      if (e instanceof Error) {
        console.log(`Error in fetching ${e.name}`, e.message);
      }
      setErr("Try one more time with reload");
    } finally {
      setIsLoading(false);
    }
  };
  return { fetching, isLoading, err };
};
