import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import "./timelinesecond.css";

function fmtRange(start, end) {
  const opts = { year: "numeric", month: "short" };
  const s = start ? new Date(start).toLocaleDateString(undefined, opts) : "";
  const e = end ? new Date(end).toLocaleDateString(undefined, opts) : "";
  return s && e ? `${s} – ${e}` : s || e || "";
}

export default function TimelineSecond() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const onStepEnter = ({ data }) => setCurrentStepIndex(data);

  return (
    <div className="timeline-grid">
      {/* LEFT: sticky rail */}
      <aside className="timeline-rail">
        <div className="rail-inner">
          <ol className="dot-list">
            {ITEMS.map((item, i) => (
              <li
                key={i}
                className={`dot-row ${i === currentStepIndex ? "active" : ""}`}
              >
                <span className="dot" />
                <span className="dot-label">
                  {fmtRange(item.start, item.end)}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </aside>

      {/* RIGHT: scroll steps */}
      <main className="timeline-steps">
        <Scrollama offset={0.6} onStepEnter={onStepEnter}>
          {ITEMS.map((item, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <section
                className={`card ${
                  currentStepIndex === stepIndex ? "is-active" : ""
                }`} //if its the current step, add is-active.
                aria-current={
                  currentStepIndex === stepIndex ? "step" : undefined
                }
              >
                {/* card content start */}
                <h3 className="card-title">{item.title}</h3>
                {item.subtitle && (
                  <div className="card-sub">{item.subtitle}</div>
                )}
                <div className="card-sub" style={{ opacity: 0.8 }}>
                  {fmtRange(item.start, item.end)}
                </div>

                {/* Render content as bullets if multiline, else as a paragraph */}
                {item.content ? (
                  item.content.includes("\n") ? (
                    <ul className="card-points">
                      {item.content
                        .split("\n")
                        .map((line, idx) =>
                          line.trim() ? <li key={idx}>{line.trim()}</li> : null
                        )}
                    </ul>
                  ) : (
                    <p className="card-body">{item.content}</p>
                  )
                ) : null}
                {/* card content ends */}
              </section>
            </Step>
          ))}
        </Scrollama>
      </main>
    </div>
  );
}

const ITEMS = [
  {
    side: "left",
    title: "Amazon Web Services (AWS)",
    subtitle: "Software Developer Intern",
    start: new Date("2025-05-01"),
    end: new Date("2025-08-01"),
    content:
      "Developed a React app to flag risky cleanup resources, streamlining region build automation, boosting click through by 40%\
Built a Smithy JavaScript client with JWT and SigV4 auth, and role chaining, enabling secure retrieval via presigned S3 URLs\
Deployed on Lambda and S3 for scalable, region-isolated use, lowering review time per 100 resources from 50 to 10 minutes.\
",
  },
  {
    side: "right",
    title: "Georgia Institute of Technology",
    subtitle: "Masters in Computer Science",
    start: new Date("2024-08-01"),
    end: new Date("2026-05-01"),
    content: "",
  },
  {
    side: "left",
    title: "Amadeus Software Labs",
    subtitle: "Software Developer",
    start: new Date("2021-08-01"),
    end: new Date("2024-05-01"),
    content:
      "Feature design and development for Hainan Airlines, an Amadeus customer.\
Established new flows with 1A GDS -  Registration, Miles & Cash, increasing Frequent Flyer Registrations by over 40%.\
Implemented Instant Search, caching flight prices, minimizing GDS Flex Pricer calls, achieving 35% expenditure reduction.\
Transversal responsibilities\
Migrated QA platform to a new namespace reducing build time from 2 hours to 30 minutes.\
Reduced critical bugs from over 400 to 20 and eliminated all IRs (Incident Records - SEV 0) breaching SLA.\
Designed a comprehensive threat model encompassing interactions with GDS, Travel Sky, E-star, User Center, Log server.\
Tech lead Responsibilities - Collaborated with the PO to evaluate features, conducted KTs for core applications and processes, and managed EP (E-personalize, a configuration engine for the application) with over 4000 action rules configured.\
Scrum Master Responsibilities - Orchestrated daily agile tasks, represented my team in various forums, managed JIRA, and worked closely with the RTE (Release train engineer).\
",
  },
  {
    side: "right",
    title: "Morgan Stanley",
    subtitle: "Technology Analyst Intern",
    date: "August 2021",
    start: new Date("2021-02-01"),
    end: new Date("2021-07-01"),
    content:
      "Developed “Deal Blotter” with a CPS Pub/Sub data pipeline, extensible architecture, and Kerberized REST integration.\
Streamlined Equity and Structured Products (ESPT) sales process, reducing marketing time from ~1 hour per client to 7 mins for multiple clients.",
  },
  {
    side: "right",
    title: "Morgan Stanley",
    subtitle: "Technology Analyst Intern",
    start: new Date("2020-05-01"),
    end: new Date("2020-07-01"),
    content:
      "Constructed a Medium Touch Order Tracking dashboard reducing application search time from 20 minutes to 30 seconds",
  },
  {
    side: "left",
    title: "KJ Somaiya College of Engineering",
    subtitle: "Bachelor's in Technology, Computer Engineering",
    // date: "August 2017",
    start: new Date("2017-08-01"),
    end: new Date("2021-04-01"),
    content: "",
  },
];
