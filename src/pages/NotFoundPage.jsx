import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { KhatamStar } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';

export default function NotFoundPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-transparent text-[#29251F] flex items-center justify-center py-32 px-6">
        <div className="max-w-md w-full text-center space-y-8">
          
          <div className="w-16 h-16 mx-auto rounded-xs bg-[#29251F] text-[#FAF6EE] flex items-center justify-center">
            <KhatamStar className="w-8 h-8 text-[#B59661]" />
          </div>

          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#68694C] font-semibold">
              404 · Unmapped Path
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-[#29251F] uppercase leading-tight tracking-tight">
              YOU TOOK<br />
              <span className="font-normal text-[#68694C]">A QUIET TURN.</span>
            </h1>
          </div>

          <div className="pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#29251F] text-[#FAF6EE] text-xs font-medium tracking-[0.25em] uppercase rounded-xs hover:bg-[#363428] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
