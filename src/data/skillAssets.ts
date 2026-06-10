import type { SkillId } from './skills'

/** Raster or vector brand marks served from /public/tool-icons */
export const SKILL_IMAGE_SRC: Partial<Record<SkillId, string>> = {
  firebase: '/tool-icons/firebase.svg',
  unreal: '/tool-icons/unreal.png',
}

/** Tiles that need a light surface behind the logo mark */
export const SKILL_WHITE_TILE_IDS = new Set<SkillId>()
