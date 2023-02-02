import ArrowLogo from '../assets/images/Arrow Shape.png';
import PortalLogo from '../assets/images/Protal Shape.png';

export const registration = [
  { id: 0, icon: ArrowLogo, title: 'Attendee Registration', discription: 'Start by Creating a general description workflow' },
  { id: 1, icon: ArrowLogo, title: 'Attendee Registration', discription: 'Start by Creating a general description workflow' },
  { id: 2, icon: ArrowLogo, title: 'Attendee Registration', discription: 'Start by Creating a general description workflow' },
];
export const experiences = [
  { id: 0, icon: PortalLogo, title: 'Attendee Portal', discription: "Manage the Portal that attendee will see after they've register for the event" },
];

export const settings = [
  { id: 0, title: 'General', discription: 'Define Attendee types & attributes' },
  { id: 1, title: 'Title', discription: 'Description that explain the value goes here. Description that explains the value goes here' },
  { id: 2, title: 'Title', discription: 'Description that explain the value goes here. Description that explains the value goes here' },
];

export const sidebarMenu = [
  { id: 0, text: 'Guide', subMenu: [] },
  {
    id: 1,
    text: 'Attendees',
    subMenu: [
      { id: 's0', text: 'Attendee' },
      { id: 's1', text: 'Attendee type' },
      { id: 's2', text: 'Package' },
      { id: 's3', text: 'Reg Code' },
      { id: 's4', text: 'Discounts' },
    ],
  },
  { id: 2, text: 'Content', subMenu: [] },
  { id: 3, text: 'Exhibitors', subMenu: [] },
];
