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
  const formattedSum = sum.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topBlock}>
        <View style={styles.row}>
          <Text style={styles.title}>Purchase Order {idn}</Text>
          <Text style={styles.date}>{normalizedDate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

      <View style={styles.botBlock}>
        <View style={styles.row}>
          <Text style={styles.requestedBy}>Requested by</Text>
          <Text style={styles.sum}>
            {formattedSum} {currency}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.creator}>{creator}</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: '#E8E9EE',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    gap: 16,
  },
  topBlock: {
    flex: 1,
    gap: 5,
  },
  botBlock: {
    flex: 1,
    gap: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'inter-semibold',
    color: '#1D2452',
    fontSize: 14,
    lineHeight: 15,
  },
  description: {
    color: '#8E91A8',
    fontSize: 12,
    lineHeight: 15,
  },
  requestedBy: {
    color: '#8E91A8',
    fontSize: 10,
    lineHeight: 15,
  },
  creator: {
    fontSize: 12,
    color: '#1D2452',
    lineHeight: 15,
  },
  date: {
    fontSize: 12,
    color: '#8E91A8',
    lineHeight: 15,
  },
  sum: {
    fontFamily: 'inter-bold',
    fontSize: 12,
    color: '#1D2452',
    lineHeight: 15,
  },
  items: {
    textAlign: 'right',
    fontSize: 12,
    color: '#1D2452',
    lineHeight: 15,
  },
});
