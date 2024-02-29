import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    *{
        marigin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #222260;
        --primary-coler2: 'color: rgba(34, 34, 96, .6)';
        --primary-coler3: 'color: rgba(34, 34, 96, .4)';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    body {
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rggba(34, 34, 96, .6)
    }
`