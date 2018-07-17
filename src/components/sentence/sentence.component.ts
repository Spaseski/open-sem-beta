import { Component, OnInit, Input } from '@angular/core';
import { Sentence } from '../../models/sentence';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {

  constructor(
  ) { }

  @Input() public sentence:Sentence;

  ngOnInit() {
  }

}
