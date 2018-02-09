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
                private loadingCtrl: LoadingController, private toastCtrl: ToastController) {

    }

    ionViewDidLoad() {

    }

    onSubmit() {

        this.getProfile(this.github_user);
        this.github_user = '';
    }

    reset() {
        this.profiles = '';
        this.github_user = '';
        this.repos = '';
    }

    showRepos(github_user) {
        this.getRepos(github_user);
    }

    getProfile(username) {
        let loader = this.loadingCtrl.create({
            content:  "Please wait..."
        });
        loader.present();
        this.githubService.getProfile(username).subscribe(response => {
           this.profiles = response;
        },
        error => {
            loader.dismiss();
            let toast = this.toastCtrl.create({
                message: error.error.message,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        },
            () =>{
                loader.dismiss();
            });
    }

    getRepos(username) {
        let loader = this.loadingCtrl.create({
            content:  "Please wait..."
        });
        loader.present();
        this.githubService.getRepos(username).subscribe(res =>{
            this.repos = res;
        },
          error => {
              loader.dismiss();
              let toast = this.toastCtrl.create({
                  message: error.error.message,
                  duration: 3000,
                  position: 'top'
              });
              toast.present();
        },
            () => {
                loader.dismiss();
            })
    }

    repoTapped(event, repo) {
        this.navCtrl.push(RepoDetailsPage, {
            repo: repo
        })
    }
}
