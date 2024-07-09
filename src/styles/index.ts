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
    media: {
        bp1: '(max-width: 1210px)', 
        bp2: '(max-width: 768px)',
        bp3: '(max-width: 480px)', 
    },
});

export const Container = styled('main', {
    backgroundColor: '$background',
    display: "flex",
    flexDirection: "column",
    minHeight: '100vh',
    justifyContent: "space-between",
    alignItems: 'center',
    padding: '50px',

    '@bp1': {
        padding: '20px',
    },
});

export const Wrapper = styled('div', {
    display: 'flex',
    width: '100%',
    maxWidth: 1200, 
    alignItems: 'flex-start',

    '@bp1': {
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export const Header = styled('header', {
    width: '100%',
    padding: 50,
    backgroundColor: '$background',

    '@bp1': {
        padding: '20px', 
    },
    
    '@bp3': {
        padding: 0,
        img: {
            width: '100%',
            marginBottom: 50,
        }
    },
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
    minHeight: 800,
    gap: '32px',
    marginLeft: 'auto', 
    marginTop: '-150px', 

    '@bp1': {
        marginTop: '20px', 
        minHeight: '600px', 
        marginLeft: '0', 
    },

    '.message-section': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',

        h2: {
            alignSelf: 'center',
            margin: '0px 0 8px 0',
            fontSize: '1.5rem',
        },
    
        p: {
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: '$button',
            wordBreak: 'break-all',
            margin: '16px 0',
        },
        
        button: {
            alignSelf: 'center',
            marginTop: '16px',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '$button',
            color: '$white',
            cursor: 'pointer',

            '&:hover': {
                backgroundColor: '$buttonHover',
            },
        },

     
    }
});



export const InputSection = styled('div', {
    width: '100%',
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    gap: '16px',

    textarea: {
        width: '100%',
        maxWidth: 680,
        minHeight: 48,
        padding: "20px 0 10px 20px",
        borderRadius: '10px',
        border: '1px solid $graytext',
        fontSize: "2.1rem",
        color: "$button",
        resize: 'none', 
        overflow: 'hidden',

        '&::placeholder': {
            color: '$button',
        },

        '&:focus': {
            borderColor: '$button',
            outline: 'none',
        },
    },

    '@bp1': {
        textarea: {
            maxWidth: '100%', 
            boxSizing: 'border-box', 
        }
    },
});

export const ButtonSection = styled('div', {
    width: '100%',
    display: "flex",
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: "end",
    marginTop: 200,
    gap: '16px',

    

    '.alert-message': {
        textAlign: 'left',
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", 
        width: '100%',
        gap: 10,
    },

    '.buttons': {
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        width: '100%',

        '@bp1': {
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '1rem',
        }
    },

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

    '@bp1': {
        alignItems: 'center', 
        marginTop: '50px', 

        '.alert-message': {
            display: "flex",
            alignItems: "center",
            justifyContent: "center", 
            width: '100%',
            gap: 10,
        },
    },
});



