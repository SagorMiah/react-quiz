import React, { useState } from "react";
import Video from "../components/Video";
import useVideoList from "../hooks/useVideoList";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, hasMore, videos } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 home"
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 12)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <NavLink
                key={video.youtubeID}
                to={{
                  pathname: `/quiz/${video.youtubeID}`,
                  state: {
                    videoTitle: video.title,
                  },
                }}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </NavLink>
            ) : (
              <Video
                key={video.youtubeID}
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Home;
