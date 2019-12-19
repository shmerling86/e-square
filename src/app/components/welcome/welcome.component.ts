import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  updateForm: FormGroup

  constructor(public router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    });
    this.updateForm.setValue({ name: 'Israel Israeli' })
  }

  confirmAndNevigate(name): void {
    this.toastr.info(`Hi ${name}, welcome to BookApp`);
    this.router.navigate(['bookShelf']);
  }

}
