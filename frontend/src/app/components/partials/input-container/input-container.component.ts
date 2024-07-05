<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-container',
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-container',
>>>>>>> e0f527d15952fafb06f3222abcfaad80ab0f31cb
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit {
<<<<<<< HEAD
  @Input()label!:string;
  @Input()bgColor='white';
=======

>>>>>>> e0f527d15952fafb06f3222abcfaad80ab0f31cb
  constructor() { }

  ngOnInit(): void {
  }

}
