import { Component, OnInit } from '@angular/core';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  briefcase = faBriefcase;

  constructor() {
  }
  ngOnInit(): void {
    
  }
  events = [
    {
      id: 0,
      title: 'School Management',
      content: " Developed the api using .net(c#) with mysql with stored Procedures, It is a project where the students can do their entry in barcode reader and the entry and exit is noted and all other campus activites are carried out the entire data are auto-generated in a excel sheet in a particular format and mailed to the principal on a monthly basis.",
      date: '2019 - 2022',
      icon: "https://th.bing.com/th/id/OIP.d7vt-ZwwYkLrcgMf53SU6QHaFO?w=284&h=200&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 1,
      title: 'Conversia',
      content: "It is a platform where the general doctor and the expert doctor can connect a meeting(share files in meeting room and share screen for presentation) to clarify doubts and the meeting is arranged by telecaller person.",
      date: '2019 - 2022',
      icon: "https://th.bing.com/th/id/OIP.d7vt-ZwwYkLrcgMf53SU6QHaFO?w=284&h=200&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 2,
      title: 'Handwritting Application',
      content: "Develop the website for medical reps to add the doctor under them and they can able to wish based on their zodiac signs and a beautiful quotes printed in a coffee mug with Angular as front-end",
      date: '2019 - 2022',
      icon: "https://th.bing.com/th/id/OIP.d7vt-ZwwYkLrcgMf53SU6QHaFO?w=284&h=200&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 3,
      title: 'CheckVertigo',
      content: "Developed api using PHP (codeigniter) , It is a website where a user can find their vertigo score by answering some health questions and the score is sent through email",
      date: '2019 - 2022',
      icon: "https://th.bing.com/th/id/OIP.d7vt-ZwwYkLrcgMf53SU6QHaFO?w=284&h=200&c=7&r=0&o=5&pid=1.7"
    }
  ];









}
