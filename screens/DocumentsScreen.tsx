import { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import { getPurchaseOrders } from '../api/api';
import { AuthContext } from '../providers/AuthProvider';

import { PurchaseOrderItem } from '../components/PurchaseOrderItem';

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
      style={{ flex: 1 }}
    >
      <FlatList
        style={{ paddingHorizontal: 12, paddingVertical: 25 }}
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
        ListFooterComponent={<View style={{ height: 25 }} />}
      />
    </SafeAreaView>
  );
};
