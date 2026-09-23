import { skillGroups, softSkills } from '../data.js'

const HEX_W = 577.789
const HEX_H = 653.646

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <h2 className="display">
          What i bring <em className="italic-accent">to the hive</em>
        </h2>

        <div className="soft-row">
          {softSkills.map((skill) => (
            <span key={skill} className="soft-pill">
              {skill}
            </span>
          ))}
        </div>

        <div className="skill-row">
          {skillGroups.map((group) => (
            <article key={group.name} className="skill-col" style={{ '--cat': group.color }}>
              <div className="skill-card">
                <div className="skill-hex">
                  <div className="skill-hex__gfx">
                    <img
                      className="skill-hex__outline"
                      src={group.outline}
                      width={HEX_W}
                      height={HEX_H}
                      alt=""
                    />
                    <img
                      className="skill-hex__fill"
                      src={group.fill}
                      width={HEX_W}
                      height={HEX_H}
                      alt=""
                    />
                  </div>
                </div>

                <p className="skill-hex__label">{group.name}</p>

                <div className="skill-pills">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
