import { useContext } from "react";
import { Valuable } from "../domain/index";
import ValuableContext from "../context/ValuablesContext";
import { MAX_TOTAL_VALUE, VALUE_EXCEEDED_ERROR } from "../common/constants";

const useValuables = (initialValue?: Valuable[]) => {
  const { valuables, setValuables } = useContext(ValuableContext);

  function createValuable(
    name: string,
    price: string,
    description: string,
    image: string
  ): Valuable {
    return {
      id: valuables ? valuables?.length + 1 : 1,
      name,
      purchasePrice: parseInt(price),
      description,
      photo: image,
    };
  }

  const checkMaxTotalValue = (): boolean => {
    return (
      valuables?.reduce((acc, curr) => {
        return acc + curr.purchasePrice;
      }, 0) < MAX_TOTAL_VALUE
    );
  };

  const addValuable = (
    name: string,
    price: string,
    description: string,
    image: string
  ): void => {
    try {
      const newValuable: Valuable = createValuable(
        name,
        price,
        description,
        image
      );
      if (checkMaxTotalValue()) {
        const newState = [...valuables, newValuable];

        setValuables((preValuables) => [...preValuables, newValuable]);
      } else {
        throw new Error(VALUE_EXCEEDED_ERROR);
      }
    } catch (err) {
      console.error("Error adding valuable", err);
      throw err;
    }
  };

  return {
    addValuable,
  };
};

export default useValuables;
