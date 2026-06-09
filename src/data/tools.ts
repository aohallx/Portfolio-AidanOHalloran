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
      { id: 'after-effects', name: 'After Effects' },
    ],
  },
  {
    title: 'Infrastructure & IT',
    items: [
      { id: 'aws', name: 'AWS' },
      { id: 'ubuntu', name: 'Ubuntu' },
      { id: 'powershell', name: 'PowerShell' },
      { id: 'azure', name: 'Azure' },
      { id: 'cisco', name: 'Cisco' },
      { id: 'virtualbox', name: 'VirtualBox' },
      { id: 'kali', name: 'Kali Linux' },
      { id: 'wireshark', name: 'Wireshark' },
      { id: 'nmap', name: 'Nmap' },
    ],
  },
]
