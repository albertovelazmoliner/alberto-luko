import InventoryScreen from "../screens/InventoryScreen";
import useValuables from "../hooks/useValueables";
import renderer from "react-test-renderer";
import React, { Dispatch, SetStateAction } from "react";
import ValuablesContext, {
  ValuablesContextProvider,
} from "../context/ValuablesContext";
import { Valuable } from "../domain";
import { renderHook } from "@testing-library/react-hooks";

const navigation: any = { navigate: jest.fn() };
const route: any = { name: "Inventory" };

const whenStable = async () => {
  await renderer.act(async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
  });
};

const wrapper = (props: { children: React.ReactNode }) => (
  <ValuablesContextProvider>{props.children}</ValuablesContextProvider>
);

let resultValuables: Valuable[] = [];

const mockSetValuables = jest.fn().mockImplementation((valuable) => {
  resultValuables = [...resultValuables, valuable];
  return resultValuables;
});

const mockUseContext = jest.fn().mockImplementation(() => ({
  valuables: [],
  setValuables: mockSetValuables,
}));

describe("Test useContext", () => {
  const realUseContext = React.useContext;
  beforeEach(() => {
    React.useContext = mockUseContext;
  });
  afterEach(() => {
    React.useContext = realUseContext;
  });
  it("foo", () => {
    const { result } = renderHook(() => useValuables(), { wrapper });
    expect(resultValuables).toHaveLength(0);

    result.current.addValuable("foo", "300", "baz", "file://qux");
    expect(mockSetValuables).toHaveBeenCalled();
    expect(resultValuables).toHaveLength(1);
  });
});
