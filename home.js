const icons = [
    { iconClass: 'fa-brands fa-python' },
    { iconClass: 'fa-brands fa-html5' },
    { iconClass: 'fa-brands fa-css3-alt' },
    { iconClass: 'fa-brands fa-square-js' },
    { iconClass: 'fa-solid fa-mobile' }
  ];
  
  const allicons = document.getElementById('allicons');
  
  icons.forEach((icon) => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const i = document.createElement('i');
  
    span.classList.add('icon');
    i.classList.add('fa', icon.iconClass);
  
    span.appendChild(i);
    div.appendChild(span);
    allicons.appendChild(div);
  });

  var typed = new Typed('.soft', {
    strings: ['This text will be typed', 'One letter at a time'],
    typeSpeed: 50
  });