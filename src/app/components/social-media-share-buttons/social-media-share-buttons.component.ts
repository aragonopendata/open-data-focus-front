import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-social-media-share-buttons',
templateUrl: './social-media-share-buttons.component.html',
styleUrls: ['./social-media-share-buttons.component.scss']
})
export class SocialMediaShareButtonsComponent implements OnInit {

pageURL = encodeURI(location.href);
message = encodeURI(
'Me gustaría compartir mi historia de datos con vosotros!'
);

twitterAPI = `https://twitter.com/intent/tweet?text=${this.pageURL}. ${this.message}`;
linkedinAPI = `https://linkedin.com/shareArticle?url=${this.pageURL}&title=${this.message}`;
constructor() {}

ngOnInit(): void {}

twitterClick(event: Event) {
window.open(this.twitterAPI);
}
linkedinClick(event: Event) {
window.open(this.linkedinAPI);
}

}
