import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.scss',
  selector: 'app-user-profile-component',
  imports: [RouterModule] // Don't forget this!
})
export class UserProfileComponent {
  private route = inject(ActivatedRoute);
  // Get the 'id' from the URL path
  userId = this.route.snapshot.paramMap.get('id');
}
