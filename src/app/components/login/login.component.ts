import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.openModalWithComponent();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalWithComponent() {
    const initialState = {
      list: [
        'Логин',
        'Пароль',
        '...'
      ],
      title: 'Для доступа к разделу требуется авторизация'
    };
    this.modalRef = this.modalService.show(ModalContentComponent, { initialState });
  }

}


@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="handleClick()">Войти</button>
    </div>
  `
})
export class ModalContentComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(
    public bsModalRef: BsModalRef,
    private auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  handleClick() {
    this.auth.setAuthenticated();
    this.bsModalRef.hide();
    this.router.navigate(['projects']);
  }
}
