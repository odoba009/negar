interface Bank {
  id: string;
  name: string;
  logo: string;
  color: string;
}

interface BankLoginProps {
  bank: Bank;
}