import { Typography } from "@mui/material";
import React from "react";
import ExperiencePageComp from "../../components/experience/ExperiencePageComp";
import VT from "../../images/vt.png";

const Research_Lead = () => {
  const title = "Student Research Lead";
  const dates = "Fall 2021 - Present";
  const company = "Virginia Tech Computer Science Department";
  const description = (
    <Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum similique,
      accusamus quisquam quidem repellat cumque velit? Impedit dolorum voluptas
      sed nemo excepturi modi praesentium distinctio. Voluptatibus omnis ea
      totam nihil possimus, eligendi aperiam a ullam explicabo perferendis
      quidem nostrum deserunt ratione voluptatem sequi ex id eveniet fuga beatae
      culpa quis consequatur sunt. Quibusdam est doloribus minima deserunt
      delectus, ipsa dolorum quia, veritatis rem a ducimus tenetur nihil
      consectetur. Est, quae? Id, porro vero. Accusantium totam optio numquam
      beatae a fugit quam eius quidem saepe, inventore laudantium nobis veniam
      mollitia incidunt sit, sunt cupiditate corporis esse eligendi
      reprehenderit quod. Non ratione architecto sit repellat voluptates
      similique vero saepe nobis itaque quam. Neque maxime minus eum provident
      tempora ea, reprehenderit non perferendis id quidem itaque explicabo
      aliquam, earum, sunt at nobis accusamus facere hic. Obcaecati itaque
      voluptate quis optio hic, expedita repudiandae, quam accusamus rerum ipsum
      harum placeat exercitationem aperiam, asperiores cum dignissimos
      inventore. Quos error libero veritatis reprehenderit ullam blanditiis
      totam a, recusandae nihil sint exercitationem, earum fuga numquam.
      Recusandae facere nam illo temporibus, dolore laudantium ut aspernatur
      dolor dolores ullam ratione dicta quibusdam sed error hic aliquid harum
      necessitatibus accusantium similique! At hic aspernatur veritatis corporis
      cupiditate nihil magnam? Explicabo.
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
