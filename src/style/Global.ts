import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #ced4da;
    }
    h1, h3{
        font-family: 'Inter', sans-serif;
    }
    p, span, button{
        font-family: 'Poppins', sans-serif;
    }
   a{
        text-decoration: none;
        
    }
    ::selection{
        background-color: #9739c8;
        color: #ced4da;
    }
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 15px;
        background-color: #9739c8;
    }
    ::-webkit-scrollbar-track{
        background: #0d1b2a;
    }
`;
