import { ErrorPage } from 'pages/ErrorPage';
import React, { Suspense, type ErrorInfo, type ReactNode } from 'react';
// import { withTranslation } from 'react-i18next';

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children?: ReactNode
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return (
          <Suspense fallback="">
            <ErrorPage />
          </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
// export default withTranslation()(ErrorBoundary);
