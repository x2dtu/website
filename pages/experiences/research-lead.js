import { Typography } from "@mui/material";
import React from "react";
import ExperiencePageComp from "../../components/experience/ExperiencePageComp";
import VT from "../../public/images/vt.png";

const Research_Lead = () => {
  const title = "Student Research Lead";
  const dates = "Fall 2021 - Present";
  const company = "Virginia Tech Computer Science Department";
  const description = (
    <Typography>
      I am a lead student of a Virginia Tech computer science research group
      known as the Computer Systems Genome Project. I lead 20+ other
      undergraduate students in our goal to map out the history, lineage, and
      specifications of numerous computers, computer parts, and supercomputers.
      In addition to mentoring other students, I work as a full-stack developer
      with our python backend, database, and next.js frontend.
    </Typography>
  );
  return (
    <ExperiencePageComp
      companyImg={VT}
      dates={dates}
      title={title}
      company={company}
      description={description}
    />
  );
};

export default Research_Lead;
