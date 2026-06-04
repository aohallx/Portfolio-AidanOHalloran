export type SkillId =
  | 'after-effects'
  | 'python'
  | 'pandas'
  | 'sklearn'
  | 'jupyter'
  | 'sql'
  | 'react'
  | 'typescript'
  | 'unreal'
  | 'git'
  | 'tableau'
  | 'cpp'

export type Skill = {
  id: SkillId
  name: string
}

/** Icons that need a wider slot in compact ribbons */
export const WORDMARK_SKILL_IDS = new Set<SkillId>(['pandas', 'sklearn'])

/** Order shown in the skills ribbon (left → right) */
export const skills: Skill[] = [
  { id: 'after-effects', name: 'Adobe After Effects' },
  { id: 'python', name: 'Python' },
  { id: 'pandas', name: 'pandas' },
  { id: 'sklearn', name: 'scikit-learn' },
  { id: 'jupyter', name: 'Jupyter' },
  { id: 'sql', name: 'SQL' },
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'unreal', name: 'Unreal Engine' },
  { id: 'git', name: 'Git' },
  { id: 'tableau', name: 'Tableau' },
  { id: 'cpp', name: 'C++' },
]
