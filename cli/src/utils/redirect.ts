const redirect = (navigate, path = '/', delay = 2000) => {
    setTimeout(() => {
        navigate(path);
    }, delay);
}

export default redirect;
