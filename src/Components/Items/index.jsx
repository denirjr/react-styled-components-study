import React from 'react';
import styled from 'styled-components';

import ImageFilter from '../ImageFilter';
import Item from '../Item';

const Items = styled.div`
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default (props) => (
  <Items>
    {ImageFilter(props?.type)}
    <Item {...props} />
    <span>{props?.date}</span>
  </Items>
);