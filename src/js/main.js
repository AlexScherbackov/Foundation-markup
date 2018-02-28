svg4everybody();

// @include('detect.js')
// @include('globals.js')
// @include('DinamicStyleWorker.js')
// @include('GoogleMaps.js')
// @include('PlaginsInitialisation.js')
// @include('Navigator.js')
const _initialize = {
 options: {
  colIndent: 20,
  mapProps: {
    center: {
      lat: 35.607682, 
      lng: -80.886076
    },
    zoom: 11,
    scrollwheel: false,
    mapTypeId: 'terrain',
  },
  'markers': [
  {adress: '348 Kenway Loop Mooresville, NC 28117', icon: 'images/woodlear.png', link: '', name: 'Wood leaf'},
  {adress: 'L21 Kenway Loop Mooresville, NC 28117', icon: 'images/fern-leaf.png', link: '', name: 'Fern leaf'},
  {adress: '108 Edgewater Park St,Davidson, NC 28036', icon: 'images/davidson-down.png', link: '', name: 'Davidson Down'},
  {adress: '155 Pine Mist Drive Mooresville, NC 28117', icon: 'images/whispering-oaks.png', link: '', name: 'Whispering Oaks'}
  ]
},
init(){
  _initialize._bindsEvent();
  _initialize._initSliders();
  _initialize._initMaps();
  /*_initialize._initReadMore();*/
},
_bindsEvent(){
 Navigator.eventListning(
   '#mobile-menu-btn',
   'click', 
   DinamicStyleWorker.elementClassToggle,
   null, 'mobile-menu-btn', 'mobile-menu', 'open'
   );

  Navigator.eventListning(
   window,
   'resize',
   ()=>{	
    if((document.body.clientWidth > 991)&&(document.querySelector('#mobile-menu').classList.contains('open'))){
     document.querySelector('#mobile-menu-btn').classList.remove('open')
     document.querySelector('#mobile-menu').classList.remove('open')
   }
 },
 null
 );

 Navigator.eventListning(
    window,
    'load', 
    DinamicStyleWorker.showGallery
  );
 Navigator.eventListning(
    window,
    'resize', 
    DinamicStyleWorker.showGallery
  );
  document.querySelectorAll('.navigate__link').forEach(
    (element)=>{
      Navigator.eventListning(
        element,
        'click',
        Navigator.scrollToId,
        null, element
      )
    }
  )
},
_initSliders(){
  const carousel = new PlaginsInitialization(
    ['.carousel'], 
    {
      items: 1, 
      dots: true, 
      autoplay: false,   
      loop: true,  
      rewind: false,   
      dotData: true,   
      dotsContainer: '.carousel__dots'
    },
    'owlCarousel');

  const testimonials = new PlaginsInitialization(
    ['.testimonials__slider', '.testimonials__control--left', '.testimonials__control--right'],
    {
      items: 1,
      autoplay: false,
      loop: true,
      rewind: false,
      autoplayHoverPause: true,
      onChange: function(){
        readMore('.testimonials__text');
      }
    }, 
    'owlCarousel',
    $('.testimonials__control--left').on('click', function (e) {
      e.preventDefault();
      $('.testimonials__slider').trigger('prev.owl.carousel', [300]);
    }),

    $('.testimonials__control--right').on('click', function (e) {
      e.preventDefault();
      $('.testimonials__slider').trigger("next.owl.carousel", [300]);
    })
    );
  
},
_initMaps(){
 initMap();
}, 
_initReadMore(){
  readMore('.testimonials__text');
}
}



$(document).ready(_initialize.init);

function initMap(){
  const googleWorker = new GoogleMaps('#map', _initialize.options.mapProps, _initialize.options.markers);
}

function readMore(selector){
  const $text = $(selector);
  $text.readmore({
    collapsedHeight: 152,
    embedCSS: false,
    moreLink: '<span class="testimonials__readmore-link">... Read more</span>',
    lessLink: ''
  });
}


