import { createStitches } from "@stitches/react";

export const {
    config, 
    styled,
    globalCss,
    keyframes, 
    getCssText, 
    theme, 
    createTheme,
    css,
} = createStitches({
    theme: {
        colors: {
            background: '#F3F5FC',
            button: '#0A3871',
            buttonHover: '#072B5C', 
            white: '#FFFFFF', 
            black: '#000000', 
            gray: '#D8DFE8',
            graytext: '#495057',
            placeholder: '#0A3871', 
        },
    },
});

export const Container = styled('main', {
    backgroundColor: '$background',
    display: "flex",
    minHeight: '100vh',
    justifyContent: "center",
    alignContent: 'center',
  
    input: {
        width: '100%',
        maxWidth: 680,
        height: 48,
        padding: '0 16px',
        marginBottom: '16px',
        borderRadius: '4px',
        border: '1px solid $graytext',
        fontSize: "2.1rem",
        color: "$button",

        '&::placeholder': {
            color: '$button', 
        },

        '&:focus': {
            borderColor: '$button',
            outline: 'none', 
        },
    },
});

export const Header = styled('header', {
    width: '100%',
    padding: 50,
    backgroundColor: '$background',
});

export const MessageSection = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '$white',
    borderRadius: '8px',
    height: '100%',
    width: '100%',
    maxWidth: 400,
    minHeight: 900,
    gap: '32px',

    '.message-section': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

        h2: {
            margin: '0 0 8px 0',
            fontSize: '1.5rem',
        },
    
        p: {
            fontSize: '1rem',
            color: '$graytext',
        }
    }
});

export const InputSection = styled('div', {
    width: '100%',
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',

    button: {
        borderRadius: 24,
        width: 328,
        height: '67px',
        border: '1px solid $button',
        transition: 'background-color 0.3s ease, transform 0.3s ease',

        '&:hover': {
            transform: 'scale(1.05)',
        },
    },

    '.buttons': {
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        width: '100%',
        maxWidth: 680,
        marginTop: '16px', 
    },

    '.Crypto': {
        backgroundColor: '$button',
        color: "$white",
        fontSize: '1rem',

        '&:hover': {
            backgroundColor: '$buttonHover', 
        },
    },

    '.DesCrypto': {
        backgroundColor: '$gray',
        color: "$button",
        fontSize: '1rem',

        '&:hover': {
            backgroundColor: '#b0b8c2', 
        },
    },
});
