import styled from 'styled-components';
// секция со списком фильмов
export const Films = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColor};
    transition: 0.1s;
`;
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SortButton = styled.div`
  button {
    flex: 0 0 auto;
    width: 150px;
    height: 50px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    padding: 8px;
    background-color: ${props => props.theme.iconColor};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    // margin-left: 20px;
    color: ${props => props.theme.textColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    transition: background-color 0.1s, color 0.1s;

    &:hover {
      background-color: ${props => props.theme.accentColor2};
      color: white;
    }

    &:active {
      background-color: ${props => props.theme.iconColor}; /* Возвращаем цвет при активации кнопки */
      color: ${props => props.theme.textColor};
    }
  }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
   
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;

export const Title = styled.span`
    letter-spacing: 5px;
    font-weight: 600;
    display: flex;
    flex: 0 0 auto;
    width: 54%;
    margin: 25px 0px;
    justify-content: right;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
`;

export const List = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (max-width: 1200px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr ;
    }
`;