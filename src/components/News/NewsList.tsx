import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { useNews } from "@/hooks/home/news";
import { NewsDTO } from "@/services/dto";

// const mockedData = [
//   {
//     title:
//       "A U.S.-Built Spacecraft Lands on the Moon for the First Time Since 1972",
//     abstract:
//       "Odysseus was the first privately built vehicle to make it to the moon, and points to a future in which NASA, companies and others rely on commercial lunar delivery services.",
//     url: "https://www.nytimes.com/2024/02/22/science/intuitive-machines-lander-history.html",
//     byline: "By Kenneth Chang",
//     published_date: "2024-02-22T21:45:04-05:00",
//     des_facet: "",
//     multimedia: {
//       url: "https://static01.nyt.com/images/2024/02/22/multimedia/22moon-landing-design-jvbk/22moon-landing-design-jvbk-articleInline.jpg",
//       caption:
//         "A camera aboard Odysseus, the Intuitive Machines lunar lander, took a photograph of the Bel’kovich K crater on the moon on Wednesday before it landed in the lunar’s southern polar region on Thursday.",
//     },
//   },
//   {
//     title:
//       "A U.S.-Built Spacecraft Lands on the Moon for the First Time Since 1972",
//     abstract:
//       "Odysseus was the first privately built vehicle to make it to the moon, and points to a future in which NASA, companies and others rely on commercial lunar delivery services.",
//     url: "https://www.nytimes.com/2024/02/22/science/intuitive-machines-lander-history.html",
//     byline: "By Kenneth Chang",
//     published_date: "2024-02-22T21:45:04-05:00",
//     des_facet: "",
//     multimedia: {
//       url: "https://static01.nyt.com/images/2024/02/22/multimedia/22moon-landing-design-jvbk/22moon-landing-design-jvbk-articleInline.jpg",
//       caption:
//         "A camera aboard Odysseus, the Intuitive Machines lunar lander, took a photograph of the Bel’kovich K crater on the moon on Wednesday before it landed in the lunar’s southern polar region on Thursday.",
//     },
//   },
//   {
//     title:
//       "A U.S.-Built Spacecraft Lands on the Moon for the First Time Since 1972",
//     abstract:
//       "Odysseus was the first privately built vehicle to make it to the moon, and points to a future in which NASA, companies and others rely on commercial lunar delivery services.",
//     url: "https://www.nytimes.com/2024/02/22/science/intuitive-machines-lander-history.html",
//     byline: "By Kenneth Chang",
//     published_date: "2024-02-22T21:45:04-05:00",
//     des_facet: "",
//     multimedia: {
//       url: "https://static01.nyt.com/images/2024/02/22/multimedia/22moon-landing-design-jvbk/22moon-landing-design-jvbk-articleInline.jpg",
//       caption:
//         "A camera aboard Odysseus, the Intuitive Machines lunar lander, took a photograph of the Bel’kovich K crater on the moon on Wednesday before it landed in the lunar’s southern polar region on Thursday.",
//     },
//   },
//   {
//     title:
//       "A U.S.-Built Spacecraft Lands on the Moon for the First Time Since 1972",
//     abstract:
//       "Odysseus was the first privately built vehicle to make it to the moon, and points to a future in which NASA, companies and others rely on commercial lunar delivery services.",
//     url: "https://www.nytimes.com/2024/02/22/science/intuitive-machines-lander-history.html",
//     byline: "By Kenneth Chang",
//     published_date: "2024-02-22T21:45:04-05:00",
//     des_facet: "",
//     multimedia: {
//       url: "https://static01.nyt.com/images/2024/02/22/multimedia/22moon-landing-design-jvbk/22moon-landing-design-jvbk-articleInline.jpg",
//       caption:
//         "A camera aboard Odysseus, the Intuitive Machines lunar lander, took a photograph of the Bel’kovich K crater on the moon on Wednesday before it landed in the lunar’s southern polar region on Thursday.",
//     },
//   },
// ];

export default function NewsList() {
  const { state, getNewsFromApi } = useNews();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getNewsFromApi, []);

  return (
    <div>
      {state.news &&
        state.news.map((news: NewsDTO, key: number) => (
          <NewsCard news={news} key={key} index={key} />
        ))}
    </div>
  );
}
