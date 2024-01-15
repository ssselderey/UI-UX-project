import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import * as Style from "./index.styled";

const Films = () => {
  const [page, setPage] = useState(1);
  const pageSize = 15;
  const { filmList, isLoading, updateFilmList } = useFilmList(String(page), String(pageSize));

  const [applySort, setApplySort] = useState(false);

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  const sortedFilms =
    filmList?.data?.movies && applySort
      ? [...filmList.data.movies].sort((a, b) => b.rating - a.rating)
      : filmList?.data?.movies;

  const handleSortClick = async () => {
    setApplySort(!applySort);
    await updateFilmList();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return filmList ? (
    <Style.Films>
      <Style.Content>
        <Style.TopSection>
        <Style.Title>FILMS</Style.Title>
        <Style.SortButton>
          <button onClick={handleSortClick}>
            {applySort ? 'Cancel sorting' : 'Sort by rating'}
          </button>
        </Style.SortButton>
        </Style.TopSection>
        <Style.List>
          {sortedFilms?.map((film) => (
            <Film key={film.id} {...film}></Film>
          ))}
        </Style.List>
        <Pagination
          totalUsersCount={filmList?.data?.movie_count}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={(page) => setPage(page)}
        />
      </Style.Content>
    </Style.Films>
  ) : null;
};

export default Films;