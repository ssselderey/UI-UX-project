import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscCommentDiscussion} from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { CgSmileNone, CgSmileSad } from 'react-icons/cg';
import { BiTimeFive } from "react-icons/bi";
import App from "../../templates/Details/Comments/App";
import { useState } from "react";


const Details = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );

  const [commentsCount, setCommentsCount] = useState(0);

  if (isLoading || !filmRetrieve?.data?.movie) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });

  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });

  const filmRate: number = filmRetrieve?.data.movie.rating as number;

  const getIconStyle = (filmRate: number) => {
    if (filmRate > 7) {
      return { color: 'green' };
    } else if (filmRate > 4.5) {
      return { color: 'yellow' };
    } else {
      return { color: 'red' };
    }
  };

  return (
    <Style.Details>
      <Style.BackgroundImage
        src={filmRetrieve?.data.movie.background_image_original}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.ContentTitle>
        Films / {filmRetrieve?.data.movie.title}
        </Style.ContentTitle>

        <Style.Data>
          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>
            <Style.Buttons>
              <Style.DownloadButton href={filmRetrieve?.data.movie.url}>
                Download
              </Style.DownloadButton>
              <Style.WatchButton href={filmRetrieve?.data.movie.url}>
                Watch Now
              </Style.WatchButton>
            </Style.Buttons>
          </Style.Image>

          <Style.Description>
            <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>

            <Style.Year>
              {filmRetrieve?.data.movie.year +
                " " +
                filmRetrieve?.data.movie.language}
            </Style.Year>

            <Style.Genres>{genresList}</Style.Genres>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full}
            </Style.DescriptionFull>

            <Style.Statistic>
              <div>
                {(() => {
                  if (filmRate > 7) {
                    return (
                      <StatisticItem
                        icon={<FaRegSmile style={getIconStyle(filmRate)} />}
                        text={filmRetrieve?.data.movie.rating}
                      ></StatisticItem>
                    );
                  } else if (filmRate > 4.5) {
                    return (
                      <StatisticItem
                        icon={<CgSmileNone style={getIconStyle(filmRate)} />}
                        text={filmRetrieve?.data.movie.rating}
                      ></StatisticItem>
                    );
                  } else {
                    return (
                      <StatisticItem
                        icon={<CgSmileSad style={getIconStyle(filmRate)} />}
                        text={filmRetrieve?.data.movie.rating}
                      ></StatisticItem>
                    );
                  }
                })()}
              </div>
              <StatisticItem
                icon={<AiTwotoneLike />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<BiTimeFive />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              <StatisticItem
                icon={<VscCommentDiscussion />}
                text={commentsCount}
              ></StatisticItem>
            </Style.Statistic>

            <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>

            <Style.Torrents>{torrentsList}</Style.Torrents>
            <Style.CommentsAll>
              Comments 
              <Style.CommentsWorkspace>
                <Style.CommentsWorkspace1>
                  <App />
                </Style.CommentsWorkspace1>
              </Style.CommentsWorkspace>
            </Style.CommentsAll>
          </Style.Description>
        </Style.Data>
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
