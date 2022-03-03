import { useCallback, VFC } from 'react';
import { notify } from 'utils/toaster';

import s from './Password.module.scss';

interface IProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Password: VFC<IProps> = ({ setIsLogin }) => {

  const ethWindow = window as any;

  const loginWithMetaMask = useCallback(async () => {
    if (ethWindow.ethereum) {
      const accounts = await ethWindow.ethereum.request({ method: 'eth_requestAccounts' });
      const userAcc = accounts[0];
      notify('Wallet connected!', 'success');
      ethWindow.userWalletAddress = userAcc;
      setIsLogin(true);
    }
    // eslint-disable-next-line
  }, [ethWindow.ethereum, ethWindow.userWalletAddress]);

  return (
    <section className={s.pass}>
      <div className={s.block}>
        <button onClick={loginWithMetaMask} type="button">
          Connect Your Wallet
        </button>
      </div>
    </section>
  );
};

export default Password;
