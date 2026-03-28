import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '@/constants/Colors'
import { TaskStatus, Tasks } from '@/constants/tasks'
import { Ionicons } from '@expo/vector-icons'

const STATUS_COLOR: Record<TaskStatus, string> = {
    "Done": COLORS.statusDone,
    "In Progress": COLORS.statusInProgress,
    "To Do": COLORS.statusTodo,
}

export type TaskCardProps = {
    task: Tasks;
}

const TaskCard = ({task} : TaskCardProps) => {
  return (
    <View style={styles.card}>
        <View style={styles.content}>
            <Text style={styles.category}>{task.status}</Text>
            <Text style={styles.title}>{task.title}</Text>

            <View style={styles.footer}>
                <View style={styles.timeRow}>
                    <Ionicons name="time-outline" size={14} color={COLORS.primary} />
                    <Text style={styles.time}>{task.time}</Text>
                </View>
                <Text style={[styles.status, {color: STATUS_COLOR[task.status]}]}>
                    {task.status}
                </Text>
            </View>
        </View>

        <View style={[styles.iconBadge, {backgroundColor: task.icon.backgroundColor}]}>
            <Ionicons name={task.icon.name as any} size={20} color="white" />
        </View>
    </View>
  )
}

export default TaskCard

const styles = StyleSheet.create({
     card: {
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  content: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 6,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginBottom: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  time: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: "500",
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
  },
  iconBadge: {
    width: 42,
    height: 42,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 14,
  },
})
