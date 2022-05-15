import { useCallback, useState } from "react";
import { PostList } from "../components/posts";
import { CustomSelectedMemorized } from "../components/ui";
import { BASE_API, SELECT_OPTIONS } from "../utils";
import { Option } from "../types";
import useSWRInfinite from "swr/infinite";
import { ActionMeta } from "react-select";
import { Hit, HitResponse } from "../interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function AllPostPage() {
  const [queryParams, setQueryParams] = useState(
    `?query=${SELECT_OPTIONS[0].value}`
  );

  const getKey = (pageIndex: number, previousPageData: any) => {
    pageIndex += 1;
    if(previousPageData && previousPageData.length) return null
    if(previousPageData?.nbPages === pageIndex) return null;
  
    return `${BASE_API}${queryParams}&page=${pageIndex}`;
  };

  const [optionSelected, setoptionSelected] = useState<Option>(
    SELECT_OPTIONS[0]
  );

  const { data, error, size, setSize, isValidating } = useSWRInfinite<
    HitResponse
  >(getKey, fetcher);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (isValidating && size > 1 && data && typeof data[size - 1] === "undefined");

  const paginatedPosts = data?.flat()  || [];
  const currentPosts = paginatedPosts.reduce<Hit[]>((prev,current) => [...prev, ...current.hits] ,[])

  const fetchMore = useCallback(() => {
    if (isLoadingMore) return null;

    setSize((size) => size + 1);
  }, [isLoadingMore, setSize]);

  const onSelectedChange = useCallback(
    (itemSelected: Option | null, actionMeta: ActionMeta<Option>) => {
      if (!itemSelected) return;

      setQueryParams(`?query=${itemSelected.value}`);
      setoptionSelected(itemSelected);
    },
    []
  );

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <CustomSelectedMemorized
          options={SELECT_OPTIONS}
          value={optionSelected}
          onChange={onSelectedChange}
        />
      </div>

      <PostList posts={currentPosts || []} />


      {isLoadingMore && <h1>LOADING...</h1>}

      <button onClick={fetchMore}>Load more</button>
    </>
  );
}

export default AllPostPage;
