import {extendObservable, runInAction} from 'mobx';
import qs from 'qs';

export default class FlickPhoto {
    constructor() {
        extendObservable(this, {
            results: [],
            query: '',
            page: 1,
            count: 0,
            rowsPerPage: 10,
            sort:'relevance',
            notFound:''
        });
    }
    search() {
        if (this.query){
            const self = this;
            var option = {
                method: 'flickr.photos.search',
                api_key: '2d24ec6e1b02c85b4a127c8b1bc3fa7d',
                format: 'json',
                extras: 'url_m',
                nojsoncallback: 1
            };
            self.notFound = '';
            return new Promise((resolve, reject) => {

                option.text = this.query;
                option.per_page = this.rowsPerPage;
                option.page = this.page;
                option.sort = this.sort;

                const encodedQuery = qs.stringify(option);
                fetch(`https://api.flickr.com/services/rest?${encodedQuery}`)
                    .then((response) => {
                        if (response.ok)
                            return response.json();
                        else reject(`${response.status}:${response.statusText}`);
                    })
                    .then((json) => {
                        runInAction(() => {
                            if (json.code) {
                                reject(json);
                            }
                            else{
                                self.results = json.photos.photo;
                                // self.page = json.photos.page;
                                self.rowsPerPage = json.photos.perpage;
                                self.count = json.photos.total;
                                self.notFound = self.results.length>0?'':"Not found";
                                resolve();
                            }
                        });
                    })
                    .catch((error) => {
                        runInAction(() => {
                            self.results = [];
                            reject(error);
                        });
                    });
            });
        }
    }

    updateQuery(value) {
        runInAction(() => this.query = value);
    }

    onChangePage(event, page) {
        runInAction(() => this.page = page+1);
        this.search();
    }

    onChangeRowsPerPage(event) {
        runInAction(() => this.rowsPerPage = event.target.value);
        this.search();
    }

    onChangeOrder(sort) {
        runInAction(() => this.sort = sort);
        this.search();
    }
}
