import { useLocation } from 'react-router-dom';
import BankLogin from '../components/login.component';

const LoginPage = () => {
  const location = useLocation();
  const selectedBank:Bank = location.state?.bank;

  return <BankLogin bank={selectedBank} />;
};

export default LoginPage