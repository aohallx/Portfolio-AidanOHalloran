import type { SkillId } from './skills'

export type ConceptId =
  | 'calculus'
  | 'linear-algebra'
  | 'probability-stats'
  | 'optimization'
  | 'game-physics'
  | 'machine-learning'
  | 'feature-engineering'
  | 'eda'
  | 'etl'
  | 'time-series'

export type ToolSkillItem = {
  kind: 'skill'
  id: SkillId
  name: string
}

export type ToolConceptItem = {
  kind: 'concept'
  id: ConceptId
  name: string
}

export type ToolItem = ToolSkillItem | ToolConceptItem

export const toolCategories: { title: string; items: ToolItem[] }[] = [
  {
    title: 'Mathematics',
    items: [
      { kind: 'concept', id: 'calculus', name: 'Calculus (I-III)' },
      { kind: 'concept', id: 'linear-algebra', name: 'Linear Algebra' },
      { kind: 'concept', id: 'probability-stats', name: 'Probability & Statistics' },
      { kind: 'concept', id: 'optimization', name: 'Optimization' },
      { kind: 'concept', id: 'game-physics', name: 'Game Physics' },
    ],
  },
  {
    title: 'Data Science',
    items: [
      { kind: 'concept', id: 'machine-learning', name: 'Machine Learning' },
      { kind: 'concept', id: 'feature-engineering', name: 'Feature Engineering' },
      { kind: 'concept', id: 'eda', name: 'Exploratory Data Analysis' },
      { kind: 'concept', id: 'etl', name: 'ETL Pipelines' },
      { kind: 'concept', id: 'time-series', name: 'Time Series Forecasting' },
    ],
  },
  {
    title: 'Tools & Tech',
    items: [
      { kind: 'skill', id: 'python', name: 'Python' },
      { kind: 'skill', id: 'pandas', name: 'pandas' },
      { kind: 'skill', id: 'numpy', name: 'NumPy' },
      { kind: 'skill', id: 'matplotlib', name: 'Matplotlib' },
      { kind: 'skill', id: 'seaborn', name: 'Seaborn' },
      { kind: 'skill', id: 'sklearn', name: 'scikit-learn' },
      { kind: 'skill', id: 'sql-server', name: 'SQL Server' },
      { kind: 'skill', id: 'cpp', name: 'C++' },
      { kind: 'skill', id: 'java', name: 'Java' },
      { kind: 'skill', id: 'git', name: 'GitHub' },
      { kind: 'skill', id: 'tableau', name: 'Tableau' },
      { kind: 'skill', id: 'jupyter', name: 'Jupyter' },
    ],
  },
  {
    title: 'Web & Game Dev',
    items: [
      { kind: 'skill', id: 'react', name: 'React' },
      { kind: 'skill', id: 'typescript', name: 'TypeScript' },
      { kind: 'skill', id: 'firebase', name: 'Firebase' },
      { kind: 'skill', id: 'unreal', name: 'Unreal Engine' },
      { kind: 'skill', id: 'after-effects', name: 'After Effects' },
    ],
  },
]
