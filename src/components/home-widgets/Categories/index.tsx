import React from 'react';
import { Col, Row, Button, Space } from 'antd';
import Category from './Category';

const root: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const wrapper: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center'
};

const categoryWrapper: React.CSSProperties = {
    marginRight: '8px'
}

const data = [
    {
        imgSrc: 'img/categories/Appliance_Repair.jpg',
        name: 'Appliance Repair'
    },
    {
        imgSrc: 'img/categories/Auto_Repair.jpg',
        name: 'Auto Repair'
    },
    {
        imgSrc: 'img/categories/Barber.jpg',
        name: 'Barber'
    },
    {
        imgSrc: 'img/categories/Cleaner.jpg',
        name: 'Cleaning'
    }
]

const Categories: React.FC = () => (
    <Row gutter={[24, 24]}>
        <Col span={24}>
            <Row justify="center" gutter={[24, 24]}>
                {data.map((item: any) => <Col>
                    <Category name={item.name} imgSrc={item.imgSrc}/>
                </Col>)}

            </Row>
        </Col>
        <Col span={24}>
            <Row justify='center'>
                <Button type="primary" shape="round" size="large" >See More</Button>
            </Row>
        </Col>
    </Row>
);

export default Categories;