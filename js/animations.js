// --header animation--
const tl = gsap.timeline({
    defaults: { duration: .8, ease: "Power3.easeOut" },
  });
  

  // delay to help load images before they're displayed
  gsap.set(".hero-img", { display: "inline-block", delay: 1.2 });
  gsap.set(".cta-btn", { display: "inline-block", delay: 1.2 });
  tl.fromTo(
    ".hero-img",
    { scale: 1.3, borderRadius: "0rem" },
    {
      scale: 1,
      borderRadius: "3rem",
      delay: 1.2,
      duration: 2.5,
      ease: "elastic.out(1.5,1)",
    }
  );
  
  // timeline for header animation
  tl.fromTo(".slide-left", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1}, "<30%");
  tl.fromTo(".slide-right", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<");
  tl.fromTo(".cta-btn", { y: 8, scale: .85, opacity: 0 }, { y: 0,scale: 1 , opacity: 1, duration: 1}, "<40%");
  tl.fromTo(".cta1", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
  tl.fromTo(".cta2", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<40%");
  tl.fromTo(".cta3", { y: "-100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<");
  tl.fromTo(".cta4", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
  tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<40%");
  tl.fromTo(".cta6", { y: "-100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<");
  tl.fromTo(".arrows", {opacity: 0 }, {opacity: 1, delay: 2, duration: 2});
  tl.fromTo(".scroll-text", {opacity: 0 }, {opacity: 1, duration: 2}, "<");

  
  //Split text alternative
  const logo = document.querySelector(".logo");
  // splits logo into individual letter as an array
  const letters = logo.textContent.split("");
  
  // removes original logo so it is not duplicated when the second split version is rendered
  logo.textContent = "";
  
  // gets each letter in the array and adds it to the page one after the other with letter class
  letters.forEach((letter) => {
    logo.innerHTML += '<span class="letter">' + letter + "</span>";
  });
  // makes each letter element an inline-block
  gsap.set(".letter", { display: "inline-block" });
  // uses stagger to animate each letter one after the other with a slight delay
  gsap.fromTo(
    ".letter",
    { y: "100%" },
    { y: 0, delay: 4, stagger: 0.1, ease: "back.out(3)" }
  );


//Pin the first page
const tlIntro = gsap.timeline({
    scrollTrigger: {
    // start point
    trigger: ".first-page",
    // how far into the element the animation starts
    start: "0%",
    // how far into the element the animation ends
    end: "100%",
    // stops the selected page from moving till animation is complete helpful to add scroll animations where elements stay in one position but animate as the user scrolls or to move next page over the top
    pin: true,
    // lets the next element scroll up over the top
    pinSpacing: false,
    scrub: true,
    },
});



//Pin the second page
const tlAbout = gsap.timeline({
    scrollTrigger: {
      // start point
      trigger: ".second-page",
      // how far into the element the animation starts
      start: "500%",
      // how far into the element the animation ends
      end: "100%",
      // stops the selected page from moving till animation is complete helpful to add scroll animations where elements stay in one position but animate as the user scrolls or to move next page over the top
      pin: true,
      // lets the next element scroll up over the top
      pinSpacing: false,
    },
  });

  tlIntro.fromTo(
    ".page1",
    {opacity: 1 },
    { opacity: 0,},
    "<"
);



  // --www. animation--
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };