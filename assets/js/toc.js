document.addEventListener('DOMContentLoaded', () => {
  const tocContainer = document.createElement('nav');
  tocContainer.id = 'toc';
  const main = document.querySelector('main');
  if (main) {
    main.prepend(tocContainer);
  }
  
  const headings = document.querySelectorAll('h1, h3, h5');
  let currentList = document.createElement('ol');
  tocContainer.appendChild(currentList);
  
  headings.forEach(heading => {
    if (!heading.id) {
      heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-');
    }
    
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    listItem.appendChild(link);
    
    if (heading.tagName === 'H1') {
      currentList = document.createElement('ol');
      tocContainer.appendChild(currentList);
      listItem.classList.add('h1');
      currentList.appendChild(listItem);
    } else if (heading.tagName === 'H3') {
      let lastH1List = tocContainer.querySelector('ol:last-child');
      if (!lastH1List) {
        lastH1List = document.createElement('ol');
        tocContainer.appendChild(lastH1List);
      }
      const sublist = document.createElement('ol');
      listItem.appendChild(sublist);
      listItem.classList.add('h3');
      lastH1List.appendChild(listItem);
      currentList = sublist;
    } else if (heading.tagName === 'H5') {
      listItem.classList.add('h5');
      currentList.appendChild(listItem);
    }
    
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  const h3Items = tocContainer.querySelectorAll('.h3 > ol');
  h3Items.forEach(sublist => {
    const parentLi = sublist.parentElement;
    parentLi.classList.add('collapsible', 'expanded');
    parentLi.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A') {
        parentLi.classList.toggle('expanded');
      }
    });
  });
  
  // Highlight active ToC link on scroll and handle sticky behavior
  const tocLinks = tocContainer.querySelectorAll('a');
  const headingElements = Array.from(headings);
  const stickyThreshold = 100; // Adjust this value as needed
  
  window.addEventListener('scroll', () => {
    // Handle sticky behavior
    if (window.pageYOffset >= stickyThreshold) {
      tocContainer.classList.add('sticky');
    } else {
      tocContainer.classList.remove('sticky');
    }
    
    // Highlight active link
    let current = '';
    headingElements.forEach(heading => {
      const headingTop = heading.offsetTop;
      if (pageYOffset >= headingTop - 60) {
        current = heading.getAttribute('id');
      }
    });
    
    tocLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
 });