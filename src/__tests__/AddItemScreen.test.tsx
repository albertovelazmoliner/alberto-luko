import AddItemScreen from "../screens/AddItemScreen";
import renderer from "react-test-renderer";
import React from "react";
import { ValuablesContextProvider } from "../context/ValuablesContext";

const navigation: any = { navigate: jest.fn() };
const route: any = { name: "AddItem" };

const whenStable = async () => {
  await renderer.act(async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
  });
};

describe("test AddItem Screen is rendered properly", () => {
  it("foo", async () => {
    const screen = renderer.create(
      <ValuablesContextProvider>
        <AddItemScreen navigation={navigation} route={route} />
      </ValuablesContextProvider>
    );

    expect(screen.toJSON()).toMatchSnapshot();

    await whenStable();
  });
});
