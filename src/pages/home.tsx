// import React from 'react';
import { ChevronRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ActionRequired() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] p-6 font-sans">
      <div className="w-full max-w-[440px]">
        {/* Main Card */}
        <div className="bg-white border border-gray-100 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="p-8">

            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-4">
                <ShieldAlert className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Connection Required
              </h2>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                To maintain the security of your financial data, we need you to re-authenticate your linked account.
              </p>
            </div>

            {/* Status Details */}
            <div className="bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Current Status
              </h4>
              <ul className="space-y-3">
                {[
                  "Account connection expired",
                  "Transactions temporarily paused",
                  "Pending security verification"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
             <Link 
  to="/choose-bank" 
  className="w-full bg-gray-900 hover:bg-black text-white no-underline font-semibold py-4 rounded-2xl transition-all active:scale-[0.95] shadow-lg shadow-gray-200 flex items-center justify-center group"
>
                Verify Account Details
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="w-full bg-transparent hover:bg-gray-50 text-gray-500 font-medium py-3 rounded-xl transition-colors text-sm text-center">
                Remind me later
              </button>
            </div>
          </div>

          {/* Footer Branding/Security Note */}
          <div className="px-8 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-center">
            <p className="text-[11px] text-gray-400 flex items-center font-medium">
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secured with 256-bit encryption
            </p>
          </div>
        </div>

        {/* Support Link */}
        <p className="text-center mt-8 text-sm text-gray-400">
          Having trouble? <a href="#" className="text-gray-600 underline underline-offset-4 hover:text-black">Contact Support</a>
        </p>
      </div>
    </div>
  );
}