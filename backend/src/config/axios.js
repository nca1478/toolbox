export const filesConfig = (filesURL) => {
    return {
        method: "get",
        url: filesURL,
        headers: {
            Authorization: "Bearer aSuperSecretKey",
            accept: "application/json",
        },
    };
};

export const fileconfig = (fileURL) => {
    return {
        method: "get",
        url: fileURL,
        headers: {
            Authorization: "Bearer aSuperSecretKey",
            accept: "application/json",
        },
    };
};
