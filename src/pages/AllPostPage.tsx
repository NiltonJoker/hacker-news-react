import { useCallback, useMemo, useState, useEffect } from "react";
import { PostList } from "../components/posts";
import { CustomSelectedMemorized, SpinnerLoading,MessageNotFoundPosts } from "../components/ui";
import { BASE_API, SELECT_OPTIONS } from "../utils";
import { Option } from "../types";
import useSWRInfinite from "swr/infinite";

import { Hit, HitResponse } from "../interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function AllPostPage() {
  const [queryParams, setQueryParams] = useState(
    `?query=${SELECT_OPTIONS[0].value}`
  );

  const getKey = (pageIndex: number, previousPageData: any) => {
    pageIndex += 1;
    if (previousPageData && previousPageData.length) return null;
    if (previousPageData?.nbPages === pageIndex) return null;

    return `${BASE_API}/search_by_date${queryParams}&page=${pageIndex}`;
  };

  const [optionSelected, setoptionSelected] = useState<Option>(
    SELECT_OPTIONS[0]
  );

  const { data, error, size, setSize, isValidating } =
    useSWRInfinite<HitResponse>(getKey, fetcher);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (isValidating && size > 1 && data && typeof data[size - 1] === "undefined");

  const currentPosts = useMemo(() => {
    const paginatedPosts = data?.flat() || [];
    return paginatedPosts.reduce<Hit[]>(
      (prev, current) => [...prev, ...current.hits],
      []
    );
  }, [data]);

  const fetchMore = () => {

    if (isLoadingMore) return null;

    setSize((size) => size + 1);
  };

  const onSelectedChange = useCallback((itemSelected: Option | null) => {
    if (!itemSelected) return;

    setQueryParams(`?query=${itemSelected.value}`);
    setSize(1)
    setoptionSelected(itemSelected);

    localStorage.setItem("optionSelect", JSON.stringify(itemSelected));
  }, []);

  const handleScroll:EventListener = (event: any) => {
      if (
        window.innerHeight + event.target.documentElement.scrollTop + 1 >=
        event.target.documentElement.scrollHeight
    
      ) {
        if(document.querySelector('#getMorePosts')){
          (document.querySelector('#getMorePosts') as HTMLInputElement ).click();
        }
      }
    
  };

  useEffect(() => {
    const defaultOption = JSON.parse(
      localStorage.getItem("optionSelect") || "{}"
    );
    if (Object.keys(defaultOption).length === 0) {
      return;
    }

    onSelectedChange(defaultOption);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanupListener() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <CustomSelectedMemorized
          options={SELECT_OPTIONS}
          value={optionSelected}
          onChange={onSelectedChange}
        />
      </div>

        {
          currentPosts.length === 0 &&
          (
            <MessageNotFoundPosts/>
          )
        }
  
        <PostList posts={currentPosts || []} />

        {isLoadingMore && <SpinnerLoading/>}

      <button id="getMorePosts" style={{ display: 'none' }} onClick={fetchMore}>Load more</button>
    </>
  );
}

export default AllPostPage;
