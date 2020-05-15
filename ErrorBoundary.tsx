import React from 'react'

interface ErrorBoundaryState {
    hasError: boolean;
    error: string | null;
}


export default class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }


    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ hasError: true, error: errorInfo.componentStack });
    }

    render() {
        if (this.state.hasError) {
            return <div>{this.state.error}</div>;
        }

        return this.props.children;
    }
}