import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() activeLink = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(selected: string) {
    this.activeLink.emit(selected);
  }
}
