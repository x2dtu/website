import { Typography } from "@mui/material";
import React from "react";
import ExperiencePageComp from "../../components/experience/ExperiencePageComp";
import Garmin from "../../images/garmin-logo.png";

const GarminIntern = () => {
  const title = "Embedded Software Engineering Intern";
  const dates = "Summer 2022";
  const company = "";
  const description = (
    <Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
      exercitationem inventore consequatur eum numquam dignissimos maxime natus
      praesentium enim distinctio, debitis nihil, pariatur velit consequuntur?
      Ducimus illo ratione, reprehenderit cupiditate vel magni voluptate quis
      laborum blanditiis maiores consequatur perferendis repellat dicta,
      distinctio nam maxime deleniti voluptas impedit temporibus sunt iusto!
      Illum dolores sed neque, praesentium eveniet animi maiores molestiae
      quisquam, veniam quis, aliquid delectus ab at mollitia et odio suscipit
      reiciendis voluptas officia velit natus dignissimos. Cupiditate, nihil
      placeat odio inventore, laborum reiciendis nostrum iure sit error
      voluptatem et minima quod? Repellendus hic quas qui omnis est sed eaque,
      neque accusamus. Unde dolorem et architecto ipsam commodi error
      voluptatibus asperiores. Voluptate iusto, illum ipsam ratione harum,
      voluptatem dicta quasi veniam perferendis odio dignissimos optio deserunt
      atque, earum quas illo ex rem inventore magnam. Dolore reprehenderit
      mollitia quibusdam assumenda officia, ipsam iste? Consectetur quos cum
      omnis, beatae officiis nemo ipsam culpa reprehenderit nihil modi inventore
      odit adipisci, quae iure laboriosam dolore id necessitatibus quia, minima
      quasi deleniti. Iure impedit veniam officiis at assumenda dicta
      reprehenderit, libero enim sed illo corporis in inventore! Minus eaque
      quod atque reiciendis vero. Neque ducimus rerum illo aspernatur, quibusdam
      nostrum tempora eum, inventore maiores, error ut.
    </Typography>
  );
  return (
    <ExperiencePageComp
      title={title}
      company={company}
      dates={dates}
      companyImg={Garmin}
      description={description}
    />
  );
};

export default GarminIntern;
