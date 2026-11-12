/**
 * Marks which skills match a search query.
 *
 * A skill matches when the query appears in its name or keywords,
 * or in its group's label or blurb (so "mobile" lights up the whole Mobile group).
 * An empty query matches everything.
 *
 * Returns the groups with an `isMatch` flag on every skill and a `hasMatches` flag
 * on every group, plus the number of matching skills.
 */
export function filterSkillGroups(skillGroups, searchQuery) {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  let matchingSkillCount = 0;

  const filteredGroups = skillGroups.map((group) => {
    const groupText = `${group.label} ${group.blurb}`.toLowerCase();
    const groupMatches = normalizedQuery !== "" && groupText.includes(normalizedQuery);

    const skills = group.skills.map((skill) => {
      const skillText = `${skill.name} ${skill.keywords}`.toLowerCase();
      const isMatch = normalizedQuery === "" || groupMatches || skillText.includes(normalizedQuery);
      if (isMatch) matchingSkillCount += 1;
      return { ...skill, isMatch };
    });

    return { ...group, skills, hasMatches: skills.some((skill) => skill.isMatch) };
  });

  return { filteredGroups, matchingSkillCount };
}
