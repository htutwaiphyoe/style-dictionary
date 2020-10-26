oadPhotos = async (query) => {
    try {
        let url = "/photos";
        let params = {
            page: this.state.page,
        };
        this.setState({
            requested: true,
        });
        if (query) {
            if (this.state.query !== query && this.state.query !== "") {
                this.setState({
                    search: true,
                    query,
                    page: 1,
                    photos: [],
                    loading: true,
                });
            }
            url = "/search/photos";

            if (!this.state.search) {
                this.setState({
                    search: true,
                    query,
                    page: 1,
                    photos: [],
                    loading: true,
                });
            }

            params = {
                page: this.state.page,
                query,
            };
        }
        const response = await unsplash.get(url, {
            params,
        });

        let photos = [...this.state.photos];

        const data = query ? response.data.results : response.data;
        photos.forEach((photo) => {
            data.forEach((el, index) => {
                if (el.id === photo.id) {
                    data.splice(index, 1);
                }
            });
        });

        this.setState({
            photos: [...photos, ...data],
            requested: false,
            loading: false,
        });
    } catch (err) {
        this.setState({
            error: true,
        });
    }
};
