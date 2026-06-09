export type SkillId =
  | 'after-effects'
  | 'python'
  | 'pandas'
  | 'numpy'
  | 'matplotlib'
  | 'seaborn'
  | 'sklearn'
  | 'jupyter'
  | 'sql'
  | 'sql-server'
  | 'react'
  | 'typescript'
  | 'unreal'
  | 'git'
  | 'tableau'
  | 'cpp'
  | 'java'
  | 'firebase'

export type Skill = {
  id: SkillId
  name: string
}

/** Icons that need a wider slot in compact ribbons */
export const WORDMARK_SKILL_IDS = new Set<SkillId>(['pandas', 'sklearn', 'matplotlib'])

/** Stack tiles on project cards — light surface when the mark is dark-dominant */
export const SKILL_LIGHT_TILE_IDS = new Set<SkillId>(['pandas', 'numpy'])

/** Order shown in the skills ribbon (left → right) */
export const skills: Skill[] = [
  { id: 'python', name: 'Python' },
  { id: 'pandas', name: 'pandas' },
  { id: 'numpy', name: 'NumPy' },
  { id: 'sklearn', name: 'scikit-learn' },
  { id: 'jupyter', name: 'Jupyter' },
  { id: 'tableau', name: 'Tableau' },
  { id: 'sql', name: 'SQL' },
  { id: 'sql-server', name: 'SQL Server' },
  { id: 'cpp', name: 'C++' },
  { id: 'java', name: 'Java' },
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'firebase', name: 'Firebase' },
  { id: 'unreal', name: 'Unreal Engine' },
  { id: 'git', name: 'GitHub' },
  { id: 'after-effects', name: 'After Effects' },
]
