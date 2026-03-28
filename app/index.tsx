import { FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "@/constants/Colors";
import { FilterOptions, TASKS, TaskStatus } from "@/constants/tasks";
import Header from "@/components/Header";
import DateSelector from "@/components/DateSelector";
import FilterTabs from "@/components/FilterTabs";
import TaskCard from "@/components/TaskCard";

const Index = () => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");

  const filteredTasks =
    activeFilter === "All"
      ? TASKS
      : TASKS.filter((task) =>
          activeFilter === "Completed"
            ? task.status === TaskStatus.Done
            : task.status === activeFilter
        );

  return (
    <View style={[{ paddingTop: insets.top }, styles.container]}>
      <StatusBar style="light" />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        ListHeaderComponent={
          <>
            <Header />
            <DateSelector />
            <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />
          </>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    paddingBottom: 20,
  }
});
