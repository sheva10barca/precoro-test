import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from './MainStack';
import { AuthenticationStack } from './AuthenticationStack';

export const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
};
