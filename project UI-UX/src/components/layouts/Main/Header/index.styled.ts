import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    min-height: 80px;
    justify-content: center;
    color: ${props => props.theme.textColor};
    box-shadow: 0px 0px 6px ${props => props.theme.accentColor1};
    background-color: ${props => props.theme.backgroundColor};
    // top: 0;
    position: sticky;
    overflow: hidden;
    z-index: 50;
    @media (max-width: 768px) and (min-width: 576px)  { 
        // min-height: 60px;
    }
    @media (max-width: 576px) and (min-width: 324px) {
        width: 100%;
        }
    
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    background-color: ${props => props.theme.backgroundColor};
    box-sizing: border-box;

    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {     
        width: 100%;
    }
    @media (max-width: 576px) {
        width: max-width;
        }
`;

export const Logo = styled.div`
    display: flex;
    width: 12%;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0px;
    &:hover {
        filter: brightness(1.3);
        cursor: pointer;
    }
`;

export const Img = styled.img`
    display: flex;
    height: 50px;
`;
export const Name = styled.span`
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.textSizeTextM};
    font-weight: 500;
    font-family: Roboto;
    letter-spacing: 1px;
    margin: 5px 0px 0px 0px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const ButtonSwitchTheme = styled.div`
    display: flex;
`;

export const SearchArea = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    padding: 0px 20px;
    align-items: right;
`;

export const SearchInput = styled.input`
    display: flex;
    width: 60%;
    padding: 8px;
    margin: 3px 0px;   
    background-color: ${props => props.theme.iconColor};
    border: 1px solid ${props => props.theme.accentColor1};
    border-radius: 10px;
    color: ${props => props.theme.textColor};
    font-size: 14px;
`;

export const SearchButton = styled.button`
    display: flex;
    padding: 8px;
    margin-left: 15px;
    background-color: ${props => props.theme.accentColor1};
    color: ${props => props.theme.textColor};
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor} ;
    border-radius: 50px;
    cursor: pointer;
    width: 100px;
    height: 50px;   
    &:hover {
        filter: brightness(1.3);
    }
`;
