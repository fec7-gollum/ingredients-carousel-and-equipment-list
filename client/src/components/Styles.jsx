import styled from 'styled-components';

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 8% 92%;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-row-start: 2;
  grid-row-end: 2;
  grid-template-columns: 5% 60% 35%;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 5% 45% 15% 35%;
`;

const Title = styled.div`
  font-family: Graphik Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  grid-column-start: 2;
  grid-column-end: 2;
  letter-spacing: 3px;
  line-height: 1.25;
`;

const TabButtons = styled.input`
  margin-left: 10px;

  &:focus {
    outline: none;
  }
`;

const IngListDiv = styled.div`
  font-family: futura-pt,sans-serif;
  font-weight: 550;
  letter-spacing: 1px;
  font-size: .8rem;
  line-height: 2.2;
`;

const IngListUl = styled.ul`
  padding-inline-start: 0;
  list-style: none;
  margin: auto;
`;

const IngListCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin: auto;
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  margin-right: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;

  &:focus {
    outline: none;
  }

  &:checked {
    background-color: black;
    color: white;
  }

  &:checked:after {
    content: '';
    display: block;
    width: 4px;
    height: 7px;
    border: solid #FFF;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-left: 3px;
    margin-top: 1px;
  }
`;

const IngImgDiv = styled.div`
  margin: 0;
  max-width: 650px;
`;

const IngImg = styled.img`
  min-height: 150px;
  min-width: 150px;
  max-height: 150px;
  max-width: 150px;
  padding: 5px;
`;

const Scroller = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  width: 200%;
  display: grid;
  grid-template-columns: 50% 50%;
  transition: transform .6s cubic-bezier(.55,.085,.68,.53);
  transform: ${(props) => (props.isSlid ? 'translateX(-50%)' : 'translateX(0%)')};
`;

const RightCover = styled.div`
  grid-column-start: 3;
  grid-column-end: 3;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const LeftCover = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export {
  Inner,
  Grid,
  Header,
  Title,
  TabButtons,
  IngListDiv,
  IngListUl,
  IngListCheckbox,
  IngImgDiv,
  IngImg,
  Scroller,
  RightCover,
  LeftCover,
};
