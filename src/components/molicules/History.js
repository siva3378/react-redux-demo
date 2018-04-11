import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    text-align: left;
`;

const H3 = styled.h3`
    text-align: left;
`;

const HistoryItem = ({ distance, time, speed }) => (
    <Li>{distance}/{time} = {speed}</Li>
);

const History = ({ data }) => {
    const items = data.map((item, i) => (<HistoryItem {...item} key={i}/>));

    return (<div>
        <H3>Latest 5 items from history</H3>
        <ul>{items}</ul>
        </div>
    );
}

export default History;