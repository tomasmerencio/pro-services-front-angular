import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  yaEsMiembro: boolean;
  formulario: FormGroup;
  errorFormularioInvalido: boolean;
  errorCredenciales: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.yaEsMiembro = true;
    this.errorFormularioInvalido = false;
    this.errorCredenciales = false;
    this.formulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  mostrarFormularioDeRegistro() {
    this.yaEsMiembro = false;
  }

  mostrarFormularioDeIngreso() {
    this.yaEsMiembro = true;
  }

  ocultarErrores() {
    this.errorCredenciales = false;
    this.errorFormularioInvalido = false;
  }

  login() {
    if(!this.formulario.invalid){
      // validar y obtener token contra el SSO
      let username = this.formulario.controls.username.value;
      let password = this.formulario.controls.password.value;

      if(this.authService.tryLogin(username, password)){
        this.router.navigate(['']);
      } else {
        this.errorCredenciales = true;
      }
    }
    else {
      console.log("invalido");
      this.errorFormularioInvalido = true;
    }
  }

}
