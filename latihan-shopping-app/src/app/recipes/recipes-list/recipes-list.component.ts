import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Coto Makassar', 'Makanan Khas Daerah Makassar, Sulawesi Selatan', 
              'https://asset.kompas.com/crops/ljY1r3f3HJaNEuLip3iARQOaK-E=/0x1226:3000x3226/750x500/data/photo/2021/06/11/60c2acf88c6f0.jpg'),
              new Recipe('Kaledo', 'Makanan Khas Kota Palu, Sulawesi Tengah', 
              'https://upload.wikimedia.org/wikipedia/commons/e/eb/Kaledo_soup%2C_Central_Sulawesi%2C_2018-09-16.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
