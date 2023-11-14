import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

interface Props {
  imgSrc: string,
  name: string
}

const Category: React.FC<Props> = (props: Props) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" width="240" src={props.imgSrc} />}
  >
    <Meta title={props.name} />
  </Card>
);

export default Category;