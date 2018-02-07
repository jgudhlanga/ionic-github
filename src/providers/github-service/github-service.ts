import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubServiceProvider {

    baseUrl: String;

    constructor(public http: HttpClient) {
        this.baseUrl = 'https://api.github.com/users/';
    }

    getProfile(username) {

        return this.http.get(this.baseUrl + username)
            .map(res => res);
    }

    getRepos(username) {
        return this.http.get(this.baseUrl + username + '/repos')
            .map(res => res);
    }
}
