import { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { getPurchaseOrders } from '../api/api';
import { AuthContext } from '../providers/AuthProvider';

import { PurchaseOrderType } from '../types/PurchaseOrderType';

export const DocumentsScreen = () => {
  const { authToken } = useContext(AuthContext);

  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrderType[]>([]);

  const fetchPurchaseOrders = async () => {
    if (authToken) {
      const fetchedDocuments = await getPurchaseOrders(authToken);
      setPurchaseOrders(fetchedDocuments);
    }
  };

  useEffect(() => {
    fetchPurchaseOrders();
  }, [authToken]);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <FlatList
        data={purchaseOrders}
        renderItem={({ item }) => (
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.creator}</Text>
            <Text>{item.id}</Text>
            <Text>{item.sum}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
