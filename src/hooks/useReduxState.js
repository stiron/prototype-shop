import { useContext, useState, useEffect } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useReduxState() {
  const store = useContext(AppStateContext);
  //   const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscirbe(() => {
      //   setState(store.getState());
    });
    return () => {
      unsubscribe();
    };
  }, [store]);
}
