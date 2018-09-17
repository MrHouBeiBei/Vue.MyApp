let baseHost;

if(process.env.NODE_ENV === 'development') {
    baseHost = 'development---'
} else if (process.env.NODE_ENV === 'preProdDev') {
    baseHost = 'preProdDev---'
}

export default baseHost;