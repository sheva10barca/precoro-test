import { useContext, useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import { getPurchaseOrders } from '../api/api';
import { AuthContext } from '../providers/AuthProvider';

import { PurchaseOrderItem } from '../components/PurchaseOrderItem';

import { PurchaseOrderType } from '../types/PurchaseOrderType';

export const DocumentsScreen = () => {
  const { authToken } = useContext(AuthContext);

  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrderType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPurchaseOrders = async () => {
    if (authToken) {
      const fetchedDocuments = await getPurchaseOrders(authToken);
      setPurchaseOrders(fetchedDocuments);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    try {
      fetchPurchaseOrders();
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  }, [authToken]);

  return (
    <>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1D2452" />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <FlatList
            style={styles.documentsList}
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
            ListFooterComponent={<View style={styles.footer} />}
          />
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  documentsList: {
    paddingHorizontal: 12,
    paddingVertical: 25,
  },
  footer: { height: 25 },
});
