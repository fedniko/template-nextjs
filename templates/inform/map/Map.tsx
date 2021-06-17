import { Col, Container, Row } from 'react-bootstrap';
import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  YMaps,
  ZoomControl,
} from 'react-yandex-maps';

const mapData = {
  center: [62.032664, 129.749947],
  zoom: 16,
  controls: [],
};

const coordinates = [[62.032664, 129.749947]];

export default function Maps() {
  return (
    <section className="map">
      <Container>
        <Row>
          <Col>
            <h1 className="text map__heading">Lorem ipsum dolor</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <YMaps>
              <Map className="justMap" defaultState={mapData}>
                <ZoomControl />
                <FullscreenControl />
                <GeolocationControl />
                {coordinates.map((coordinate) => (
                  <Placemark
                    modules={['geoObject.addon.balloon']}
                    geometry={coordinate}
                    key={coordinate.toString()}
                    properties={{
                      balloonContentHeader: 'АЭБ АйТи',
                      balloonContentBody:
                        'проспект Ленина, 1, 4 этаж, каб. 424',
                    }}
                  />
                ))}
              </Map>
            </YMaps>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
