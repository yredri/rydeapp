import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';
  user: User;
  user_id: string;

  constructor(private router: Router,
              private actRoute: ActivatedRoute,
              private userService: UserService) { 
    this.user_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.userService.getUser(this.user_id).subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  onSubmit(form: NgForm){
    this.userService.updateUser({
      id: this.user.id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      mobile: form.value.mobile,
      imageUrl: form.value.imageUrl
    })
    .subscribe(() => {
      this.router.navigate(['']);
      console.log("user successfully updated!");
    });
  }

}
