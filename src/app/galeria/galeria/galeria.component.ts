import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { Lugar } from '../../lugares/lugar';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{
  lugares: Lugar[] = [];
  categorias: Categoria[] = [];
  constructor(private  lugarService: LugarService, private categoriaService: CategoriaService)
  {}
  ngOnInit(): void {
    this.categoriaService.GetTodas().subscribe(catego => this.categorias = catego);
    this.lugarService.GetTodas().subscribe(lug => this.lugares = lug);
    console.log(this.lugares[2].urlFoto);
  }
  getTotalEstrelas(lugar: Lugar) : string{
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0));
  }
}
