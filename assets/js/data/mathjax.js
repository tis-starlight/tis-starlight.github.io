---
layout: compress
# WARNING: Don't use '//' to comment out code, use '{% comment %}' and '{% endcomment %}' instead.
---

{%- comment -%}
  See: <https://docs.mathjax.org/en/latest/options/input/tex.html#tex-options>
{%- endcomment -%}

MathJax = {
  loader: { load: ['[tex]/physics', '[tex]/color', 'ui/lazy'] },
  tex: {
    {%- comment -%} start/end delimiter pairs for in-line math {%- endcomment -%}
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ],
    {%- comment -%} start/end delimiter pairs for display math {%- endcomment -%}
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    packages: {'[+]': ['physics', 'color']},
    {%- comment -%} equation numbering {%- endcomment -%}
    tags: 'ams',
    macros: {
      'e': '\\mathrm{e}',
      'NN': '\\mathbb{N}',
      'RR': '\\mathbb{R}',
      'ZZ': '\\mathbb{Z}',
      'QQ': '\\mathbb{Q}',
      'NP': '\\mathsf{NP}',
    },
  },
  options: {
    lazyMargin: '200px',
  },
  svg: { fontCache: 'global' }
};
