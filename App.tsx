import { StatusBar } from 'expo-status-bar';

import { Navigation } from './navigation/Navigation';
import { AuthProvider } from './providers/AuthProvider';

import { FontLoader } from './components/FontLoader';

export default function App() {
  return (
    <FontLoader>
      <StatusBar style="dark" />
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </FontLoader>
  );
}
