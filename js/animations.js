const tl = gsap.timeline({
    defaults: { duration: .8, ease: "Power3.easeOut" },
  });
  
  tl.fromTo(
    ".hero-img",
    { scale: 1.3, borderRadius: "0rem" },
    {
      scale: 1,
      borderRadius: "3rem",
      delay: 0.35,
      duration: 2.5,
      ease: "elastic.out(1.5,1)",
    }
  );
  
  // timeline for header animation
  tl.fromTo(".slide-left", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<40%");
  tl.fromTo(".slide-right", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<");
  tl.fromTo(".cta-btn", { y: 8, scale: .85, opacity: 0 }, { y: 0,scale: 1 , opacity: 1, duration: 1}, "<40%");
  tl.fromTo(".cta1", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
  tl.fromTo(".cta2", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<40%");
  tl.fromTo(".cta3", { y: "-100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<");
  tl.fromTo(".cta4", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
  tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<40%");
  tl.fromTo(".cta6", { y: "-100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<");
  tl.fromTo(".arrows", {opacity: 0 }, {opacity: 1, delay: 3.5, duration: 3 });

  
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
    { y: 0, delay: 3.5, stagger: 0.1, ease: "back.out(3)" }
  );