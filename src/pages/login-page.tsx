import { Navigate, useLocation } from 'react-router-dom';
import BankLogin from '../components/login.component';

const LoginPage = () => {
  const location = useLocation();
  const selectedBank:Bank = location.state?.bank as Bank;

  if(!selectedBank){
    return <Navigate to='/choose-bank' replace/>
  }

  return <BankLogin bank={selectedBank} />;
};

export default LoginPage