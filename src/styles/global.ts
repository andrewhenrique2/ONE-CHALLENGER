import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    
    body: {
        '-webkit-font-smoothing': 'antialiased',
        fontFamily: 'Inter, sans-serif', 
        fontWeight: 400, 
        lineHeight: 1.6, 
    },
});
