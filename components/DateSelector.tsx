import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import COLORS from '@/constants/Colors'

type DateItem = {
    month: string;
    day: number;
    weekDay: string;
    key: string;
}

const generateDates = (): DateItem[] => {
    const base = new Date(2026, 3, 23)
    return Array.from({ length: 5 }, (_, i) => {
        const date = new Date(base)
        date.setDate(base.getDate() + i)
        return {
            month: date.toLocaleString('en-US', { month: 'short' }),
            day: date.getDate(),
            weekDay: date.toLocaleString('en-US', { weekday: 'short' }),
            key: date.toISOString(),
        }
    })
}

const DATES = generateDates()
const DEFAULT_SELECTED_DATE = DATES[2].key

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState<string>(DEFAULT_SELECTED_DATE)
  
  return (
    <ScrollView 
        horizontal 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.container}
    >
      {
        DATES.map((item) => {
            const isSelected = item.key === selectedDate
            return (
                <TouchableOpacity
                    key={item.key}
                    style={[styles.dateItem, isSelected && styles.dateSelected]}
                    onPress={() => setSelectedDate(item.key)}
                >
                    <Text style={[styles.month, isSelected && styles.selectedText]}>{item.month}</Text>
                    <Text style={[styles.day, isSelected && styles.selectedText]}>{item.day}</Text>
                    <Text style={[styles.weekDay, isSelected && styles.selectedText]}>{item.weekDay}</Text>

                </TouchableOpacity>
            )
        })
      }
    </ScrollView>
  )
}

export default DateSelector

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        gap: 8,
        paddingVertical: 10,
    },
    dateItem: {
        alignItems: "center",
        alignSelf: "flex-start",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 20,
        minWidth: 64,
    },
    dateSelected: {
        backgroundColor: COLORS.primary,
    },
    month: {
        fontSize: 12,
        fontWeight: "700",
        color: COLORS.textPrimary,
    },
    weekDay: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },
    day: {
        fontSize: 20,
        fontWeight: "700",
        color: COLORS.textPrimary,
        paddingVertical: 4,
    },
    selectedText: {
        color: "#FFFFFF"
    }
})
