import { useState } from 'react';
import { Search } from 'lucide-react'; // Optional: for the search icon
import { useNavigate } from 'react-router-dom';

const BankSelector = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Example data structure - easy to scale to 50+ items
    const banks: Bank[] = [
        { id: 'may', name: 'Maybank', logo: '/src/assets/may.png', color: '#ffcf01' },
        { id: 'cim', name: 'CIMB Group', logo: '/src/assets/cim.png', color: '#d71e28' },
        { id: 'hong', name: 'Hong-Leong Bank', logo: '/src/assets/hong.png', color: '#012169' },
        { id: 'rhb', name: 'RHB', logo: '/src/assets/rh.png', color: '#00355f' },
        { id: 'public', name: 'Public Bank Berhad', logo: '/src/assets/public.png', color: '#00355f' },
        { id: 'affin', name: 'Affin Bank', logo: '/src/assets/affin.png', color: '#00355f' },
        { id: 'alliance', name: 'Alliance Bank', logo: '/src/assets/alliance.png', color: '#00355f' },
        { id: 'rakyat', name: 'Bank Rakyat', logo: '/src/assets/rakyat.webp', color: '#00355f' },
    ];

    const filteredBanks = banks.filter(bank =>
        bank.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const navigate = useNavigate();

    const handleBankClick = (selectedBank: Bank) => {
        navigate('/login', { state: { bank: selectedBank } });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

                {/* Header */}
                <div className="p-6 pb-4">
                    <h3 className="text-xl font-semibold text-gray-900 text-center">Select your bank</h3>
                    <p className="text-sm text-gray-500 text-center mt-1">Plaid connects to over 11,000 financial institutions.</p>

                    {/* Search Bar */}
                    <div className="relative group mt-6">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                        </div>
                        <input
                            type="text"
                            autoFocus
                            placeholder="Search all banks"
                            className="block w-full pl-10 pr-3 py-[10px] border border-gray-200 rounded-xl bg-white focus:ring-0 focus:border-black transition-all outline-none text-[15px] text-gray-900 placeholder:text-gray-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Bank Grid/List */}
                <div className="max-h-[600px] overflow-y-auto px-4 pb-6 custom-scrollbar">
                    <div className="grid grid-cols-2 gap-4">
                        {filteredBanks.map((bank: Bank) => (
                            <button
                                key={bank.id}
                                className="flex flex-col items-center justify-center p-4 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all group"
                                onClick={()=>handleBankClick(bank)}
                            >
                                <div className="w-full h-full flex items-center justify-center mb-2">
                                    <img
                                        src={bank.logo}
                                        alt={`${bank.name} logo`}
                                        className="max-w-full max-h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                                <span className="text-[11px] font-medium text-gray-600 text-center truncate w-full">
                                    {bank.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    {filteredBanks.length === 0 && (
                        <div className="text-center py-10">
                            <p className="text-gray-400 text-sm">No banks found.</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[1.5px]">
                            Secure
                        </span>
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[1.5px]">
                            •
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[1.5px]">
                            Negara
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankSelector;

