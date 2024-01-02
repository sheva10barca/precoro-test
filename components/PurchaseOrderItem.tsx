import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

import { PurchaseOrderType } from '../types/PurchaseOrderType';

export const PurchaseOrderItem: React.FC<PurchaseOrderType> = ({
  creator,
  currency,
  date,
  description,
  idn,
  items,
  sum,
}) => {
  const normalizedDate = moment(date).format('MMM DD YYYY');

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftColumnContainer}>
        <View style={styles.topColumnContainer}>
          <Text style={styles.title}>Purchase Order {idn}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.botColumnContainer}>
          <Text style={styles.requestedBy}>Requested by</Text>
          <Text style={styles.creator}>{creator}</Text>
        </View>
      </View>

      <View style={styles.rightColumnContainer}>
        <View style={styles.topColumnContainer}>
          <Text style={styles.date}>{normalizedDate}</Text>
        </View>

        <View style={styles.botColumnContainer}>
          <Text style={styles.sum}>
            {sum} {currency}
          </Text>
          <Text style={styles.items}>
            {items} {items === 1 ? 'item' : 'items'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: '#E8E9EE',
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  title: { fontFamily: 'inter-semibold', color: '#1D2452', fontSize: 14 },
  description: { color: '#8E91A8', fontSize: 12 },
  requestedBy: { color: '#8E91A8', fontSize: 10 },
  creator: { fontSize: 12, color: '#1D2452' },
  date: { fontSize: 12, color: '#8E91A8' },
  sum: { fontFamily: 'inter-bold', fontSize: 12, color: '#1D2452' },
  items: { textAlign: 'right', fontSize: 12, color: '#1D2452' },
  topColumnContainer: { gap: 5 },
  botColumnContainer: { gap: 2 },
  leftColumnContainer: { gap: 16 },
  rightColumnContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
