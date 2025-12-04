import { HeaderComponent } from './../components/header/header.component';
import { Component } from '@angular/core';
import { AboutComponent } from '../components/about/about.component';
import { AchievementsComponent } from '../components/achievements/achievements.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ExperienceComponent } from "../components/experience/experience.component";
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutComponent, AchievementsComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grady982';
}
