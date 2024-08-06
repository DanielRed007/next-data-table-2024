// components/ErrorBoundary.tsx

import React, { Component, ReactNode } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex justify-center items-center bg-violet-100 dark:bg-lime-100 h-screen'>
          <div className='text-center'>
            <div className='flex justify-center items-center'>
              <ExclamationTriangleIcon className='size-40 text-red-700' />
              <h1 className='text-7xl font-light'>Upps!</h1>
            </div>
            <h1 className='text-3xl font-bold'>Something went wrong.</h1>
            <p className='mt-4 text-lg'>{this.state.error?.message}</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
