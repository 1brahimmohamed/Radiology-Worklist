const createImageIDs = () => {

    const MyImageIds = [];

    for(let i = 0; i < 10; i++) {
        MyImageIds.push(`wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT00000${i}.dcm`);
    }

    return MyImageIds;
};

export default createImageIDs
