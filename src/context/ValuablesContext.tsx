import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Valuable } from "../domain";

type IValuablesContext = {
  valuables: Valuable[];
  setValuables: Dispatch<SetStateAction<Valuable[]>>;
}

const ValuablesContext = createContext<IValuablesContext>({} as IValuablesContext);

export function ValuablesContextProvider(props: { children: React.ReactNode }) {
  const [valuables, setValuables] = useState<Valuable[]>([]);

  return (
    <ValuablesContext.Provider value={{ valuables, setValuables }}>
      {props.children}
    </ValuablesContext.Provider>
  );
}

export default ValuablesContext;
