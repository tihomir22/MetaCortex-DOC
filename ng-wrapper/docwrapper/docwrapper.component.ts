import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'lib-docwrapper',
  templateUrl: './docwrapper.component.html',
  styleUrls: ['./docwrapper.component.scss']
})
export class DocwrapperComponent implements OnInit {

  public video:any="http://localhost:4400/index.html"

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName("iframe")[0].className = "fullScreen";
  }

}
