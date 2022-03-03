import { FC } from 'react';

import s from './txToast.module.scss';

interface IProps {
  txId: string;
}

const TxToast: FC<IProps> = ({ txId }) => (
  <span>
    Polygon scaner tx:{' '}
    <a
      className={s.link}
      target="_blank"
      rel="noreferrer noopener"
      href={`https://polygonscan.com//tx/${txId}`}
    >
      {`${txId.slice(0, 5)}...${txId.slice(-5)}`}
    </a>
  </span>
);

export default TxToast;
