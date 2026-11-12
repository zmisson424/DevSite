import { useState } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { SKILL_GROUPS } from "../../data/skills";
import { filterSkillGroups } from "./filterSkills";
import "./Skills.css";

/** 04 — What I know: every skill, grouped, with a live search that highlights matches. */
function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  const isSearching = searchQuery.trim() !== "";
  const { filteredGroups, matchingSkillCount } = filterSkillGroups(SKILL_GROUPS, searchQuery);

  let resultLabel = "";
  if (isSearching) {
    resultLabel = matchingSkillCount > 0 ? `${matchingSkillCount} match` : "nothing yet, but ask me";
  }

  return (
    <section id="know" className="skills page-container">
      <SectionHeading
        number="04"
        aside="The toolbox, sorted. Search it if you're looking for something specific."
      >
        What I <em>know</em>
      </SectionHeading>

      <div className="skills__search-row">
        <label htmlFor="skill-search" className="visually-hidden">
          Search my stack
        </label>
        <input
          id="skill-search"
          type="search"
          className="skills__search-input"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="search: flutter, claude, azure…"
        />
        <p className="skills__result-count" aria-live="polite">
          {resultLabel}
        </p>
      </div>

      <div className="skills__groups">
        {filteredGroups
          .filter((group) => group.hasMatches)
          .map((group) => (
            <div key={group.label} className="skills__group">
              <div className="skills__group-heading">
                <h3
                  className={
                    group.isFeatured
                      ? "skills__group-label skills__group-label--featured"
                      : "skills__group-label"
                  }
                >
                  {group.label}
                </h3>
                <p className="skills__group-blurb mono-label">{group.blurb}</p>
              </div>

              <ul className="skills__chips">
                {group.skills.map((skill) => {
                  let chipClassName = "skills__chip";
                  if (isSearching) chipClassName += skill.isMatch ? " is-highlighted" : " is-faded";

                  return (
                    <li key={skill.name} className={chipClassName}>
                      {skill.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Skills;
