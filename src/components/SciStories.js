/* eslint-disable no-undef */
import React from "react";
import { useQuery } from "react-query";
import { Row, Col, Card, Button, Image, Badge } from "react-bootstrap";
import PulseLoader from "react-spinners/PulseLoader";

export default function TopStories({ setArticleId }) {
  const { isLoading, error, data } = useQuery("topstories", () =>
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=tAiWH2ky6IOkkNCfLbViLtRsJiBtG08T`
    ).then((res) => res.json())
  );

  if (isLoading) {
    //console.log(process.env);
    return (
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <PulseLoader size={24} color="teal" />
        </Col>
      </Row>
    );
  } else if (error) {
    return "Error!!";
  }
  return (
    <>
      <br />
      <h2 className="text-center">Top Stories</h2>
      <Row>
        {data.results?.slice(0, 6).map((item) => (
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card className="my-3">
              <Card.Img variant="top" src={item.multimedia[0].url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.abstract}</Card.Text>
                <Card.Link href={item.url}>Read More</Card.Link>
                <Card.Link href="#">View Similar</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
