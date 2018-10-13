import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { SchoolService } from "../_services";
import { School } from "../_models";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private schoolService: SchoolService
  ) {}

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ["", Validators.required]
    });
  }

  addSchool() {
    this.schoolService.createSchool(this.addForm.value).subscribe(data => {
      // this.schoolService.schools.push()
     
      this.router.navigate(["dashboard"]);
    });
  }
}
