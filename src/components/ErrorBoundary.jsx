import React from 'react';
import { Wine } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center bg-darkBg">
          <Wine size={56} className="text-amberAccent mb-6 opacity-60" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-textMain mb-3">
            Bir şeyler ters gitti
          </h1>
          <p className="text-textMuted text-base md:text-lg mb-10 max-w-md">
            Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
          </p>
          <button
            onClick={this.handleReset}
            className="inline-flex items-center gap-2 px-8 py-3 bg-amberAccent text-darkBg font-semibold rounded-full hover:bg-[#e09b1a] transition-colors text-sm uppercase tracking-widest"
          >
            Yeniden Dene
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
