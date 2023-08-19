import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/types/card';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/types/recipes';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  card: Card[] = [];
  fruitData!: Recipe;
  loading!: boolean;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute, //ვიყენებთ კომპონენტში,რომ ინფორმაცია მივიღოთ აქტიური სტატუსის რაუთზე, ქვიერი პარამეტრებზე დ. ა. შ.
    public themeService: ThemeService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((paramMap) => {
      const ingr = paramMap.get('ingr'); //ingr ცვლადში ვინახავთ  ingr-მნიშვნელობას(ინფუთში შეტანილ მნიშვნელობას)

      if (ingr) {
        //ვამოწმებ არსებობს თუ არა  ingr
        //სერვისში ვაწვდი ingr -ს პარამეტრად

        this.dataService.getData(ingr).subscribe((res) => {
          this.fruitData = res;
          console.log(res);
        });
      }
    });
    this.dataService.getLoading().subscribe((load) => {
      this.loading = load; // მეთოდი იღებს მოწოდებულ loading-ის მდგომარეობას , და შემდეგ template-ში გავიტანთ. ?
    });
  }
}
