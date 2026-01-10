import { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const BankLogin = ({bank}:BankLoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F5F7] p-4 font-sans">
      {/* Outer Card */}
      <div className="w-full max-w-[420px] bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
        
        {/* Top Navigation */}
        <div className="px-6 pt-6 flex justify-between items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="px-8 pb-8 pt-2">
          {/* Bank Logo Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6 shadow-inner border border-gray-100">
              <img 
                src={bank.logo} 
                alt={bank.name} 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-[#323338] mb-1">Sign in to {bank.name}</h1>
            <p className="text-gray-500 text-[15px] text-center leading-relaxed">
              Connect your bank instantly and securely.
            </p>
          </div>

          {/* Inner Form Card - The "Nested" look from your image */}
          <div className="bg-[#FBFCFD] border border-gray-100 rounded-[24px] p-6 mb-6">
            <form className="space-y-5">
              {/* Username Input */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-gray-400 ml-1">Username</label>
                <div className="relative group">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-[15px]"
                  />
                  <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-gray-400 ml-1">Password</label>
                <div className="relative group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-[15px]"
                  />
                  <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                </div>
              </div>

              {/* Primary Action */}
              <button 
                type="submit"
                className="w-full bg-[#111827] hover:bg-black text-white font-semibold py-4 rounded-xl mt-2 flex items-center justify-center transition-all active:scale-[0.98] shadow-lg shadow-gray-200 group"
              >
                Continue
                <ChevronRight size={18} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>

            {/* Help Link */}
            <div className="mt-6 text-center">
              <a href="#" className="text-blue-600 font-medium text-sm hover:underline underline-offset-4">
                Trouble signing in?
              </a>
            </div>
          </div>

          {/* Bottom Security Branding */}
          <div className="flex flex-col items-center space-y-2 opacity-60">
             <div className="flex items-center space-x-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Secured by</span>
                <span className="text-[11px] font-black text-gray-900 tracking-tighter italic">PLAID</span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">SECURE DATA ENCRYPTION</span>
             </div>
             <p className="text-[10px] text-gray-400 font-medium">All data is encrypted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankLogin;