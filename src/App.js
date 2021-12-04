import Profile from './components/profile/Profile';
import user from './components/user.json';

export default function App() {
  return (
    <div>
      <Profile
        url={user.avatar}
        userName={user.username}
        userTag={user.tag}
        locate={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
