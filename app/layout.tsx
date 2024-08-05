"use client";
import "./globals.css";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ErrorBoundary from "./components/error/ErrorBoundary";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ErrorBoundary>
          <Provider store={store}>{children}</Provider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
