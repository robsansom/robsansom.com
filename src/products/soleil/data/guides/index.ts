import { part1 } from './part1';
import { part2 } from './part2';
import type { Guide } from './types';

export type { Guide, Block, GuideFaq } from './types';

export const guides: Guide[] = [...part1, ...part2];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
