# Frontend Mentor - Social media dashboard with theme switcher solution

![Design preview for the meet landing page coding challenge](./develop/assets/preview.jpg)

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

## Live Site

You can find the live version of the site [here](https://comforting-conkies-eb78c6.netlify.app).

## My Process

- I started with my stylesheet; setting up the reset, adding some utility classes and setting up the body.

- I then began working on each component of the site, starting with the header, making sure they were responsive and styled before moving on

## Challenges

- All the tutorials I found on web components had their html template (_as a string_), css and javascript all in one file but I didn't like the approach and managed to make a work around where I organized them similar to how I would in react, one folder with an html, css and javascript file
  I had to use the following method in order to bring the html into my javascript file,

  ```javascript
  fetch('./develop/components/Header/Header.html')
    .then((stream) => stream.text())
    .then((text) => {
      define(text);
    });
  ```

  and I simply linked my stylesheet(s) at the top of the html file in order to bring in my styles

  This caused other problems though, I could no longer use the same methods that were shown in any blog or article or video I could find to actually select my elements so I had to experiment and play around until I found a way to do so.

### Built With

- HTML
- CSS
- Javascript
- Web Components

### What I learned

- How to create and use native html web components, how to manipulate the shadow dom and how to organize the html, css and javascript into separate files for each component
- Some of the benefits of web components such as encapsulation of styles
- How troublesome it is to work with native web components, I can imagine what kind of difficulty transferring data between them will be. A compiler such as stencil would probably be a better choice than working with native custom elements like this

## Author

- [Portfolio Website](https://daniel-arzani-portfolio.netlify.app/)
- [Frontend Mentor Profile](https://daniel-arzani-portfolio.netlify.app/)

## Acknowledgments

- The frontend mentor platform for the challenge and the design files

- The frontend mentor slack platform which is incredibly helpful for peer review, especially on the topics of accessibility and best practices
