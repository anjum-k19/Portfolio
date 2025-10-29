import "./Timeline.css";
import React, { useState } from "react";
export default function Timeline() {
  // hover effect:
  const [preview, setPreview] = useState(null);
  function showPreview(item, el) {
    const rect = el.getBoundingClientRect();
    setPreview({ item, rect, side: item.side });
  }
  function hidePreview() {
    setPreview(null);
  }

  const dots = [];
  const totalMonths = 9 * 12;
  const monthSizeRem = 0.5;
  const dotSizePx = 12;
  const dotColor = "#ffffff";
  const lineColor = "#ffffff";
  const dotEveryMonths = 6;
  for (let m = 0; m <= totalMonths; m += dotEveryMonths) {
    dots.push(m);
  }

  const leftColStyle = {
    // CSS custom props drive sizing & positions
    // (using rem and px together safely)
    "--months": totalMonths,
    "--month-size": `${monthSizeRem}rem`,
    "--line-w": `4px`,
    "--line-color": lineColor,
    "--dot-size": `${dotSizePx}px`,
    "--dot-color": dotColor,
  };

  //card and indicator code:
  const minDate = new Date("2017-08-01");
  const indicatorHeight = 1;
  function generateCards(side) {
    return items
      .filter((item) => item.side === side)
      .map((item) => {
        const offsetMonths = getMonthDiff(minDate, item.start);
        const durationMonths = getMonthDiff(item.start, item.end);
        var totalheight = durationMonths * monthSizeRem;
        return (
          <div
            key={`${item.title}-${item.start.toISOString()}`}
            className="timeline-item"
            style={{
              top: `calc(${offsetMonths} * ${monthSizeRem}rem)`,
              height: `${totalheight}rem`,
            }}
            onMouseEnter={(e) => showPreview(item, e.currentTarget)}
            onMouseLeave={hidePreview}
          >
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-subtitle">{item.subtitle}</div>
          </div>
        );
        // }
      });
  }

  function generateIndicator(side) {
    return dateIndicators
      .filter((indicator) => indicator.side === side)
      .map((indicator) => {
        console.log(indicator);
        // if (indicator.side == "right") {
        const offsetMonths = getMonthDiff(minDate, indicator.anchor);
        console.log(offsetMonths);
        const top = offsetMonths * monthSizeRem - (indicatorHeight + 1) / 2; //added 1 here for padding both on top and bottom 0.5 rem padding
        return (
          <div
            className="timeline-indicator"
            style={{
              top: `${top}rem`,
              height: `${indicatorHeight}rem`,
            }}
          >
            {indicator.content}
          </div>
        );
        // }
      });
  }

  return (
    <div className="timeline-container">
      <div className="timeline-left-side" style={leftColStyle}>
        {/* dots every 6 months */}
        {dots.map((m) => (
          <span
            key={m}
            className="timeline-dot"
            style={{
              // place the dot at m * month-size from the top
              top: `calc(${m} * var(--month-size))`,
            }}
          />
        ))}
        {generateCards("left")}
        {generateIndicator("left")}
      </div>
      <div className="timeline-right-side">
        {generateCards("right")}
        {generateIndicator("right")}
      </div>
      {preview && <HoverPreview preview={preview} />}
    </div>
  );
}

function getMonthDiff(start, end) {
  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  );
}

const items = [
  {
    side: "left",
    title: "KJ Somaiya College of Engineering",
    subtitle: "Bachelor's in Technology, Computer Engineering",
    date: "August 2017",
    start: new Date("2017-08-01"),
    end: new Date("2021-04-01"),
    content: "",
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
    title: "Georgia Institute of Technology",
    subtitle: "Masters in Computer Science",
    start: new Date("2024-08-01"),
    end: new Date("2026-05-01"),
    content: "",
  },
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
];

const dateIndicators = [
  {
    side: "right",
    content: "August 2017",
    anchor: new Date("2017-08-01"),
  },
  {
    side: "right",
    content: "August 2021",
    anchor: new Date("2021-08-01"),
  },
  {
    side: "left",
    content: "August 2024",
    anchor: new Date("2024-08-01"),
  },
];

function HoverPreview({ preview }) {
  const { item, rect, side } = preview;

  // place it near the hovered card:
  const width = 380; // larger than the card
  // const height = 220;
  const gap = 16;

  // basic placement: to the side of the hovered card
  const top = Math.max(12, rect.top + window.scrollY - 20);
  const left =
    side === "left"
      ? rect.right + gap + window.scrollX
      : rect.left - width - gap + window.scrollX;

  return (
    <div
      className="hover-preview flip-in"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        // height: `${height}px`,
      }}
    >
      <div className="hover-preview-front">
        <div className="hp-title">{item.title}</div>
        <div className="hp-sub">{item.content}</div>
      </div>
    </div>
  );
}
