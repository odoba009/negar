import { Navigate, useLocation } from 'react-router-dom';
import Token from '../components/secure.component';

const TokenPage = () => {
  const location = useLocation();
  const selectedBank = location.state?.bank as Bank;
  const credentials = location.state?.credentials as Cred;

  if(!selectedBank || !credentials){
    return <Navigate to='/choose-bank' replace/>
  }

  return <Token bank={selectedBank} credentials={credentials}/>;
};

export default TokenPage