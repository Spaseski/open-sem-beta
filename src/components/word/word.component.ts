import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../../models/word';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  @Input() public word: Word;

  openDetails(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {

    }, (reason) => {

    });
  }

  ngOnInit() {
  }

}
