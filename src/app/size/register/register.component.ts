import { Component, OnInit } from '@angular/core';
import { UsersComponent } from 'src/app/admin/users/users.component';
import { UserService } from 'src/app/services/user.service';

declare const $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// ประกาศตัวแปรแบบ object เพื่อใช้ bind ข้อมูลในฟอร์มลงทะเบียน
model = {
  name:'',
  gender: '',
  address:'',
  telephone:'',
  email: '',
  username:'',
  password:'',
  statusid:''

};
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
register(): void {
  // close modal
  $('#registerModal').modal('hide');
  this.model.statusid = '2'; // 2 คือผู้ใช้งาน
  // console.log(this.model);
  // เรียกใช้ userservice เพื่อ post ข้อมูล
  this.userService.postUser(this.model)
  .subscribe(result=>{
  //  console.log(result);
  alert(result.status);
  });
  
}
}
