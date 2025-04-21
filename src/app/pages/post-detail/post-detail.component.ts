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
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
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
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
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
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
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
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
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
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
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
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
    },
    // Adding sport posts
    {
      id: '11',
      title: 'The Santa Barbara Wildfire',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae.

      Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.

      Lorem Ipsum Dolor Synth
      Vivamus nec mattis ipsum. Nam fringilla laoreet dolor. Aliquam lacus nisl, viverra ac convallis sit amet, fermentum vitae magna. Phasellus tristique risus non ipsum porttitor maximus. Vestibulum tincidunt elit ac posuere viverra. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ligula nibh a ex. In lorem velit, commodo a massa eget, sagittis dapibus risus.

      Integer et quam feugiat felis pellentesque porttitor nec quis purus. Mauris nisi ex, vulputate ut leo eget, convallis consequat ligula. Aliquam non tortor in ante euismod mollis sit amet non nisl.

      Quisque sagittis varius est in commodo. In semper ligula quam, id tempor orci tristique eu. Donec at bibendum lorem. Cras quis mi scelerisque enim euismod accumsan. Aliquam diam purus, porta id mattis et, commodo vel nisl. Suspendisse eu quam suscipit, euismod erat eget, dignissim sem. Aenean id sem et odio auctor laoreet sed id odio. Suspendisse ut arcu tempor, gravida justo nec, pellentesque ipsum.

      Table of Contents

      Trip-Planning Strategies
      How to Find Lesbian-Friendly Travel Companies
      How to Find lesbian-Owned and -Friendly Accommodation
      The Best Lesbian Tours and Cruises
      How to Meet Other Lesbians While Traveling
      How to Travel Safe as a Lesbian
      Nam dictum mi nunc, quis aliquet eros ullamcorper sed. Aliquam id nulla non ex efficitur aliquam. Suspendisse eu nunc sit amet est fringilla lobortis bibendum iaculis ante. Proin varius, lorem ac lobortis dictum, mauris diam eleifend metus, eu semper urna ante at libero.

      Ink Business Preferred℠ Credit Card

      This is the latest premium card, with a big signup bonus and strong points-earning. It’s a $95 annual fee card, not a $450 annual fee card. And you can get a business card in fact you probably should.

      The Ink Business Preferred℠ Credit Card comes with an 80,000 Point Signup Bonus.
      Spend $5000 on your new card within 3 months and you’ll get 80,000 points. As you’ll see below, that can even be enough for a roundtrip business class award ticket between the US and Europe. (Chase points are super valuable because they transfer directly to a variety of airlines and hotels.)
      The card earns 3 Points Per Dollar on Travel and on Shipping and Advertising on Social Media and Search Engines.

      Chase points

      are one of the most valuable currencies

      and you’ll earn 3 points per dollar on travel — that’s airlines, hotels, rental cars, tolls, even Uber.
      As a result this displaces, for instance, a Citi Prestige Card which generously provides 3 points per dollar on air and hotel spend — because a Chase point is more valuable overall than a Citi point thanks to its transfer partners.

      You can earn these bonus points on up to $150,000 spend in bonus categories. Previously Chase’s business cards capped category bonus spend at $25,000 or $50,000 in a year.

      You get a pretty remarkable benefit, one I wish I had in the past, in $600 protection against theft or damage for your cell phone.

      P.S. – Want to go to Paris and Amsterdam? Well, come with me!! I’ll be leading a 9 day tour through these cities at the end of May! I’ll be taking you to my favorite restaurants, attractions, bars, and sights. We’ll hit the off the beaten stuff you won’t find in any guidebook. If you’re interested, click here to learn more about the itinerary and how to join.

      Want to share your tips and advice? Got questions? Visit the community forum to ask questions, get answers, meet people, and share your tips!`,
      date: 'March 16, 2017',
      author: 'physcode',
      category: 'Sport',
      image: 'travel-8.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
    },
    {
      id: '12',
      title: 'A Perfect Day in the Nature',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae.

      Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.

      Lorem Ipsum Dolor Synth
      Vivamus nec mattis ipsum. Nam fringilla laoreet dolor. Aliquam lacus nisl, viverra ac convallis sit amet, fermentum vitae magna. Phasellus tristique risus non ipsum porttitor maximus. Vestibulum tincidunt elit ac posuere viverra. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ligula nibh a ex. In lorem velit, commodo a massa eget, sagittis dapibus risus.

      Integer et quam feugiat felis pellentesque porttitor nec quis purus. Mauris nisi ex, vulputate ut leo eget, convallis consequat ligula. Aliquam non tortor in ante euismod mollis sit amet non nisl.

      Quisque sagittis varius est in commodo. In semper ligula quam, id tempor orci tristique eu. Donec at bibendum lorem. Cras quis mi scelerisque enim euismod accumsan. Aliquam diam purus, porta id mattis et, commodo vel nisl. Suspendisse eu quam suscipit, euismod erat eget, dignissim sem. Aenean id sem et odio auctor laoreet sed id odio. Suspendisse ut arcu tempor, gravida justo nec, pellentesque ipsum.

      Table of Contents

      Trip-Planning Strategies
      How to Find Lesbian-Friendly Travel Companies
      How to Find lesbian-Owned and -Friendly Accommodation
      The Best Lesbian Tours and Cruises
      How to Meet Other Lesbians While Traveling
      How to Travel Safe as a Lesbian
      Nam dictum mi nunc, quis aliquet eros ullamcorper sed. Aliquam id nulla non ex efficitur aliquam. Suspendisse eu nunc sit amet est fringilla lobortis bibendum iaculis ante. Proin varius, lorem ac lobortis dictum, mauris diam eleifend metus, eu semper urna ante at libero.

      Ink Business Preferred℠ Credit Card

      This is the latest premium card, with a big signup bonus and strong points-earning. It’s a $95 annual fee card, not a $450 annual fee card. And you can get a business card in fact you probably should.

      The Ink Business Preferred℠ Credit Card comes with an 80,000 Point Signup Bonus.
      Spend $5000 on your new card within 3 months and you’ll get 80,000 points. As you’ll see below, that can even be enough for a roundtrip business class award ticket between the US and Europe. (Chase points are super valuable because they transfer directly to a variety of airlines and hotels.)
      The card earns 3 Points Per Dollar on Travel and on Shipping and Advertising on Social Media and Search Engines.

      Chase points

      are one of the most valuable currencies

      and you’ll earn 3 points per dollar on travel — that’s airlines, hotels, rental cars, tolls, even Uber.
      As a result this displaces, for instance, a Citi Prestige Card which generously provides 3 points per dollar on air and hotel spend — because a Chase point is more valuable overall than a Citi point thanks to its transfer partners.

      You can earn these bonus points on up to $150,000 spend in bonus categories. Previously Chase’s business cards capped category bonus spend at $25,000 or $50,000 in a year.

      You get a pretty remarkable benefit, one I wish I had in the past, in $600 protection against theft or damage for your cell phone.

      P.S. – Want to go to Paris and Amsterdam? Well, come with me!! I’ll be leading a 9 day tour through these cities at the end of May! I’ll be taking you to my favorite restaurants, attractions, bars, and sights. We’ll hit the off the beaten stuff you won’t find in any guidebook. If you’re interested, click here to learn more about the itinerary and how to join.

      Want to share your tips and advice? Got questions? Visit the community forum to ask questions, get answers, meet people, and share your tips!`,
      date: 'February 27, 2017',
      author: 'physcode',
      category: 'sport',
      image: 'sportblog1.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
    },
    {
      id: '13',
      title: 'The Sun Is Underappreciated',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae.

      Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.

      Lorem Ipsum Dolor Synth
      Vivamus nec mattis ipsum. Nam fringilla laoreet dolor. Aliquam lacus nisl, viverra ac convallis sit amet, fermentum vitae magna. Phasellus tristique risus non ipsum porttitor maximus. Vestibulum tincidunt elit ac posuere viverra. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ligula nibh a ex. In lorem velit, commodo a massa eget, sagittis dapibus risus.

      Integer et quam feugiat felis pellentesque porttitor nec quis purus. Mauris nisi ex, vulputate ut leo eget, convallis consequat ligula. Aliquam non tortor in ante euismod mollis sit amet non nisl.

      Quisque sagittis varius est in commodo. In semper ligula quam, id tempor orci tristique eu. Donec at bibendum lorem. Cras quis mi scelerisque enim euismod accumsan. Aliquam diam purus, porta id mattis et, commodo vel nisl. Suspendisse eu quam suscipit, euismod erat eget, dignissim sem. Aenean id sem et odio auctor laoreet sed id odio. Suspendisse ut arcu tempor, gravida justo nec, pellentesque ipsum.

      Table of Contents

      Trip-Planning Strategies
      How to Find Lesbian-Friendly Travel Companies
      How to Find lesbian-Owned and -Friendly Accommodation
      The Best Lesbian Tours and Cruises
      How to Meet Other Lesbians While Traveling
      How to Travel Safe as a Lesbian
      Nam dictum mi nunc, quis aliquet eros ullamcorper sed. Aliquam id nulla non ex efficitur aliquam. Suspendisse eu nunc sit amet est fringilla lobortis bibendum iaculis ante. Proin varius, lorem ac lobortis dictum, mauris diam eleifend metus, eu semper urna ante at libero.

      Ink Business Preferred℠ Credit Card

      This is the latest premium card, with a big signup bonus and strong points-earning. It’s a $95 annual fee card, not a $450 annual fee card. And you can get a business card in fact you probably should.

      The Ink Business Preferred℠ Credit Card comes with an 80,000 Point Signup Bonus.
      Spend $5000 on your new card within 3 months and you’ll get 80,000 points. As you’ll see below, that can even be enough for a roundtrip business class award ticket between the US and Europe. (Chase points are super valuable because they transfer directly to a variety of airlines and hotels.)
      The card earns 3 Points Per Dollar on Travel and on Shipping and Advertising on Social Media and Search Engines.

      Chase points

      are one of the most valuable currencies

      and you’ll earn 3 points per dollar on travel — that’s airlines, hotels, rental cars, tolls, even Uber.
      As a result this displaces, for instance, a Citi Prestige Card which generously provides 3 points per dollar on air and hotel spend — because a Chase point is more valuable overall than a Citi point thanks to its transfer partners.

      You can earn these bonus points on up to $150,000 spend in bonus categories. Previously Chase’s business cards capped category bonus spend at $25,000 or $50,000 in a year.

      You get a pretty remarkable benefit, one I wish I had in the past, in $600 protection against theft or damage for your cell phone.

      P.S. – Want to go to Paris and Amsterdam? Well, come with me!! I’ll be leading a 9 day tour through these cities at the end of May! I’ll be taking you to my favorite restaurants, attractions, bars, and sights. We’ll hit the off the beaten stuff you won’t find in any guidebook. If you’re interested, click here to learn more about the itinerary and how to join.

      Want to share your tips and advice? Got questions? Visit the community forum to ask questions, get answers, meet people, and share your tips!`,
      date: 'February 13, 2017',
      author: 'physcode',
      category: 'sport',
      image: 'travel-6.jpg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
    },
    {
      id: '14',
      title: 'The perfect summer body',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae.

      Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.

      Lorem Ipsum Dolor Synth
      Vivamus nec mattis ipsum. Nam fringilla laoreet dolor. Aliquam lacus nisl, viverra ac convallis sit amet, fermentum vitae magna. Phasellus tristique risus non ipsum porttitor maximus. Vestibulum tincidunt elit ac posuere viverra. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ligula nibh a ex. In lorem velit, commodo a massa eget, sagittis dapibus risus.

      Integer et quam feugiat felis pellentesque porttitor nec quis purus. Mauris nisi ex, vulputate ut leo eget, convallis consequat ligula. Aliquam non tortor in ante euismod mollis sit amet non nisl.

      Quisque sagittis varius est in commodo. In semper ligula quam, id tempor orci tristique eu. Donec at bibendum lorem. Cras quis mi scelerisque enim euismod accumsan. Aliquam diam purus, porta id mattis et, commodo vel nisl. Suspendisse eu quam suscipit, euismod erat eget, dignissim sem. Aenean id sem et odio auctor laoreet sed id odio. Suspendisse ut arcu tempor, gravida justo nec, pellentesque ipsum.

      Table of Contents

      Trip-Planning Strategies
      How to Find Lesbian-Friendly Travel Companies
      How to Find lesbian-Owned and -Friendly Accommodation
      The Best Lesbian Tours and Cruises
      How to Meet Other Lesbians While Traveling
      How to Travel Safe as a Lesbian
      Nam dictum mi nunc, quis aliquet eros ullamcorper sed. Aliquam id nulla non ex efficitur aliquam. Suspendisse eu nunc sit amet est fringilla lobortis bibendum iaculis ante. Proin varius, lorem ac lobortis dictum, mauris diam eleifend metus, eu semper urna ante at libero.

      Ink Business Preferred℠ Credit Card

      This is the latest premium card, with a big signup bonus and strong points-earning. It’s a $95 annual fee card, not a $450 annual fee card. And you can get a business card in fact you probably should.

      The Ink Business Preferred℠ Credit Card comes with an 80,000 Point Signup Bonus.
      Spend $5000 on your new card within 3 months and you’ll get 80,000 points. As you’ll see below, that can even be enough for a roundtrip business class award ticket between the US and Europe. (Chase points are super valuable because they transfer directly to a variety of airlines and hotels.)
      The card earns 3 Points Per Dollar on Travel and on Shipping and Advertising on Social Media and Search Engines.

      Chase points

      are one of the most valuable currencies

      and you’ll earn 3 points per dollar on travel — that’s airlines, hotels, rental cars, tolls, even Uber.
      As a result this displaces, for instance, a Citi Prestige Card which generously provides 3 points per dollar on air and hotel spend — because a Chase point is more valuable overall than a Citi point thanks to its transfer partners.

      You can earn these bonus points on up to $150,000 spend in bonus categories. Previously Chase’s business cards capped category bonus spend at $25,000 or $50,000 in a year.

      You get a pretty remarkable benefit, one I wish I had in the past, in $600 protection against theft or damage for your cell phone.

      P.S. – Want to go to Paris and Amsterdam? Well, come with me!! I’ll be leading a 9 day tour through these cities at the end of May! I’ll be taking you to my favorite restaurants, attractions, bars, and sights. We’ll hit the off the beaten stuff you won’t find in any guidebook. If you’re interested, click here to learn more about the itinerary and how to join.

      Want to share your tips and advice? Got questions? Visit the community forum to ask questions, get answers, meet people, and share your tips!`,
      date: 'January 14, 2017',
      author: 'physcode',
      category: 'sport',
      image: 'travel-3.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
    },
    {
      id: '15',
      title: 'You big profit',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus. Sed eros augue, tempor et faucibus eu, cursus ac lacus. Ut sodales semper ante, at malesuada neque vestibulum vitae. Pellentesque luctus ipsum sit amet ligula facilisis rutrum. Nulla facilisi. Morbi rutrum nisi elementum urna faucibus, et porta elit lobortis. Donec imperdiet tristique tellus, ut consectetur ipsum tempus vitae.

      Nunc sagittis sem a leo rutrum, et lobortis purus rhoncus. Aliquam ipsum metus, ullamcorper quis dapibus ac, ullamcorper ac magna. Nulla faucibus, risus eu molestie fermentum, lectus elit tincidunt turpis, at dictum magna mauris sit amet lectus. Fusce malesuada rhoncus ultricies. In interdum, odio et dapibus interdum, turpis arcu gravida odio, quis bibendum est dui et magna. In posuere eget magna eget lacinia. Maecenas efficitur sollicitudin fermentum.

      Lorem Ipsum Dolor Synth
      Vivamus nec mattis ipsum. Nam fringilla laoreet dolor. Aliquam lacus nisl, viverra ac convallis sit amet, fermentum vitae magna. Phasellus tristique risus non ipsum porttitor maximus. Vestibulum tincidunt elit ac posuere viverra. Curabitur facilisis, libero at vestibulum commodo, est odio sagittis augue, non varius ligula nibh a ex. In lorem velit, commodo a massa eget, sagittis dapibus risus.

      Integer et quam feugiat felis pellentesque porttitor nec quis purus. Mauris nisi ex, vulputate ut leo eget, convallis consequat ligula. Aliquam non tortor in ante euismod mollis sit amet non nisl.

      Quisque sagittis varius est in commodo. In semper ligula quam, id tempor orci tristique eu. Donec at bibendum lorem. Cras quis mi scelerisque enim euismod accumsan. Aliquam diam purus, porta id mattis et, commodo vel nisl. Suspendisse eu quam suscipit, euismod erat eget, dignissim sem. Aenean id sem et odio auctor laoreet sed id odio. Suspendisse ut arcu tempor, gravida justo nec, pellentesque ipsum.

      Table of Contents

      Trip-Planning Strategies
      How to Find Lesbian-Friendly Travel Companies
      How to Find lesbian-Owned and -Friendly Accommodation
      The Best Lesbian Tours and Cruises
      How to Meet Other Lesbians While Traveling
      How to Travel Safe as a Lesbian
      Nam dictum mi nunc, quis aliquet eros ullamcorper sed. Aliquam id nulla non ex efficitur aliquam. Suspendisse eu nunc sit amet est fringilla lobortis bibendum iaculis ante. Proin varius, lorem ac lobortis dictum, mauris diam eleifend metus, eu semper urna ante at libero.

      Ink Business Preferred℠ Credit Card

      This is the latest premium card, with a big signup bonus and strong points-earning. It’s a $95 annual fee card, not a $450 annual fee card. And you can get a business card in fact you probably should.

      The Ink Business Preferred℠ Credit Card comes with an 80,000 Point Signup Bonus.
      Spend $5000 on your new card within 3 months and you’ll get 80,000 points. As you’ll see below, that can even be enough for a roundtrip business class award ticket between the US and Europe. (Chase points are super valuable because they transfer directly to a variety of airlines and hotels.)
      The card earns 3 Points Per Dollar on Travel and on Shipping and Advertising on Social Media and Search Engines.

      Chase points

      are one of the most valuable currencies

      and you’ll earn 3 points per dollar on travel — that’s airlines, hotels, rental cars, tolls, even Uber.
      As a result this displaces, for instance, a Citi Prestige Card which generously provides 3 points per dollar on air and hotel spend — because a Chase point is more valuable overall than a Citi point thanks to its transfer partners.

      You can earn these bonus points on up to $150,000 spend in bonus categories. Previously Chase’s business cards capped category bonus spend at $25,000 or $50,000 in a year.

      You get a pretty remarkable benefit, one I wish I had in the past, in $600 protection against theft or damage for your cell phone.

      P.S. – Want to go to Paris and Amsterdam? Well, come with me!! I’ll be leading a 9 day tour through these cities at the end of May! I’ll be taking you to my favorite restaurants, attractions, bars, and sights. We’ll hit the off the beaten stuff you won’t find in any guidebook. If you’re interested, click here to learn more about the itinerary and how to join.

      Want to share your tips and advice? Got questions? Visit the community forum to ask questions, get answers, meet people, and share your tips!`,
      date: 'August 10, 2016',
      author: 'physcode',
      category: 'sport',
      image: 'travel-12.jpeg',
      authorImage: '/d11848de30b8044df4b3c8232a30cf1c.jpeg',
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur egestas risus.'
    },
  ];
  
  relatedPosts: any[] = [];
  fashionPosts: any[] = [];
  sportPosts: any[] = [];

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
          
        // Get sports posts for the sports section
        this.sportPosts = this.allPosts
          .filter(p => (p.category === 'Sport' || p.category === 'sport') && p.id !== this.post.id)
          .map(p => ({
            id: p.id,
            title: p.title,
            excerpt: p.content.substring(0, 100) + '...',
            date: p.date,
            image: p.image,
            hoverImage: p.hoverImage || p.image // Use hoverImage if available, otherwise use the main image
          }))
          .slice(0, 4); // Limit to 4 sports posts
      }
      
      console.log('Post ID:', this.postId);
      console.log('Post found:', this.post);
    });
  }
}