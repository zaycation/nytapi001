import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SciStories from "../components/SciStories";

export default function SciencePage() {
  const [articleId, setArticleId] = useState();

  return (
    <>
      <Container>
        <div>
          <SciStories setArticleId={setArticleId} />
        </div>
      </Container>
    </>
  );
}
