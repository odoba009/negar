import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Check, ShieldCheck } from 'lucide-react';

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // Extract 'bank' from the URL: /success?bank=Chase
  const bankName = searchParams.get('bank') || 'Malaysian';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] p-4 font-sans text-[#323338]">
      <div 
        className={`w-full max-w-[420px] bg-white rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="p-10 flex flex-col items-center text-center">
          
          {/* Animated Success Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-25" />
            <div className="relative w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
              <Check className="text-white w-10 h-10 stroke-[3px]" />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-3">All set!</h3>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            Your <span className="text-gray-900 font-semibold">{bankName}</span> account has been successfully linked and verified.
          </p>

          {/* Feature Confirmation Card */}
          <div className="w-full bg-gray-50 rounded-2xl p-5 mb-10 border border-gray-100">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-900 uppercase tracking-tight">Security Check Passed</p>
                <p className="text-[12px] text-gray-500">Encrypted connection active</p>
              </div>
            </div>
          </div>

         
          {/* Support Link */}
        <p className="text-center mt-8 text-sm text-gray-400">
          Need to link another account? <br /> <button onClick={() => navigate('/choose-bank', {replace: true})} className="text-gray-600 font-semibold hover:underline">Click here</button>
        </p>

          <button 
            onClick={() => navigate('/', {replace: true})}
            className="mt-6 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
          >
            Done
          </button>
        </div>

        {/* Branding Footer */}
        <div className="bg-gray-50/50 py-4 border-t border-gray-50 flex justify-center">
          <div className="flex items-center space-x-2 opacity-30 grayscale">
            <span className="text-[10px] font-black uppercase tracking-widest">Plaid</span>
            <div className="w-1 h-1 rounded-full bg-black" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;