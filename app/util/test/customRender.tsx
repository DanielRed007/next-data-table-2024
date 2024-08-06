import React, { ReactElement, ReactNode } from "react";
export * from "@testing-library/react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";

const AllProviders = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
