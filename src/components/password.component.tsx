import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react'; // Import both icons

const PasswordInput = ({password, onChange}:{password:string, onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}) => {
  
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the state
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-1.5">
      <label className="text-[13px] font-semibold text-gray-400 ml-1">Password</label>
      <div className="relative group">
        <input
          // DYNAMIC TYPE: switches between 'password' and 'text'
          type={showPassword ? "text" : "password"} 
          value={password}
          required
          minLength={4} // Note: HTML uses minLength, not min for strings
          onChange={(e) => onChange(e)}
          className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-[15px]"
        />
        
        {/* Clickable Icon */}
        <button
          type="button" // Important: prevents form submission when clicked
          onClick={togglePasswordVisibility}
          className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors focus:outline-none"
        >
          {showPassword ? (
            <EyeIcon size={16} />
          ) : (
            <EyeOffIcon size={16} />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;