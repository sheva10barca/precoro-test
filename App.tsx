import { StatusBar } from 'expo-status-bar';

import FontLoader from './components/FontLoader';
import { Navigation } from './navigation/Navigation';
import { AuthProvider } from './providers/AuthProvider';

export default function App() {
  return (
    <FontLoader>
      <StatusBar style="auto" />
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </FontLoader>
  );
}
