import { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { getPurchaseOrders } from '../api/api';
import { AuthContext } from '../providers/AuthProvider';

import { PurchaseOrderType } from '../types/PurchaseOrderType';
import { PurchaseOrderItem } from '../components/PurchaseOrderItem';

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
      style={{ flex: 1, marginTop: 25 }}
    >
      <FlatList
        style={{ paddingHorizontal: 12 }}
        data={purchaseOrders}
        renderItem={({ item }) => (
          <PurchaseOrderItem
            creator={item.creator}
            currency={item.currency}
            date={item.date}
            description={item.description}
            id={item.id}
            idn={item.idn}
            items={item.items}
            status={item.status}
            sum={item.sum}
            key={item.id}
          />
        )}
      />
    </SafeAreaView>
  );
};
