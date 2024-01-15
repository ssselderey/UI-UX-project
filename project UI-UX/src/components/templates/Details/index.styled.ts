import styled from 'styled-components';
// страница фильма
export const Details = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColor};
    transition: 0.1s;
    position: relative;
    @media (max-width: 768px) and (min-width: 576px)  {
        width: 100%;
    }
    @media (max-width: 576px) and (min-width: 324px) {
        width: 100%;
        grid-template-columns: 1fr;
        }
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
    z-index: 1;
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
        // padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px) {
        width: 100%;
        }

`;
export const ContentTitle = styled.span`
    letter-spacing: 1px;
    font-weight: 500;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    margin: 25px 0px;
    align-items: center;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
        width:100%
    }
    & a{
        font-family: Roboto;
        font-size:  ${props => props.theme.textSizeTitle};
        font-weight: 500;
        letter-spacing: 1px;
        transition: 0.3s;
        &:hover{
            transition: 0.3s;
            color: ${props => props.theme.accentColor1};
        }
    }
`;

export const Data = styled.div`
    display: grid;
    width: 100%;
    // align-items: center;
    // align-self: center;
    grid-template-columns: 2fr 3fr;
    grid-gap: 20px;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){   
        width: 100%;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {     
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {   
        width: 100%;  
    }
    @media (max-width: 768px) and (min-width: 576px)  {  
        width: 100%;  
        grid-template-columns: 1fr;
    }
    @media (max-width: 576px)  {
        width: 100%;
        grid-template-columns: 2fr;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    object-fit: cover;
    opacity: 0.3;
    @media (max-width: 768px) and (min-width: 576px)  {
        height: 500px;
        width: 100%;
    }
    @media (max-width: 576px) {
            width: 100%;
    }
`;

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

`;
export const Img = styled.img`
    aspect-ratio: 2/3
    display: grid;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow: 0px 3px 5px ${props=>props.theme.shadowColor};;
    margin: 0px 0px 20px 0px;
    @media (max-width: 768px)  {
        // margin: 0px 0px 10px 0px;
    }
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;

    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 2fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 2fr;
    }

`;

export const Button = styled.a`
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    color:white;
    background-color: white;
    border: 0px;
    border-radius:10px;
    font-size: ${props=>props.theme.textSizeTextM};
    &:hover{
        opacity: 0.7;
    }

`;
export const DownloadButton = styled(Button)`
    background-color: ${props=>props.theme.accentColor1};
`;
export const WatchButton = styled(Button)`
    background-color:${props=>props.theme.accentColor2};
`;

export const Description = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: flex-start;
    grid-template-columns: 1fr;
    grid-gap: 20px;
`;

export const Title = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 2px;
    font-weight: 500;
`;

export const Year = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;
export const DescriptionFull = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 25px;
    letter-spacing: 1px;
    text-align: justify;

`;
export const Genres = styled.div`
    display: grid;
    font-size: ${props=> props.theme.textSizeTextM};
    grid-template-columns: repeat(3,1fr);
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    grid-gap: 20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Statistic = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 35px;
    width: 100%;
    @media (max-width: 1200px) and (min-width: 768px)  {
        grid-gap: 25px;
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-gap: 20px;
    }
    @media (max-width: 576px)  {
        grid-gap: 20px;
    }
`;
export const TorrentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;

export const Torrents = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    aligh-text: center;
    font-size: 16px;

    @media (max-width: 1200px) and (min-width: 576px)  {
        grid-gap: 20px;
        grid-template-columns: 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }
`;
export const CommentsAll = styled.div`
display: inline-block;
height: auto;
margin: 0px 0px 30px 0px;
// justify-content: center;
width: 100%;
text-align: center;
margin-left:auto;
// margin-right:auto;
font-weight: 500;
font-size: ${props=> props.theme.textSizeTextL};
background-color: ${props => props.theme.iconColor};
border-radius: 10px;
padding: 10px 0px;
`;
export const CommentsWorkspace = styled.div`
display: inline-block;
width: 97%;
height: auto;
margin-top: 10px;
background-color: ${props=> props.theme.commentBackColor};
border-radius: 10px;
text-align: middle;
font-weight: 500;   
`;
export const CommentsWorkspace1 = styled.div`
display: inline-block;
border-radius: 10px;
width: 95%;
height: auto;
margin-top: 20px;
margin-bottom: 20px;
text-align: right;
// text-align: center;
height: auto;
font-size: 20px;
`;
export const CommentsWorkspace2 = styled.div`
display: inline-block;
border-radius: 10px;
background: green;
width: 95%;
margin-top: 10px;
text-align: center;
height: 40px;
`;
