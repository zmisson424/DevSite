import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config";

import {
  Row,
  Col,
  Card,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody
} from "reactstrap";

import Parties from "../../media/politicalparties.gif";
import Hurricane1 from "../../media/hurrdata1.png";
import Hurricane2 from "../../media/hurrdata2.png";
import Hurricane3 from "../../media/hurrdata3.png";
import Hurricane4 from "../../media/hurrdata4.png";
import Poverty from "../../media/ohiopoverty.png";

const StyledCard = styled(Card)`
  margin-top: 20px;
  padding-bottom: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const H4 = styled.h4`
  color: ${colors.primary};
  border-bottom: 1px solid;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const StyledButton = styled(Button)`
  background-color: #000066 !important;
  margin-left: 25%;
  margin-bottom: 20px;
  width: 50%;
  height: 50px;
  bottom: 0;

  &:hover {
    background-color: #0d47a1 !important;
  }
`;

class Portfolio extends Component {
  state = {
    showModal: false
  };

  toggle = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    return (
      <div>
        <StyledCard>
          <h2
            style={{
              color: colors.primary
            }}
          >
            Geovisualization Portfolio
          </h2>
          <h4
            style={{
              color: colors.primary,
              marginBottom: 15
            }}
          >
            Created by: Zachery Misson
          </h4>
          <p>
            This is a portfolio generated of all the works created during labs
            for Geovisualization (5201). In total there were 12 labs completed
            for the duration of the semester. Not every lab had an unguided
            portion. Each unguided section will be shown below with an
            explanation of what techniques were used, what was learned, and most
            importantly, what is being displayed and why. The object of the
            course was to become more familiar with GIS software and how to
            display and show GIS results to the outside world. We learned how to
            implement 2D and 3D displays, how to take time in to consideration
            and how to manipulate different graphs and objects to display
            desired results. During class we used a wide range of software:
            ArcGIS, ArcScene, ArcGIS Pro, and QGIS. Each piece of software has
            its benefits and disadvantages, some of which will be shown below.
            <br />
            <br />
            The final part of this class was to submit a portfolio, which could
            be done in one of two ways. It could be submitted to the instructor
            in PDF format or it could be displayed on an interactive website.
            One is clearly easier than the other. A PDF does not show off the
            intricacy or details of each assignment. What you submit is what the
            instructor or professor receives. The website on the other hand is
            interactive. ArcWeb maps can be displayed using iFrames to allow
            unique interactivity, gifs can be played and viewed, and it can all
            be presented in a clean, crisp setting.
          </p>
          <H4>Lab 2 - 3D Scene of OSU Campus</H4>
          <Row>
            <Col>
              <p>
                This lab was built off of the techniques learned in Lab 1. The
                object was to create a 3D scene using ArcScene and then make an
                animation inside of that 3D scene. This specific scene takes
                place on The Ohio States campus. The point of the map is to
                display all the bus routes and bus stop locations. Each bus
                route is layed on the ground using bright colored paths and the
                bus stops are represented using a 3D bus stop symbol. Noticeable
                campus areas (like the oval, the union, and the Horseshoe) are
                shown to allow the user to get their bearings. Fun 3D labels are
                also used to label areas of importance. This was one of the
                earlier labs and is not as pretty as some of the others. All the
                buildings are the same 3D height and a boring beige color. The
                3D tree symbol also is not in the best resolution format. All in
                all, the lab was engaging and helped brush the surface on the
                many techniques and abilities of ArcScene.
              </p>
            </Col>
            <Col>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4_NKOXg1uFI?rel=0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
            </Col>
          </Row>
          <H4>Lab 3 - Creating 3D Views with QGIS2ThreeJS</H4>
          <Row>
            <Col>
            <img
              src={Poverty}
              style={{
                width: "100%",
                maxHeight: 400
              }}
            />
            </Col>
            <Col>
              <p>
                Lab 3 was one of my favorite labs. The objective of this lab was
                to experiment with Qgis2threeJS, which is a Javascript plugin
                for QGIS. I really enjoy both open source software and
                Javascript which 90% of this website is written in. During the
                lab we made 4 different 3D interactive maps that were then
                exported and displayed in a web browser where a user could alter
                and move the map to see different views. For the unguided part
                we had to make a prism map. I got to decided and find all the
                information displayed. My prism map is a map of Ohio showing the
                poverty levels in each county. I created my own CSV file for the
                data. I looked up each county by hand and designated them a spot
                on the map. Then I used the Ohio Development Services Agency
                newest research paper on the poverty levels across Ohio and
                added it to my CSV file. The results turned out well. The
                biggest negative I find is that there are 88 counties in Ohio
                which makes the map a little cluttered. It is useful in
                displaying the disproportional wealth across the state.
              </p>
            </Col>
          </Row>
          <H4>Lab 5 - Creating Animated GIFs</H4>
          <Row>
            <Col>
              <p>
                The objective of Lab 5 was to use changing data to create a stop
                motion effect on a map to showcase the gradual change of that
                data. This exercise had us create a map of each state joining
                the United States by year. State admission flowed nicely and did
                not have too many frames to stop. The unguided portion did not
                have any guidelines on what data or map to use. For this portion
                of the lab, I chose to show what political party won each state
                in the presidential elections of 1789-2000. Not knowing how much
                data this entailed before starting, this lab took the longest to
                complete. It took hours to create and edit each frame for the
                map to show each political party. Although this lab was the most
                tedious to complete, it showcases extremely extensive data.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={Parties}
                style={{
                  width: "100%",
                  maxHeight: 500
                }}
              />
            </Col>
          </Row>
          <H4>Lab 7 - Tracking Analyst</H4>
          <p>
            The point of this lab was to learn and understand how ArcGIS handles
            tracking data. This feature allows the user to diplay a path an
            object might take and represent different data along its path. For
            the unguided section I tracked all the hurricanes in the United
            States during the 2016 storm season. The map shows when each
            hurricane occured as well as its wind strength. There is a detailed
            Playback manager that lets you skip around the time frame and see
            different results at different times. You can also play through the
            map like a movie and see how each hurricane behaved. This map is
            hard to display without ArcGIS. Click the button below to see the
            data results.
          </p>
          <StyledButton onClick={() => this.setState({ showModal: true })}>
            See Results
          </StyledButton>
          <H4>Lab 8 - Getting to know WebGIS</H4>
          <Row>
            <Col>
              <iframe
                width="500"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="My Childhood Home"
                src="//www.arcgis.com/apps/Embed/index.html?webmap=a7adf4398e6b4e2d9e8e8cc154eb1ed9&extent=-83.8966,41.5192,-83.3895,41.7512&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
              />
            </Col>
            <Col>
              WebGIS was an interesting lab and a change of pace from the
              others. Everything done here seemed quicker and more modern.
              WebGIS is an online tool created by ESRI. For this lab I created a
              Scene with different pictures and locations based on where I grew
              up, Toledo, Ohio. Is shows where I went to school, the house I
              grew up in, where my grandparents lived and where I played sports
              at.
            </Col>
          </Row>
          <H4>Lab 9 - Getting to know WebGIS Part 2</H4>
          <Row>
            <Col>
              For Lab 9, we went into even more detail with WebGIS. This time
              the assignment was to create a web map using different data that
              can be scalable. I chose a list of recent Earthquakes and showed
              the intensity of their magnitude around the world. Then I imported
              a basemap that shows all the tectonic plate structures which helps
              the user better infer why the Earthquakes happen.
            </Col>
            <Col>
              <iframe
                width="500"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="Recent Earthquakes"
                src="https://ohiostate.maps.arcgis.com/apps/View/index.html?appid=248cac875e5942bba063ffeb7bd0d6b8"
              />
            </Col>
          </Row>
          <H4>Lab 10 - Getting to know ArcGIS Pro</H4>
          <Row>
            <Col>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/798vHXYxV4o"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
            </Col>
            <Col>
              <p>
                Lab 10 is the first lab to use ArcGIS Pro. An updated and better
                maintained version of ArcGIS. The software has a more modern
                feel to it and seems a little easier to use. For this data I
                recreated the scene from Lab 2 (which can be seen above) and
                updated with ArcGIS Pro. The animation is smoother and the
                textures on the walls are different. The capabilities of ArcGIS
                Pro are greater than ArcScene and ArcGIS.
              </p>
            </Col>
          </Row>
          <H4>Lab 12 - Getting to know WebGIS Part 3</H4>
          <Row>
            <Col>
              The last lab was another WebGIS application. This one was to
              display a bunch of data on a 3D model of Earth. I decided to map
              the top 45 amusement parks around the world and have the z-axis
              represent the amount of guest that entered the park in 2016. This
              allows the user to quickly rotate around the world and see which
              park or parks were the most active. Each point is clickable as
              well, and brings up information about each park.
            </Col>
            <Col>
              <iframe
                width="500"
                height="400"
                frameborder="0"
                scrolling="no"
                allowfullscreen
                src="https://arcg.is/1fn9Ky"
              />
            </Col>
          </Row>
        </StyledCard>

        <Modal
          isOpen={this.state.showModal}
          modalTransition={{ timeout: 20 }}
          backdropTransition={{ timeout: 10 }}
          toggle={this.toggle}
          className={this.props.className}
          style={{
            width: "50% ! important"
          }}
        >
          <ModalHeader toggle={this.toggle}>
            <h2>Hurricane Tracks</h2>
          </ModalHeader>
          <ModalBody>
            <h3>Data</h3>
            <p>
              Source: https://www.nhc.noaa.gov/data/#hurdat This provided an
              extensive log of every hurricane from 1950 to 2016. I only used
              the data from 2016. I extensively modified the given data to fit
              my needs. There is a date, time, latitude, longitude, wind,
              pressure, hurricane name and a date-time column. The latitude and
              longitude fields were used to generate the feature class and the
              hurricane name is the ID for each hurricane track. The date-time
              column was made by combining the date and time fields and
              formatting it correctly to fit the temporal analysis method.
            </p>
            <img
              src={Hurricane1}
              style={{
                width: "75%",
                marginLeft: "11%"
              }}
            />
            <h3
              style={{
                marginTop: 20
              }}
            >
              Data Clock
            </h3>
            <p>
              Description: This shows the frequency and amount of hurricanes
              through the year and by time. Most of my data is collected in a
              six hour interval which is pretty easy to notice right away. Also,
              you can see that August, September, and October have a higher rate
              of hurricanes.
            </p>
            <img
              src={Hurricane2}
              style={{
                width: "75%",
                marginLeft: "11%"
              }}
            />
            <h3
              style={{
                marginTop: 20
              }}
            >
              Temporal Playback
            </h3>
            <p>
              The playback manager displayed the whole year showing one day per
              second. The whole playback would take about 6 minutes to watch but
              this speed could be increased. I chose to increment by days
              becauses this allowed for a visually appealing growth and decline
              of the hurricanes. The manager is displayed below.
            </p>
            <img
              src={Hurricane3}
              style={{
                width: "75%",
                marginLeft: "11%"
              }}
            />
            <h3
              style={{
                marginTop: 20
              }}
            >
              Tracks
            </h3>
            <p>
              Here is a visualization of all hurricane tracks from 2016. There
              were a decent amount of hurricanes. The amount makes it a little
              clustered near the coast but other than that the routes are fairly
              traceable. Using the playback manager you can distinguish
              everything.
            </p>
            <img
              src={Hurricane4}
              style={{
                width: "75%",
                marginLeft: "11%"
              }}
            />
            <h3
              style={{
                marginTop: 20
              }}
            >
              Conclussion
            </h3>
            <p>
              My data set was incredibly boring and almost like a cop-out doing
              hurricanes in back to back labs. This is both my fault for waiting
              to start my lab and the ability to find a decent data set. I had
              several ideas on what other topics to cover. I had thought about
              doing tornadoes but from what datasets I could find the tornadoes
              only lasted minutes and there were several per storm cell and my
              data became very quickly overload with not a lot of information to
              show. I then moved on and wanted to do something with animal
              migration or along those lines and could not find a decent set of
              data that I could turn into temporal information. I even thought
              about incorporating Strava and making a data set from there but
              struck out on creativity. That left more hurricane data so I could
              submit an appropriate project on time. It is boring. I apologize.
              My data set was from 2016 because this is the most recent I could
              obtain. I wanted to do 2017 with all the famous sever hurricanes
              like Harvey and Irene but the National Hurricane Center has not
              published those results yet. Most of the labs time was spent
              setting up the data. I took a massive CSV file from the National
              Hurricane Center with every hurricane from 1950 till 2016 and cut
              it down to just the data needed. Then I had to fix all the dates
              and time to make them appropriately match our format. Then I
              merged the two cells to create our date-time data.
              <br />
              <br />
              After the date and time was fixed I had to manually update all of
              the latitudes and longitudes to be legible by arcMap. The original
              data used N and W to show north and west. I got rid of all of the
              N’s and turned everything with a W into a negative number to show
              west. Once the data was ready to go it was pretty straightforward
              from there. I used the tracking analysis tool and imported my
              feature class. I changed some colors to make it more aesthetically
              pleasing and animated the data with the playback manager.
              Everything came out close to planned.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Done
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Portfolio;
