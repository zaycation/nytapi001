/* eslint-disable no-undef */
import React from "react";
import { useQuery } from "react-query";
import { Row, Col, Card, Button, Image, Badge } from "react-bootstrap";
import PulseLoader from "react-spinners/PulseLoader";

export default function Articles({ setArticleId }) {
  const { isLoading, error, data } = useQuery("articles", () =>
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.REACT_APP_NYT_API}`
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
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <Image
            src={data.results[4].media[0]["media-metadata"][2].url}
            alt={data.results[4].media[0].caption}
            rounded
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="d-flex flex-column align-items-start">
            <h4>{data.results[4].title}</h4>
            <p>{data.results[4].published_date}</p>
            <h6>{data.results[4].abstract}</h6>
            <div className="my-5 d-flex align-items-center justify-content-evenly">
              <Badge variant="info" className="mr-2">
                {data.results[4].type}
              </Badge>
              <Badge variant="info" className="mr-2">
                {data.results[4].section}
              </Badge>
              <Badge variant="info" className="mr-2">
                {data.results[4].source}
              </Badge>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        {data.results?.slice(0, 3).map((item) => (
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.abstract}</Card.Text>
                <Card.Link href="#">Read More</Card.Link>
                <Card.Link href="#">View Similar</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
