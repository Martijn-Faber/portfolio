const BASE_PROTOCOL = 'http';
const BASE_HOSTNAME = 'localhost';
const BASE_PORT = 8081;

const BASE = {
    hostname: BASE_HOSTNAME,
    port: BASE_PORT,
    url: `${BASE_PROTOCOL}://${BASE_HOSTNAME}:${BASE_PORT}`
};

const config = {
    base: BASE,
};

export default config;