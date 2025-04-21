import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PhotographyComponent implements OnInit {
  featuredPost = {
    id: '1',
    title: 'Love advice from experts',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus.',
    image: 'assets/images/photography-featured.jpg',
    category: 'Photography',
    date: 'February 21, 2017',
    author: 'John Doe'
  };

  // In your component where you define the posts
  posts = [
    {
      id: 1,
      title: "World’s hottest destinations for vegans",
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus.',
      image: "/assets/images/photo1.jpg",
      hoverImage: "/assets/images/photo1-hover.jpg", // Add this alternate image
      category: 'Photography',
      date: 'February 19, 2017'
    },
    {
      id: '3',
      title: '7 Things You Tell People',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus.',
      image: 'assets/images/photography-2.jpg',
      category: 'Photography',
      date: 'February 9, 2017'
    },
    {
      id: '4',
      title: 'A rare opportunity to try Foundry coffee',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus.',
      image: 'assets/images/photography-3.jpg',
      category: 'Photography',
      date: 'January 9, 2017'
    },
    {
      id: '5',
      title: 'The best camera equipment for landscape photography',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus.',
      image: 'assets/images/photography-4.jpg',
      category: 'Photography',
      date: 'January 5, 2017'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
