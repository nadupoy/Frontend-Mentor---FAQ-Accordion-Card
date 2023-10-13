# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project workflow](#project-workflow)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Mobile - 375px](./screenshots/Mobile%20-%20375px.png)
*Mobile - 375px*

![Desktop - 1440px](./screenshots/Desktop%20-%201440px.png)
*Desktop - 1440px*

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://faq-accordion-card-nadupoy.netlify.app/](https://faq-accordion-card-nadupoy.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Git
- Github

### Project workflow

- I opted to separate the illustrations as their behaviour would vary across different screen sizes. With the box illustration being visible only on desktop and different sizes of the larger illustration appearing on different screens, I implemented this as shown in the markup below:

```html
<img src="./images/illustration-box-desktop.svg" alt="box-illustration" class="box-illustration">

<picture class="illustration">
  <source srcset="./images/illustration-woman-online-mobile.svg" media="(max-width: 1439px)">
  <source srcset="./images/illustration-woman-online-desktop.svg, ./images/illustration-box-desktop.svg" media="(min-width: 1440px)">
        
  <img src="./images/illustration-woman-online-mobile.svg" alt="illustration-of-woman-browsing-online">
</picture>
```

<br>

- The [`<details>`](https://www.w3schools.com/tags/tag_details.asp) element came was applicable for the FAQs, with it's built-in toggle feature for hiding and showing the answers.
```html
<details>
  <summary class="questions">
    How many team members can I invite?
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/>
    </svg>
  </summary>
  
  <p class="answers">
    You can invite up to 2 additional users on the free plan. There is no limit on team members for the Premium plan.
  </p>
</details>
```

<br>

- Each `<details>` element required a custom drop-down symbol that involved changing the [`list-style-type`]() and the [`display`]() property, in conjuction with using a custom symbol within the [`<summary>`]() element.
```css
.questions {
    list-style-type: none;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    height: 40px;
    color: var(--text-very-dark-desaturated-blue);
}
```

<br>

- This was my first time using CSS variables in a project.
```css
:root {
  ...
  --text-dark-grayish-blue: hsl(240, 6%, 50%);
  --bg-gradient-soft-violet: hsl(273, 75%, 66%);
  ...
}

...

body {
    background: linear-gradient(var(--bg-gradient-soft-violet), var(--bg-gradient-soft-blue));
    ...
}
```

<br>

- I added an event handler to the `toggle` event of all the `<detail>` elements using a `for(...) {...}`.<br>
The event handlers used were [`anonymous functions`]() in the form of [`arrow functions`](), since the functions used are short and comprise of a few statements:

```js
...

for (let detail of details) {
    detail.addEventListener('toggle', () => {
        let question = detail.firstElementChild;
        question.classList.toggle('questions-toggled');
        ...
    }

...
```

### What I learned

- Setting the z-index to a negative value as attempted with `.faqs` on desktop rendered the details element unable to open when clicked (i.e. unresponsive to user interaction).<br>
The interactivity of the element seemed to have been affected by the value of the z-index.

- On using 'transform' vs. 'margin' to change the positioning of elements, 'transform' respects the (grid) display positioning, interferes with the alignments of the elements and does not stack the "grid areas" of the elements on top of each other. Using 'margin' respects the alignment of the elements and enables stacking their "grid areas" on top of each other.

- Difference between Nodes and Elements. Nodes include elements, whitespaces, text & comments. Whereas Elements only include HTML Elements.

- Always commit your code when working on a branch to avoid merge conflicts. Commit code before starting and/or switching work btwn branches.

### Continued development

- Git merging to better understand how to seamlessly merge different branches.
- CSS animations for the `<details>` arrow icons and box illustration with repect to browser events.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- LinkedIn - [Grace Sampao](https://www.linkedin.com/in/grace-sampao-49a3129b/)
- Frontend Mentor - [@nadupoy](https://www.frontendmentor.io/profile/nadupoy)
- Github - [@nadupoy](https://github.com/nadupoy)
