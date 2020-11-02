export const updateObject = (oldObj, updatedObject) => {
    return {
        ...oldObj,
        ...updatedObject,
    };
};
