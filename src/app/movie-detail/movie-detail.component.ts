import {
    Component,
    OnInit,
    OnDestroy,
    Input
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    MovieService
} from '../movie.service';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
    movie: object;
    moviename: string;

    constructor(private route: ActivatedRoute, private router: Router, private mvSvc: MovieService) {
        this.movie = {};
        // this.movie = this.route.snapshot.data[0];
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.movie = params; // In a real app: dispatch action to load the details here
        });

        // this.movie = this.mvSvc.getMovie(this.moviename);

    }

    ngOnDestroy() {
        // this.movie.unsubscribe();
    }
    btnClick = function() {
        this.router.navigate(['/']);
    };
}
