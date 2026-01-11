import { useState, useEffect } from 'react';

const ResendTimer = () => {
  const INITIAL_TIME = 330;
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_TIME);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    
    if (secondsLeft > 0) {
      timer = window.setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
      if (timer) clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [secondsLeft]);

  // Format calculation
  const minutes = Math.floor(secondsLeft / 60);
  const remainderSeconds = secondsLeft % 60;

  // Format to 00:00
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${remainderSeconds.toString().padStart(2, '0')}`;

  const handleResend = () => {
    setSecondsLeft(INITIAL_TIME);
    setCanResend(false);
    console.log("New code sent!");
  };

  return (
    <div className="mt-6 text-center">
      {canResend ? (
        <button
          onClick={handleResend}
          className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 transition-all"
        >
          Resend security code
        </button>
      ) : (
        <p className="text-[13px] text-gray-400 font-medium">
          Resend code in <span className="font-mono text-gray-700 font-bold">{formattedTime}</span>
        </p>
      )}
    </div>
  );
};

export default ResendTimer;