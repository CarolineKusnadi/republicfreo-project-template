// Reloads the page when the logo is clicked
function reloadPage() {
  location.reload();
}

// Adds a floating animation effect to the vodka bottle image
const animateVodkaBottle = () => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: "power1.inOut" });

  tl.to(".vodkaImage > img", { duration: 3, y: "-=30", x: "+=20", rotation: "-=5" })
    .to(".vodkaImage > img", { duration: 2, y: "+=30", x: "-=20", rotation: "-=5" })
    .to(".vodkaImage > img", { duration: 3, y: "-=20", rotation: "+=5" })
    .to(".vodkaImage > img", { duration: 3, y: "+=20", rotation: "+=5" })
    .to(".vodkaImage > img", { duration: 3, y: "-=50" })
    .to(".vodkaImage > img", { duration: 3, y: "+=50" })
    .to(".vodkaImage > img", { duration: 3, y: "-=30" })
    .to(".vodkaImage > img", { duration: 3, y: "+=30" })
    .to(".vodkaImage > img", { duration: 2, y: "-=30" })
    .to(".vodkaImage > img", { duration: 2, y: "+=30" });

  return tl;
};

// Initiates the vodka bottle animation
animateVodkaBottle();

// Handles button click and triggers a sample animation
function handleButtonClick() {
  console.log("Button clicked!");
  gsap.to(".vodkaImage", {
      x: 100, // Moves the image 100px to the right
      duration: 1,
  });
}

// Sets up a carousel with draggable slides and visual progress dots
new Glider(document.querySelector('.glider'), {
  slidesToShow: 5,
  draggable: true,
  dots: '#dots',
});

// Configures scroll-triggered animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".comparisonSection").forEach(section => {
  let tl = gsap.timeline({
      scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => "+=" + section.offsetWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1
      },
      defaults: { ease: "none" }
  });

  // Animates the image inside the container in opposing directions
  tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0 }, { xPercent: 0 })
    .fromTo(section.querySelector(".afterImage img"), { xPercent: -100, x: 0 }, { xPercent: 0 }, 0);
});

