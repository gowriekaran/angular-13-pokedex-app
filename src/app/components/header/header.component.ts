import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/service/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchService.receiveSearchInputJob().subscribe((message) => {
      if (message == 'reset') {
        this.searchTerm = '';
      } else {
        this.searchTerm = message;
      }
    });
  }

  search(): void {
    this.router.navigateByUrl('/search/' + this.searchTerm);
  }
}
