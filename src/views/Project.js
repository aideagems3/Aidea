
import React from "react";
// reactstrap components
import { Card, CardHeader, CardBody,CardTitle,Table, Row, Col,Button,InputGroup,InputGroupText,
  InputGroupAddon,Input, } from "reactstrap";


const MapWrapper = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "40.748817";
    let lng = "-73.985428";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "water",
          stylers: [
            {
              saturation: 43,
            },
            {
              lightness: -11,
            },
            {
              hue: "#0088ff",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              hue: "#ff0000",
            },
            {
              saturation: -100,
            },
            {
              lightness: 99,
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#808080",
            },
            {
              lightness: 54,
            },
          ],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ece2d9",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ccdca1",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#767676",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#b8cb93",
            },
          ],
        },
        {
          featureType: "poi.park",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "poi.sports_complex",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "poi.medical",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "poi.business",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Paper Dashboard React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Paper Dashboard React</h2>' +
      "<p>A free Admin for React, Reactstrap, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <div style={{ height: `100%` }} ref={mapRef}></div>
    </>
  );
};

function Map() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>Google Maps</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <MapWrapper />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="12">
         
            <Card>
              <CardHeader>
              <Row>
                <Col md="5">
                    <CardTitle tag="h4">All Projects
                    </CardTitle>
                </Col>
                <Col md="3">
                    <InputGroup className="no-border">
                        <Input placeholder="Search..." />
                            <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i className="nc-icon nc-zoom-split" />
                                </InputGroupText>
                            </InputGroupAddon>
                    </InputGroup>
                 </Col>
                          <Col md="4">
                              <Button
                                className="btn-round"
                                color="primary"
                                type="submit"
                                href="src/views/Icons.js"
                                >
                                + New Project
                              </Button>
                          </Col>
                   
                    </Row>
                 </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Project name</th>
                      <th>Circuit-km</th>
                      <th>Created</th>
                      <th className="text-right">Issue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PEAWBA01</td>
                      <td>100</td>
                      <td>11 Apr 2021</td>
                      <td className="text-right">1</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-right">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-right">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-right">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-right">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-right">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-right">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Map;


// function Tables() {
//   return (
//     <>
//       <div className="content">
//         <Row>
//           <Col md="12">
//             <Card>
//               <CardHeader>
//                 <CardTitle tag="h4">Simple Table</CardTitle>
//               </CardHeader>
//               <CardBody>
//                 <Table responsive>
//                   <thead className="text-primary">
//                     <tr>
//                       <th>Name</th>
//                       <th>Country</th>
//                       <th>City</th>
//                       <th className="text-right">Salary</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Dakota Rice</td>
//                       <td>Niger</td>
//                       <td>Oud-Turnhout</td>
//                       <td className="text-right">$36,738</td>
//                     </tr>
//                     <tr>
//                       <td>Minerva Hooper</td>
//                       <td>Curaçao</td>
//                       <td>Sinaai-Waas</td>
//                       <td className="text-right">$23,789</td>
//                     </tr>
//                     <tr>
//                       <td>Sage Rodriguez</td>
//                       <td>Netherlands</td>
//                       <td>Baileux</td>
//                       <td className="text-right">$56,142</td>
//                     </tr>
//                     <tr>
//                       <td>Philip Chaney</td>
//                       <td>Korea, South</td>
//                       <td>Overland Park</td>
//                       <td className="text-right">$38,735</td>
//                     </tr>
//                     <tr>
//                       <td>Doris Greene</td>
//                       <td>Malawi</td>
//                       <td>Feldkirchen in Kärnten</td>
//                       <td className="text-right">$63,542</td>
//                     </tr>
//                     <tr>
//                       <td>Mason Porter</td>
//                       <td>Chile</td>
//                       <td>Gloucester</td>
//                       <td className="text-right">$78,615</td>
//                     </tr>
//                     <tr>
//                       <td>Jon Porter</td>
//                       <td>Portugal</td>
//                       <td>Gloucester</td>
//                       <td className="text-right">$98,615</td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               </CardBody>
//             </Card>
//           </Col>
//           </Row>
//       </div>
//     </>
//   );
// }

// export default Tables;
