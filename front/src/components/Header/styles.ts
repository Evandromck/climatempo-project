import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { blue } from '../../styles/constants';
import Container from '../Container';
import ImageCP from '../Image';

const Wrapper = styled(Container)`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 20px;
  background: ${blue};
`;

export const Image = styled(ImageCP)`
  height: 2.4rem;
`;

export const Anchor = styled(Link)``;

export default Wrapper;
