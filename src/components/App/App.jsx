import { useState } from 'react';
import userData from "./userData.json";
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from './transactions.json';



function App() {

  return (
    <>
    <Profile name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
  />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App
