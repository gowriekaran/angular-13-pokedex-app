import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search/search.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = 'Nothing Found!';
  @Input() resetLinkText: string = 'Reset';
  @Input() resetLinkRoute: string = '/';
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  resetSearchInput(): void {
    this.searchService.sendSearchInputJob('reset');
  }
}
