import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const WrapperHidden = styled.div`
  @media (max-width: 1400px) {
    display: none;
  }
`

export const RowCenter = styled.div`
  justify-content: flex-end;
`

export const HeaderWrapper = styled.div`
  box-shadow: 0 3px 8px 0 rgba(9, 71, 36, 0.1);
  background-color: #ffffff;
`

export const HeaderRow = styled.header`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const Menu = styled.ul`
  list-style: none;
  font-size: 20px;
  color: #232825;
  margin-bottom: 0;
`
export const StyledLink = styled(NavLink)`
  color: #232825;

  &:hover {
    text-decoration: none;
    color: #15ad56;
  }
`

export const Item = styled.li`
  list-style: none;
  font-size: 20px;
  color: #232825;
  margin-bottom: 0;
  margin-right: 13.5px;

  &:last-child {
    margin-right: 0;
  }
`



