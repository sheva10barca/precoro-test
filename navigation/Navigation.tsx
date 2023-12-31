import { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from './MainStack';
import { AuthenticationStack } from './AuthenticationStack';
import { AuthContext } from '../providers/AuthProvider';

export const Navigation = () => {
  const { authToken } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authToken ? <MainStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
};
