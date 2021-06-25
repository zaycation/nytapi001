import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Articles from "../components/Articles";
import TopStories from "../components/TopStories";

export default function HomePage() {
  const [articleId, setArticleId] = useState();
  return (
    <>
      <Container>
        <div>
          <Articles setArticleId={setArticleId} />
          <TopStories setArticleId={setArticleId} />
        </div>
      </Container>
    </>
  );
}
