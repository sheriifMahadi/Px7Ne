import auction from '../data/auction.gif'
import event from '../data/event.gif'
import znote from '../data/z-notes.gif'
const projects = {
  "data": [
    {
     id: 1,
     title: "Auction app",
     description: "Auction app built using Django and JavaScript",
     image: auction,
     github: "https://github.com/sheriifMahadi/django-auction-app",
     url: "https://mahadi.pythonanywhere.com/",
     alt: "auction-app-img"
    },
    {
      id: 2,
      title: "event notifier app",
      description: "A birthday tracker app with user functionalities and crud operations",
      image: event,
      github: "https://github.com/sheriifMahadi/event_notifier",
      url: "https://mahadisheriff.pythonanywhere.com/",
      alt: "event-app-img"
     },
    //  {
    //   id: 3,
    //   title: "z-notes",
    //   description: "A notes app built using Nodejs, React and RTK.",
    //   image: znote,
    //   github: "https://github.com/sheriifMahadi/notes_project_frontend",
    //   url: "https://z-note.netlify.app/",
    //   alt: "z-notes-img"
    //  },
  ]
}

export default projects
