import React from 'react'

interface ErrorBoundaryState {
    hasError: boolean;
    error: React.ErrorInfo;
}


export default class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }


    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <div>{this.state.error.componentStack}</div>;
        }

        return this.props.children;
    }
}