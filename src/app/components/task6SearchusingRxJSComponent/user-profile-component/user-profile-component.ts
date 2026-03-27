import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Task6Service } from '../../../services/task6Service/task6-service';

@Component({
  standalone: true,
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.scss',
  selector: 'app-user-profile-component',
  imports: [RouterModule, ReactiveFormsModule] // Don't forget this!
})
export class UserProfileComponent {
  private dataService = inject(Task6Service); // Assume DataService is defined elsewhere
  private route = inject(ActivatedRoute);
  // Get the 'id' from the URL path
  userId = this.route.snapshot.paramMap.get('id');

  // Create the Form "Brain"
  reviewForm = new FormGroup({
    rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    comment: new FormControl('', [Validators.required, Validators.minLength(10)])
  });


onSubmit() {
    if (this.reviewForm.valid) {
      const reviewData = this.reviewForm.value;
      
      // We call a service to POST this data
      this.dataService.postReview(reviewData).subscribe(response => {
        alert('Review submitted successfully!');
        this.reviewForm.reset();
      });
    }
  }
}
