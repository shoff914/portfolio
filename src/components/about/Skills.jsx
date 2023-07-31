import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p100", skillPercent: "100", skillName: "JAVASCRIPT" },
  { skillClass: "p100", skillPercent: "100", skillName: "TYPESCRIPT" },
  { skillClass: "p100", skillPercent: "100", skillName: "CSS" },
  { skillClass: "p100", skillPercent: "100", skillName: "REACT" },
  { skillClass: "p100", skillPercent: "100", skillName: "VUE" },
  { skillClass: "p95", skillPercent: "95", skillName: "PHP" },
  { skillClass: "p100", skillPercent: "100", skillName: "NODE" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p80", skillPercent: "80", skillName: "ANGULAR" },
  { skillClass: "p80", skillPercent: "80", skillName: "AWS" },
  { skillClass: "p70", skillPercent: "70", skillName: "Azure" },
  { skillClass: "p80", skillPercent: "80", skillName: "SQL" },
  { skillClass: "p65", skillPercent: "65", skillName: "PYTHON" },
  { skillClass: "p60", skillPercent: "60", skillName: "C#" },
  { skillClass: "p80", skillPercent: "80", skillName: "GIT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
