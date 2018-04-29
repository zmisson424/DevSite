import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config";
import NoImage from "../../media/no_image.jpg";

import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const H3 = styled.h3`
  color: #aeea00;
  border-bottom: 1px solid;
`;

class Experience extends Component {
  render() {
    return (
      <div>
        <H3>Languages</H3>
        <Row>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Java</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>C++</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Python</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>JavaScript</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>HTML/CSS</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>SQL</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <H3>Services</H3>
        <Row>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>React</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Redux</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Angular</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Firebase</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Android</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>iOS</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>MailChimp</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Swipe</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Checkbook.io</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <H3>Design</H3>
        <Row>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Material Design</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Human Interface</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Fluid</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top width="100%" src={NoImage} />
              <CardBody>
                <CardTitle>Bootstrap</CardTitle>
                <CardText>Programmy program program</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Experience;
