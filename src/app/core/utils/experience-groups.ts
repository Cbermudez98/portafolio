export interface GroupableExperience {
  company: string;
  period: string;
  location: string;
}

export interface ExperienceGroup<T extends GroupableExperience> {
  company: string;
  /** Span from the earliest role start to the latest role end */
  period: string;
  location: string;
  roles: T[];
}

/**
 * Groups roles by company, preserving the original (most recent first) order.
 * Periods use the "Start — End" format of the translations.
 */
export function groupByCompany<T extends GroupableExperience>(items: readonly T[]): ExperienceGroup<T>[] {
  const map = new Map<string, ExperienceGroup<T>>();
  for (const item of items) {
    let group = map.get(item.company);
    if (!group) {
      group = { company: item.company, period: '', location: item.location, roles: [] };
      map.set(item.company, group);
    }
    group.roles.push(item);
  }
  for (const group of map.values()) {
    const latestEnd = group.roles[0].period.split(' — ')[1] ?? '';
    const earliestStart = group.roles[group.roles.length - 1].period.split(' — ')[0];
    group.period = latestEnd ? `${earliestStart} — ${latestEnd}` : earliestStart;
  }
  return [...map.values()];
}
