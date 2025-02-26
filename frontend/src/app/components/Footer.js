'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Web<span className="text-blue-600">AI</span>
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/chatbot" className="text-gray-600 hover:text-blue-600 transition-colors">
              AI Chat Support
            </Link>
            <Link href="/url-processor" className="text-gray-600 hover:text-blue-600 transition-colors">
              Website Analysis
            </Link>
            <Link href="/text-processor" className="text-gray-600 hover:text-blue-600 transition-colors">
              Direct Input
            </Link>
          </nav>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            © 2024 WebAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
