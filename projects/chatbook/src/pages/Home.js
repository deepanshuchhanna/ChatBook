import React from 'react';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <Grid fluid className="h-100">
      {/* here we provide Row and Col 's height as h-100 to make the height 100 for nested components  */}
      <Row className="h-100">
        <Col xs={24} md={8} className="h-100">
          <Sidebar />
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
