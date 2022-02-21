import InventoryScreen from "../screens/InventoryScreen";
import renderer from "react-test-renderer";
import React from "react";
import { ValuablesContextProvider } from "../context/ValuablesContext";

const navigation: any = { navigate: jest.fn() };
const route: any = { name: "Inventory" };

const whenStable = async () => {
  await renderer.act(async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
  });
};

describe("test Inventory Screen is rendered", () => {
  it("foo", async () => {
    const screen = renderer.create(
      <ValuablesContextProvider>
        <InventoryScreen navigation={navigation} route={route} />
      </ValuablesContextProvider>
    );

    expect(screen.toJSON()).toMatchSnapshot();

    await whenStable();
  });
});
