import React from 'react';
 import Profile from './Profile/Profile';
import user from './Data/user.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import friends from './Data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './Data/transactions.json';
import { StyleSheetManager } from 'styled-components';

const App = () => {
  return (
    <div>
     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats"
        stats={[
          { id: '1', label: '.docx', percentage: 4, color: 'red' },
          { id: '2', label: '.mp3', percentage: 14, color: 'green' },
          { id: '3', label: '.pdf', percentage: 41, color: 'blue' },
          { id: '4', label: '.mp4', percentage: 12, color: 'orange' },
        ]} />

      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isOnline'}>
      <FriendList friends={friends} />
      </StyleSheetManager>
      <TransactionHistory items={transactions} />

    </div>
   
    
  );
};
export default App;