export default (state = [], action) => {
    switch (action.type) {
        case "LOAD_PHOTOS":
            return loadPhotosHandler(state, action);
        case "RESET_PHOTOS":
            return [];
        default:
            return state;
    }
};

const loadPhotosHandler = (state, action) => {
    let photos = [...state];

    const data = action.payload;
    photos.forEach((photo) => {
        data.forEach((el, index) => {
            if (el.id === photo.id) {
                data.splice(index, 1);
            }
        });
    });

    return [...photos, ...data];
};
