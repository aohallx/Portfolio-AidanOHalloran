export type ProjectGalleryImage = {
  src: string
  alt: string
  caption: string
  kind: 'blueprint' | 'gameplay'
}

export type ProjectEquation = {
  label: string
  formula: string
  note?: string
}

export type ProjectDeepDiveSection = {
  title: string
  paragraphs?: string[]
  equations?: ProjectEquation[]
  heroImage?: {
    src: string
    alt: string
    caption?: string
    fullQuality?: boolean
  }
  galleryKind?: 'blueprint' | 'gameplay'
  images?: ProjectGalleryImage[]
}

const unrealGalleryBase = '/projects/unreal/gallery'

export const projectDeepDives: Record<string, ProjectDeepDiveSection[]> = {
  'unreal-game': [
    {
      title: 'Round structure & zombie spawning',
      paragraphs: [
        'GM_Enemies drives wave progression in Blueprint. When every enemy in the current round is defeated, the round counter increments, enemy health and spawn quotas are recalculated, and a timed spawn loop begins again.',
      ],
      equations: [
        {
          label: 'Round advance',
          formula: 'if activeEnemies = 0 → round ← round + 1',
          note: '1.5 s delay before the next round starts.',
        },
        {
          label: 'Enemies per round',
          formula: 'totalEnemies = max(2, round(f(R)))',
          note: 'Round 1 starts at 2 enemies. Later rounds scale via a weighted sum of round terms (see blueprint).',
        },
        {
          label: 'Enemy max health',
          formula: 'health(R) = clamp(R < 10 ? R × 100 : g(R), 0, 10 000)',
          note: 'Linear through round 9. Steeper scaling from round 10 onward, hard-capped at 10,000 HP.',
        },
        {
          label: 'Spawn gate',
          formula: 'spawned < totalEnemies ∧ alive < maxConcurrent',
          note: 'Timer fires Spawn Enemy until the round quota is met. Spawned enemies inherit the round health value.',
        },
      ],
      heroImage: {
        src: `${unrealGalleryBase}/round-spawn-blueprint.png`,
        alt: 'Unreal Engine Blueprint graph for round progression and zombie spawn logic',
        caption:
          'GM_Enemies round manager. Increase round, recalculate health and quota, then drive the spawn timer.',
        fullQuality: true,
      },
    },
    {
      title: 'Blueprint visual scripting',
      paragraphs: [
        'Beyond the round manager, most systems are built in Blueprint: AI behavior trees, character logic, and UI.',
      ],
      galleryKind: 'blueprint',
      images: [
        {
          src: `${unrealGalleryBase}/blueprint-behavior-tree.png`,
          alt: 'BT_AI_Boss behavior tree with chase, attack, and patrol branches',
          caption: 'Boss AI behavior tree (chase, melee attack, patrol).',
          kind: 'blueprint',
        },
        {
          src: `${unrealGalleryBase}/blueprint-boss-ai.png`,
          alt: 'BP_AI_Boss actor setup with sword mesh and health bar widget',
          caption: 'BP_AI_Boss actor components and weapon attachment.',
          kind: 'blueprint',
        },
        {
          src: `${unrealGalleryBase}/blueprint-game-mode.png`,
          alt: 'Unreal Editor play session showing GM_Enemies game mode and AI actors',
          caption: 'GM_Enemies game mode with live AI actors in the outliner.',
          kind: 'blueprint',
        },
        {
          src: `${unrealGalleryBase}/blueprint-dummy-assassinate.png`,
          alt: 'BP_Dummy Blueprint graph for assassination prompt visibility',
          caption: 'Assassination prompt overlap logic on BP_Dummy.',
          kind: 'blueprint',
        },
        {
          src: `${unrealGalleryBase}/blueprint-third-person-character.png`,
          alt: 'BP_ThirdPersonCharacter event graph overview',
          caption: 'BP_ThirdPersonCharacter event graph (movement, combat, abilities).',
          kind: 'blueprint',
        },
      ],
    },
    {
      title: 'Gameplay',
      paragraphs: [
        'In-engine captures from combat, equipment, pathfinding debug, and early-round survival waves.',
      ],
      galleryKind: 'gameplay',
      images: [
        {
          src: `${unrealGalleryBase}/gameplay-combat.webp`,
          alt: 'Third-person melee combat with debug collision wireframes',
          caption: 'Melee combat with hitbox debug overlays.',
          kind: 'gameplay',
        },
        {
          src: `${unrealGalleryBase}/gameplay-equipment-ui.png`,
          alt: 'In-game equipment menu with melee, armor, range, and shield slots',
          caption: 'Equipment loadout UI.',
          kind: 'gameplay',
        },
        {
          src: `${unrealGalleryBase}/gameplay-sniper-scope.png`,
          alt: 'First-person sniper scope view on AI targets in a snowy arena',
          caption: 'Scoped ranged combat.',
          kind: 'gameplay',
        },
        {
          src: `${unrealGalleryBase}/gameplay-ai-pathfinding.png`,
          alt: 'Boss AI debug view showing navigation pathfinding under the character feet',
          caption:
            'Boss AI debug HUD. Green nav-mesh box under the character shows active pathfinding.',
          kind: 'gameplay',
        },
        {
          src: `${unrealGalleryBase}/gameplay-map-overview.png`,
          alt: 'Top-down view of the survival arena map terrain',
          caption: 'Arena map overview.',
          kind: 'gameplay',
        },
        {
          src: `${unrealGalleryBase}/gameplay-round-one.png`,
          alt: 'Round 1 survival gameplay with multiple AI enemies in a snowy environment',
          caption: 'Round 1 wave in progress.',
          kind: 'gameplay',
        },
      ],
    },
  ],
}

export function getProjectDeepDives(slug: string): ProjectDeepDiveSection[] | undefined {
  return projectDeepDives[slug]
}
