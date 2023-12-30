import { StatusBar } from 'expo-status-bar';

import FontLoader from './components/FontLoader';
import { Navigation } from './navigation/Navigation';

export default function App() {
  return (
    <FontLoader>
      <StatusBar style="auto" />
      <Navigation />
    </FontLoader>
  );
}
