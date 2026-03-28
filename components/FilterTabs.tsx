import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FILTER_OPTIONS, FilterOptions } from '@/constants/tasks'
import COLORS from '@/constants/Colors'

export type FilterTabsProps = {
    selected: FilterOptions
    onSelect: (filter: FilterOptions) => void;
}

const FilterTabs = ({selected, onSelect}: FilterTabsProps) => {
  return (
    <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
    >
      {
        FILTER_OPTIONS.map((item) => {
            const isSelected = item === selected
            
            return (
                <TouchableOpacity
                    key={item}
                    style={[styles.tab, isSelected && styles.tabSelected]}
                    onPress={() => onSelect(item)}
                >
                    <Text style={[styles.tabText, isSelected && styles.tabTextSelected]}>
                        {item}
                    </Text>

                </TouchableOpacity>
            )
        })
      }
    </ScrollView>
  )
}

export default FilterTabs

const styles = StyleSheet.create({
    container: {
    paddingHorizontal: 20,
    gap: 10,
    paddingVertical: 12,
  },
  tab: {
    alignSelf: "flex-start",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tabSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.textSecondary,
  },
  tabTextSelected: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
}) 
