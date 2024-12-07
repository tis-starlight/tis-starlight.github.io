// Icons provided by https://devicon.dev/
const tools = [
  // Languages and frameworks
  { icon: 'c', iconType: 'plain', tag: 'clang', hint: 'C', isClickable: false },
  { icon: 'cplusplus', iconType: 'plain', tag: 'cpp', hint: 'C++', isClickable: false },
  { icon: 'csharp', iconType: 'plain', tag: 'csharp', hint: 'C#', isClickable: false },
  { icon: 'python', iconType: 'plain', tag: 'python', hint: 'Python', isClickable: false },
  { icon: 'php', iconType: 'plain', tag: 'php', hint: 'PHP', isClickable: false },
  // { icon: 'asm' },
  { icon: 'html5',  iconType: 'plain', tag: 'html', hint: 'HTML', isClickable: false },
  { icon: 'css3', iconType: 'plain', tag: 'css', hint: 'CSS', isClickable: false },
  { icon: 'bootstrap', iconType: 'plain', tag: 'bootstrap', hint: 'Bootstrap', isClickable: false },
  { icon: 'javascript', iconType: 'plain', tag: 'javascript', hint: 'Javascript', isClickable: false },
  { icon: 'mysql', iconType: 'original', tag: 'mysql', hint: 'MySQL', isClickable: false },
  { icon: 'powershell', iconType: 'plain', tag: 'powershell', hint: 'PowerShell', isClickable: false },
  { icon: 'bash', iconType: 'plain', tag: 'bash', hint: 'Bash', isClickable: false },
  { icon: 'git', iconType: 'plain', tag: 'git', hint: 'Git', isClickable: false },
  { icon: 'github', iconType: 'original', tag: 'github', hint: 'GitHub', isClickable: false },
  { icon: 'markdown', iconType: 'original', tag: 'markdown', hint: 'Markdown', isClickable: false },
  { icon: 'vscode', iconType: 'plain', tag: 'vscode', hint: 'Visual Studio Code', isClickable: false },
  { icon: 'visualstudio', iconType: 'plain', tag: 'visual-studio', hint: 'Visual Studio', isClickable: false },
  { icon: 'clion', iconType: 'plain', tag: 'clion', hint: 'CLion', isClickable: false },
  { icon: 'androidstudio', iconType: 'plain', tag: 'android-studio', hint: 'Android Studio', isClickable: false },
  { icon: 'qt', iconType: 'original', tag: 'qt', hint: 'Qt', isClickable: false },
  { icon: 'figma', iconType: 'plain', tag: 'figma', hint: 'Figma', isClickable: false },
  { icon: 'xd', iconType: 'plain', tag: 'xd', hint: 'XD', isClickable: false },
  { icon: 'photoshop', iconType: 'plain', tag: 'photoshop', hint: 'Photoshop', isClickable: false },
  { icon: 'illustrator', iconType: 'plain', tag: 'illustrator', hint: 'Illustrator', isClickable: false },
  { icon: 'premierepro', iconType: 'plain', tag: 'premiere', hint: 'Premiere', isClickable: false },
  { icon: 'aftereffects', iconType: 'plain', tag: 'after-effects', hint: 'After Effects', isClickable: false },
  // { icon: 'audition' },
  // { icon: 'mediaencoder' },
  // { icon: 'substancepainter' },
  // { icon: 'substancedesigner' },
  // { icon: 'marvelousdesigner' },
  // { icon: 'marmosettoolbag' },
  { icon: 'blender', iconType: 'original', tag: 'blender', hint: 'Blender', isClickable: false },
  { icon: 'threedsmax', iconType: 'plain', tag: '3ds-max', hint: '3ds Max', isClickable: false },
  { icon: 'maya', iconType: 'plain', tag: 'maya', hint: 'Maya', isClickable: false },
  // { icon: 'zbrush' },
  // { icon: 'marmosettoolbag' },
  // { icon: 'plasticity' },
  // { icon: 'fusion360' },
  // { icon: 'rizomuv' },
  // { icon: 'daz3d' },
  // { icon: 'charactercreator' },
  // { icon: 'quixelbridge' },
  // { icon: 'epicgames' },
  // { icon: 'steam' },
  { icon: 'unrealengine', iconType: 'original', tag: 'unreal-engine', hint: 'Unreal Engine', isClickable: false },
  { icon: 'unity', iconType: 'plain', tag: 'unity', hint: 'Unity', isClickable: false },
  { icon: 'windows11', iconType: 'original', tag: 'windows', hint: 'Windows', isClickable: false },
  { icon: 'android', iconType: 'plain', tag: 'android', hint: 'Android', isClickable: false },
  { icon: 'linux', iconType: 'plain', tag: 'linux', hint: 'Linux', isClickable: false },
  { icon: 'vsphere', iconType: 'plain', tag: 'vmware', hint: 'VMware Workstation', isClickable: false },
  // { icon: 'kalilinux' },
  // { icon: 'cheatengine' },
  // { icon: 'hexraysida' },
];

const container = document.getElementById('tools');

tools.forEach((tool) => {
  const icon = tool.icon;
  const iconType = tool.iconType ?? 'plain';
  const tag = tool.tag ?? icon;
  const title = tool.hint ?? tool.icon;
  const isClickable = tool.isClickable ?? true;

  const anchor = document.createElement('a');
  const classes = isClickable ? ['tool'] : ['tool', 'disabled'];
  anchor.classList.add(...classes);
  if (isClickable) {
    anchor.href = `/tags/${tag}`;
  }
  anchor.title = title.charAt(0).toUpperCase() + title.slice(1);

  const content = document.createElement('i');
  content.className = `tool-icon devicon-${icon}-${iconType}`;

  anchor.appendChild(content);
  container.appendChild(anchor);
});

document.querySelectorAll('.tool-icon').forEach((ti) => {
  ['mouseenter', 'touchstart'].forEach((event) =>
    ti.addEventListener(
      event,
      () => {
        ti.classList.add('colored');
        ti.parentElement.classList.add('hovered');
      },
      { passive: true }
    )
  );
  ['mouseleave', 'touchend', 'touchcancel'].forEach((event) =>
    ti.addEventListener(
      event,
      () => {
        ti.classList.remove('colored');
        ti.parentElement.classList.remove('hovered');
      },
      { passive: true }
    )
  );
});
