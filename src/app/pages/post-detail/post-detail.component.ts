import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'], 
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PostDetailComponent implements OnInit {
  postId: string | null = null;
  post: any = null; 
  allPosts = [
    {
      id: '1',
      title: 'Love advice from experts',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus sagittis nunc, at vestibulum magna. Sed nec hendrerit nisi. Nulla tempor, magna ut suscipit condimentum, magna est vestibulum magna, vestibulum vitae. Pellentesque lorem lectus sit amet vestibulum diam. Nullam facilisis, et purus elit blandit, nunc imperdiet mauruis vitae, ut consectetur ipsum imperdiet nec. Nunc sagittis risus id hendrerit. Aliquam placerat massa ut finibus. Cras eu malesuada fermentum, lacus elit molestie torta, et dictum magna mauris sit amet lectus. In hendrerit magna id purus. Nullam facilisis, et purus elit blandit, nunc imperdiet mauruis vitae, ut consectetur ipsum imperdiet nec. Nunc sagittis risus id hendrerit. Aliquam placerat massa ut finibus.
      
      Vivamus nec mattis ipsum. Nam feugilla lacus dolor. Aliquam luctus nisi vitae viverra et consectetur eu amet. Suspendisse nunc diam, hendrerit sit amet felis et, dignissim tempus nunc. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ipsum nibh eu. In lorem velit, commodo a sagittis eget, sagittis facilisis lorem.
      
      Donec et quam fringilla felis pellentesque porttitor nec, euis velit. Mauris sed dui vel nisi. Sed nec lacus, vestibule ut sagittis vitae, luctus. Aliquam sagittis varius nec accumsan. In semper magna metus, id amet non nisi. Quisque sagittis varius nec accumsan. In semper magna metus, id amet non nisi. Cras quam mauris, fringilla sed tempor sed, lobortis ac libendunt lacinia. Cras quam mauris, fringilla sed tempor sed, lobortis ac libendunt lacinia. Suspendisse eu purus non dui. Suspendisse eu purus non dui. Aliquam sed fringilla tortor, dignissim sed erat. Aenean id sem sit odio auctor hendrerit. Sed et dolor, suspendisse sit arcu tempus, pretium nunc nec, pellentesque ipsum. Nulla dictum est nunc, quis aliquet nunc placerat sed. Aliquam id felis nec augue. Suspendisse eu purus non dui. Aliquam sed fringilla tortor, dignissim sed erat. Aenean id sem sit odio auctor hendrerit. Sed et dolor, suspendisse sit arcu tempus, pretium nunc nec, pellentesque ipsum. Nulla dictum est nunc, quis aliquet nunc placerat sed.`,
      date: 'February 8, 2023',
      author: 'PhycoCode',
      category: 'Photography',
      image: '/travel-2.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus sagittis nunc.'
    },
    {
      id: '2',
      title: 'World’s hottest destinations for vegans',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae. Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.

      Vivamus nec mattis ipsum. Nam fringilla laoreet dolor. Aliquam lacus nisl, viverra ac convallis sit amet, fermentum vitae magna. Phasellus tristique risus non ipsum porttitor maximus. Vestibulum tincidunt elit ac posuere viverra. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ligula nibh a ex. In lorem velit, commodo a massa eget, sagittis dapibus risus.

      Integer et quam feugiat felis pellentesque porttitor nec quis purus. Mauris nisi ex, vulputate ut leo eget, convallis consequat ligula. Aliquam non tortor in ante euismod mollis sit amet non nisl. Quisque sagittis varius est in commodo. In semper ligula quam, id tempor orci tristique eu. Donec at bibendum lorem. Cras quis mi scelerisque enim euismod accumsan. Aliquam diam purus, porta id mattis et, commodo vel nisl. Suspendisse eu quam suscipit, euismod erat eget, dignissim sem. Aenean id sem et odio auctor laoreet sed id odio. Suspendisse ut arcu tempor, gravida justo nec, pellentesque ipsum. Nam dictum mi nunc, quis aliquet eros ullamcorper sed. Aliquam id nulla non ex efficitur aliquam. Suspendisse eu nunc sit amet est fringilla lobortis bibendum iaculis ante. Proin varius, lorem ac lobortis dictum, mauris diam eleifend metus, eu semper urna ante at libero.`,
      date: 'February 19, 2017',
      author: ' physcode',
      category: 'Photography',
      image: '/travel-1.jpg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
    },
    {
      id: '3',
      title: '7 Things You Tell People',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae. Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.

      Vivamus nec mattis ipsum. Nam fringilla laoreet dolor. Aliquam lacus nisl, viverra ac convallis sit amet, fermentum vitae magna. Phasellus tristique risus non ipsum porttitor maximus. Vestibulum tincidunt elit ac posuere viverra. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ligula nibh a ex. In lorem velit, commodo a massa eget, sagittis dapibus risus.

      Integer et quam feugiat felis pellentesque porttitor nec quis purus. Mauris nisi ex, vulputate ut leo eget, convallis consequat ligula. Aliquam non tortor in ante euismod mollis sit amet non nisl. Quisque sagittis varius est in commodo. In semper ligula quam, id tempor orci tristique eu. Donec at bibendum lorem. Cras quis mi scelerisque enim euismod accumsan. Aliquam diam purus, porta id mattis et, commodo vel nisl. Suspendisse eu quam suscipit, euismod erat eget, dignissim sem. Aenean id sem et odio auctor laoreet sed id odio. Suspendisse ut arcu tempor, gravida justo nec, pellentesque ipsum. Nam dictum mi nunc, quis aliquet eros ullamcorper sed. Aliquam id nulla non ex efficitur aliquam. Suspendisse eu nunc sit amet est fringilla lobortis bibendum iaculis ante. Proin varius, lorem ac lobortis dictum, mauris diam eleifend metus, eu semper urna ante at libero.`,
      date: 'February 8, 2017',
      author: 'physcode',
      category: 'Photography',
      image: '/travel-5.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
    },
    {
      id: '4',
      title: 'A rare opportunity to try Foundry coffee',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae. Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.

      Vivamus nec mattis ipsum. Nam fringilla laoreet dolor. Aliquam lacus nisl, viverra ac convallis sit amet, fermentum vitae magna. Phasellus tristique risus non ipsum porttitor maximus. Vestibulum tincidunt elit ac posuere viverra. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ligula nibh a ex. In lorem velit, commodo a massa eget, sagittis dapibus risus.

      Integer et quam feugiat felis pellentesque porttitor nec quis purus. Mauris nisi ex, vulputate ut leo eget, convallis consequat ligula. Aliquam non tortor in ante euismod mollis sit amet non nisl. Quisque sagittis varius est in commodo. In semper ligula quam, id tempor orci tristique eu. Donec at bibendum lorem. Cras quis mi scelerisque enim euismod accumsan. Aliquam diam purus, porta id mattis et, commodo vel nisl. Suspendisse eu quam suscipit, euismod erat eget, dignissim sem. Aenean id sem et odio auctor laoreet sed id odio. Suspendisse ut arcu tempor, gravida justo nec, pellentesque ipsum. Nam dictum mi nunc, quis aliquet eros ullamcorper sed. Aliquam id nulla non ex efficitur aliquam. Suspendisse eu nunc sit amet est fringilla lobortis bibendum iaculis ante. Proin varius, lorem ac lobortis dictum, mauris diam eleifend metus, eu semper urna ante at libero.`,
      date: 'January 9, 2017',
      author: 'physcode',
      category: 'Photography',
      image: '/travel-4.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
    },
    
    // Adding fashion posts
    {
      id: '5',
      title: 'Totes and Tarragon',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae. Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.

      Vivamus nec mattis ipsum. Nam fringilla laoreet dolor. Aliquam lacus nisl, viverra ac convallis sit amet, fermentum vitae magna. Phasellus tristique risus non ipsum porttitor maximus. Vestibulum tincidunt elit ac posuere viverra. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ligula nibh a ex. In lorem velit, commodo a massa eget, sagittis dapibus risus.

      Integer et quam feugiat felis pellentesque porttitor nec quis purus. Mauris nisi ex, vulputate ut leo eget, convallis consequat ligula. Aliquam non tortor in ante euismod mollis sit amet non nisl. Quisque sagittis varius est in commodo. In semper ligula quam, id tempor orci tristique eu. Donec at bibendum lorem. Cras quis mi scelerisque enim euismod accumsan. Aliquam diam purus, porta id mattis et, commodo vel nisl. Suspendisse eu quam suscipit, euismod erat eget, dignissim sem. Aenean id sem et odio auctor laoreet sed id odio. Suspendisse ut arcu tempor, gravida justo nec, pellentesque ipsum. Nam dictum mi nunc, quis aliquet eros ullamcorper sed. Aliquam id nulla non ex efficitur aliquam. Suspendisse eu nunc sit amet est fringilla lobortis bibendum iaculis ante. Proin varius, lorem ac lobortis dictum, mauris diam eleifend metus, eu semper urna ante at libero.`,
      date: 'March 16, 2017',
      author: 'physcode',
      category: 'Fashion',
      image: '/travel-blog-28.jpeg',
      hoverImage: '/travel-12.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Fashion enthusiast and lifestyle blogger with a passion for sustainable fashion.'
    },
    {
      id: '6',
      title: 'Toots And The Price Tags',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae. Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.

      Vivamus nec mattis ipsum. Nam fringilla laoreet dolor. Aliquam lacus nisl, viverra ac convallis sit amet, fermentum vitae magna. Phasellus tristique risus non ipsum porttitor maximus. Vestibulum tincidunt elit ac posuere viverra. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ligula nibh a ex. In lorem velit, commodo a massa eget, sagittis dapibus risus.`,
      date: 'February 18, 2017',
      author: 'physcode',
      category: 'Fashion',
      image: '/travel-blog-31.jpeg',
      hoverImage: '/travel-blog-33.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Fashion enthusiast and lifestyle blogger with a passion for sustainable fashion.'
    },
    {
      id: '7',
      title: 'Paraded Glam',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae. Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.`,
      date: 'January 27, 2017',
      author: 'physcode',
      category: 'Fashion',
      image: '/travel-blog-34.jpeg',
      hoverImage: '/travel-blog-32.jpg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Fashion enthusiast and lifestyle blogger with a passion for sustainable fashion.'
    },
    {
      id: '8',
      title: 'Margiela & Macaron',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae. Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.`,
      date: 'January 11, 2017',
      author: 'physcode',
      category: 'Fashion',
      image: '/travel-blog-26-768x486.jpeg',
      hoverImage: '/travel-blog-24.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Fashion enthusiast and lifestyle blogger with a passion for sustainable fashion.'
    },
    {
      id: '9',
      title: 'Caftan on a Hot Tin Roof',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae. Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.`,
      date: 'January 2, 2017',
      author: 'physcode',
      category: 'Fashion',
      image: '/travel-blog-27-768x486.jpeg',
      hoverImage: '/travel-4.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Fashion enthusiast and lifestyle blogger with a passion for sustainable fashion.'
    },
    {
      id: '10',
      title: 'Avocado Fashion Toast',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae. Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.`,
      date: 'December 27, 2016',
      author: 'physcode',
      category: 'Fashion',
      image: '/travel-blog-30-768x486.jpeg',
      hoverImage: '/travel-blog-33.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Fashion enthusiast and lifestyle blogger with a passion for sustainable fashion.'
    }
  ];
  
  relatedPosts: any[] = [];
  fashionPosts: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      
      // Find the post with the matching ID
      this.post = this.allPosts.find(post => post.id === this.postId);
      
      if (this.post) {
        // Get related posts from the same category, excluding the current post
        this.relatedPosts = this.allPosts
          .filter(p => p.category === this.post.category && p.id !== this.post.id)
          .map(p => ({
            id: p.id,
            title: p.title,
            excerpt: p.content.substring(0, 100) + '...',
            date: p.date,
            image: p.image
          }))
          .slice(0, 2); // Limit to 2 related posts
        
        // Get fashion posts for the fashion section
        this.fashionPosts = this.allPosts
          .filter(p => p.category === 'Fashion' && p.id !== this.post.id)
          .map(p => ({
            id: p.id,
            title: p.title,
            excerpt: p.content.substring(0, 100) + '...',
            date: p.date,
            image: p.image,
            hoverImage: p.hoverImage
          }))
          .slice(0, 4); // Limit to 4 fashion posts
      }
      
      console.log('Post ID:', this.postId);
      console.log('Post found:', this.post);
    });
  }
}