import { Component, OnInit } from '@angular/core';
import { faPhoneAlt,faEnvelopeOpen,faMapMarker,faAddressBook, 
  faGlobe,faUser,faFlag,faLanguage,faDotCircle,faCalendarAlt,faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  phone = faPhoneAlt;
  email = faEnvelopeOpen;
  location = faMapMarker;
  pinCode = faAddressBook;
  website = faGlobe;
  birthday = faCalendarAlt;
  marriageStatus = faUser;
  nationality = faFlag;
  language = faLanguage;
  dot = faDotCircle;
  link = faLink;
  constructor() { }

  ngOnInit(): void {
  }

  
}
