import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Steven", hasColor: "" },
  { meta: "last name", metaInfo: "Hoff", hasColor: "" },
  { meta: "Location", metaInfo: "Orlando, Florida, US", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Email", metaInfo: "shoff914@gmail.com", hasColor: "" },
  { meta: "Phone", metaInfo: "+1 (302) 313-6605", hasColor: "" },
  { meta: "langages", metaInfo: "English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
