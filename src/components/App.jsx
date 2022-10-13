import { Profile } from './Profile/Profile';
import user from 'user.json';

export const App = () => {
  return (
    <div
      style={{
        padding: '120px',
      }}
    >
      <Profile info={user}></Profile>
    </div>
  );
};
