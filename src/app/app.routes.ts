import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
    {path: '', redirectTo: '/about',pathMatch: 'full' },
    {path:'about',component: AboutMeComponent},
    {path:'skills', component: SkillsComponent},
    {path: 'experience',component: ExperienceComponent}
];
