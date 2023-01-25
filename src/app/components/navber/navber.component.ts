import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css']
})
export class NavberComponent implements OnInit {

  constructor(private translate:TranslateService) { }

  ngOnInit(): void {
  }

  defLang(){
    this.translate.setDefaultLang("ar")
  }
}
