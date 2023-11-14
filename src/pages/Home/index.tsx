import { Row, Col, Space, Typography } from 'antd';
import Carousel from '../../components/home-widgets/Carousel'
import Categories from '../../components/home-widgets/Categories';

const { Title, Paragraph, Text, Link } = Typography;

const content: React.CSSProperties = {
  marginTop: 24,
  marginBottom: 24
}

const Home = () => {
  return (
    <div style={{maxWidth:1250}}>
      <Carousel />
      <Row style={content} justify="center" gutter={[12, 12]}>
        <Col span={24}>
          <Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Title style={{ marginTop: 0 }}>Live More, Do Less</Title>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Paragraph style={{ fontSize: 24 }}>Let's get down to business</Paragraph>
            </div>
          </Typography>
        </Col>
        <Col span={24}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>image</div>
              <Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Title level={3} style={{ marginTop: 0 }}>Live More, Do Less</Title>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Paragraph style={{ fontSize: 16 }}>Let's get down to business</Paragraph>
                </div>
              </Typography>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <Categories />
        </Col>
      </Row>
    </div>
  )
};

export default Home;