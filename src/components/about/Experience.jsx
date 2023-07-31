import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: "Senior Software Engineer",
    compnayName: "Facebook",
    details: `Led the development of complex web applications using React, Node, and SQL.`,
  },
  {
    year: "2020 - 2022",
    position: "Senior Frontend Engineer",
    compnayName: "Anthology",
    details: `Designed and developed responsive web applications and customized Material UI components.`,
  },
  {
    year: "2017 - 2020",
    position: "Full Stack Engineer",
    compnayName: "Field Control Analytics",
    details: `implemented front-end features and functionalities based on design mockups and user stories.`,
  },
  {
    year: "2015 - 2017",
    position: "Full Stack Engineer",
    compnayName: "U.S. News & World Report",
    details: `Maintaining react based front-end application and CMS based back-end services.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
