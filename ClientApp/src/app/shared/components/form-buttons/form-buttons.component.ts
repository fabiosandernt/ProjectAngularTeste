import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.css']
})

export class FormButtonsComponent implements OnInit {

  ngOnInit(): void { }

@Input() label: string;
@Output() onClick = new EventEmitter<any>();

onClickButton(event: any) {
    this.onClick.emit(event);
  }
  constructor() { }
}
