// Icons provided by https://fontawesome.com/
const socials = [
  { icon: 'tree', prefix: 'fas', tag: 'linktree', hint: 'Linktree', url: 'https://linktr.ee/tis.starlight' },
  { icon: 'github', prefix: 'fab', tag: 'github', hint: 'GitHub', url: 'https://github.com/tis-starlight' },
  { icon: 'youtube', prefix: 'fab', tag: 'youtube', hint: 'YouTube', url: 'https://www.youtube.com/@tis-starlight' },
  { icon: 'instagram', prefix: 'fab', tag: 'instagram', hint: 'Instagram', url: 'https://www.instagram.com/tis.starlight' },
  { icon: 'artstation', prefix: 'fab', tag: 'artstation', hint: 'ArtStation', url: 'https://www.artstation.com/tis-starlight' },
  { icon: 'behance', prefix: 'fab', tag: 'behance', hint: 'Behance', url: 'https://www.behance.net/tis-starlight' },
  { icon: 'deviantart', prefix: 'fab', tag: 'deviantart', hint: 'DeviantArt', url: 'https://www.deviantart.com/tis-starlight' },
  { icon: 'store', prefix: 'fas', tag: 'cgtrader', hint: 'CGTrader', url: 'https://www.cgtrader.com/tis-starlight' },
  { icon: 'cube', prefix: 'fas', tag: 'sketchfab', hint: 'Sketchfab', url: 'https://sketchfab.com/tis-starlight' },
];

const socialContainer = document.getElementById('socials');

socials.forEach((social) => {
  const { icon, prefix, hint, url } = social;

  const anchor = document.createElement('a');
  anchor.classList.add('social');
  anchor.href = url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.title = hint;

  const content = document.createElement('i');
  content.className = `${prefix} fa-${icon} social-icon`;

  anchor.appendChild(content);
  socialContainer.appendChild(anchor);
});

document.querySelectorAll('.social-icon').forEach((icon) => {
  ['mouseenter', 'touchstart'].forEach((event) =>
    icon.addEventListener(event, () => icon.classList.add('colored'), { passive: true })
  );
  ['mouseleave', 'touchend', 'touchcancel'].forEach((event) =>
    icon.addEventListener(event, () => icon.classList.remove('colored'), { passive: true })
  );
});
