import AppRouter from './router';
import UserProvider from './context/UserContext';

export default function App() {
  return (
    <>
      <UserProvider>
        <AppRouter />
      </UserProvider>

    </>
  );
}
