
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/featured-deals.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-featureddealsdetails',
  templateUrl: './featureddealsdetails.page.html',
  styleUrls: ['./featureddealsdetails.page.scss'],
})
export class FeatureddealsdetailsPage implements OnInit {
  movie = null;
  imageBaseUrl = environment.images;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe((res) => {
      this.movie = res;
    });
  }

  openHomepage(url) {
    window.open(url, '_blank');
  }
}
