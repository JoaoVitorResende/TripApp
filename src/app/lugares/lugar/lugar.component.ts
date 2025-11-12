import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit {
 camposForm: FormGroup;
 listaCategorias: Categoria[] = [];
 constructor(private categoriaService: CategoriaService)
 {
    this.camposForm = new FormGroup({
      nome: new FormControl('',Validators.required),
      categoria: new FormControl('',Validators.required),
      localizacao: new FormControl('',Validators.required),
      urlFoto: new FormControl('',Validators.required),
      avaliacao: new FormControl('',Validators.required)
    });
 }
 ngOnInit(): void {
   this.categoriaService.GetTodas().subscribe(
    {
      next:(categorias) => this.listaCategorias = categorias,
      error: erro => console.error("não foi possivel pegar categorias", erro)
    }
   );
 }
 salvar()
 {
    console.log(this.camposForm.value);
 }
}
