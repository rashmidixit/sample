import { Component, OnInit, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.sass']
})
export class EditableComponent implements OnInit {

  constructor(private host: ElementRef) {
  }

  ngOnInit() {
  }

  private get element() {
    return this.host.nativeElement;
  }

}
