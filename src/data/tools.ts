import type { SkillId } from './skills'

export type ToolEntry = {
  id: SkillId
  name: string
}

export const toolCategories: { title: string; items: ToolEntry[] }[] = [
  {
    title: 'Languages & Data',
    items: [
      { id: 'python', name: 'Python' },
      { id: 'cpp', name: 'C++' },
      { id: 'sql', name: 'SQL' },
    ],
  },
  {
    title: 'ML & Notebooks',
    items: [
      { id: 'jupyter', name: 'Jupyter' },
      { id: 'sklearn', name: 'scikit-learn' },
      { id: 'pandas', name: 'pandas' },
      { id: 'tableau', name: 'Tableau' },
    ],
  },
  {
    title: 'Web & Game Dev',
    items: [
      { id: 'react', name: 'React' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'unreal', name: 'Unreal Engine' },
      { id: 'git', name: 'Git' },
    ],
  },
]
