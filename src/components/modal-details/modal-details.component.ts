import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  open(content) {
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {

    }, (reason) => {

    });
  }

  ngOnInit() {
  }

}
