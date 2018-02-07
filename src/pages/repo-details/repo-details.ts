import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-repo-details',
    templateUrl: 'repo-details.html',
})
export class RepoDetailsPage {

    selectedRepo: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.selectedRepo = this.navParams.get('repo');
    }

    ionViewDidLoad() {
    }

}
