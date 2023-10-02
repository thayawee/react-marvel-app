import { useEffect, useRef } from "react";

const useTitle = (title: string) => {
  const defaultTitle = useRef<string>(document.title);

  useEffect(() => {
    document.title = title || defaultTitle.current;
  }, [title]);
};

export default useTitle;
