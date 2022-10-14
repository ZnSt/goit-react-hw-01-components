import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: '120px',
      }}
    >
      <Profile info={user}></Profile>
      <Statistics stats={data} title="Upload stats"></Statistics>
      <FriendList best={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
};
