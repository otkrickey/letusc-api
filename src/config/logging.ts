const info = (namespace: string, message: string, object?: any) => {
    console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object ?? null);
};

const warn = (namespace: string, message: string, object?: any) => {
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object ?? null);
};

const error = (namespace: string, message: string, object?: any) => {
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object ?? null);
};

const debug = (namespace: string, message: string, object?: any) => {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object ?? null);
};

const getTimeStamp = (): string => {
    return new Date().toISOString();
};

export default { info, warn, error, debug };