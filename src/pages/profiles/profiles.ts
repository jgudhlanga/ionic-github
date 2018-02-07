import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';

import { GithubServiceProvider} from "../../providers/github-service/github-service";
import {RepoDetailsPage} from "../repo-details/repo-details";

@IonicPage()
@Component({
    selector: 'page-profiles',
    templateUrl: 'profiles.html',
})
export class ProfilesPage {

    profiles: any;
    repos: any;
    github_user = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, private githubService: GithubServiceProvider,
                private loadingCtrl: LoadingController, private toastController: ToastController) {

    }

    ionViewDidLoad() {

    }

    onSubmit() {
        var that = this;
        var loader = this.loadingCtrl.create({
            content:  "Please wait..."
        })
        loader.present();
        this.getProfile(this.github_user);
        this.github_user = '';
        loader.dismiss();
    }

    reset() {
        this.profiles = '';
        this.github_user = '';
    }

    showRepos(github_user) {
        this.getRepos(github_user);
    }

    getProfile(username) {
        this.githubService.getProfile(username).subscribe(response => {
           this.profiles = response;
        });
    }

    getRepos(username) {
        this.githubService.getRepos(username).subscribe(res =>{
            this.repos = res;
        })
    }

    repoTapped(event, repo) {
        this.navCtrl.push(RepoDetailsPage, {
            repo: repo
        })
    }
}
