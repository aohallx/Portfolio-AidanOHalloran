import { toolCategories } from './tools'
import { skills, type SkillId } from './skills'

const labels = new Map<SkillId, string>()
for (const skill of skills) labels.set(skill.id, skill.name)
for (const category of toolCategories) {
  for (const tool of category.items) {
    if (tool.kind === 'skill') labels.set(tool.id, tool.name)
  }
}

export const skillLabels = Object.fromEntries(labels) as Record<SkillId, string>
