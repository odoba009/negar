import { ChevronRight, Globe, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnableInternational() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] md:p-6 font-sans">
      <div className="w-full max-w-[440px]">
        {/* Main Card */}
        <div className="bg-white border border-gray-100 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
          
          {/* Header Illustration / Logo Space */}
          <div className='w-full h-40 bg-slate-50 flex items-center justify-center'>
            <img src='negar.svg' className="w-full h-full object-contain" alt="International Transfer Illustration" />
          </div>
          
          <div className="px-8 pb-8">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                International Access
              </h2>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Expand your reach. Enable your account to send and receive payments across 150+ countries instantly.
              </p>
            </div>

            {/* Feature Details */}
            <div className="bg-blue-50/30 rounded-2xl p-5 mb-8 border border-blue-100">
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
                Included Features
              </h4>
              <ul className="space-y-3">
                {[
                  "Real-time mid-market exchange rates",
                  "Multi-bank across Malaysia support",
                  "Lower cross-border transaction fees"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                to="/choose-bank" // Usually requires a quick KYC check
                // to="/verify-identity" // Usually requires a quick KYC check
                className="w-full bg-blue-600 hover:bg-blue-700 text-white no-underline font-semibold py-4 rounded-2xl transition-all active:scale-[0.95] shadow-lg shadow-blue-100 flex items-center justify-center group"
              >
                Enable Global Payments
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

            
            </div>
          </div>

          {/* Footer Branding/Security Note */}
          <div className="px-8 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-center">
            <p className="text-[11px] text-gray-400 flex items-center font-medium italic">
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Verified Global Banking Standard
            </p>
          </div>
        </div>

        {/* Support Link */}
        <p className="text-center mt-8 text-sm text-gray-400">
          Questions about rates? <a href="#" className="text-gray-600 underline underline-offset-4 hover:text-black">View FAQ</a>
        </p>
      </div>
    </div>
  );
}