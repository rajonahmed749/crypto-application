import React from 'react';
import { Typography, Row, Col, Select, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';


const { Title, Text } = Typography;
const { Option } = Select;


const News = ({ simplified }) => {
    // const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 })

    // console.log("news are here", useGetCryptoNewsQuery);
    // if(!cryptoNews?.value) return " Loading..."
    return (
        <Row gutter={[24, 24]}>
            <h3>News coming soon...</h3>
        </Row>
    );
};

export default News;