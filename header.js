(function () {
  var title    = (typeof FH_TITLE    !== 'undefined') ? FH_TITLE    : 'The First Horseman';
  var subtitle = (typeof FH_SUBTITLE !== 'undefined') ? FH_SUBTITLE : '';
  var category = (typeof FH_CATEGORY !== 'undefined') ? FH_CATEGORY : 'Prophecy &bull; Scripture';

  var html = `
<div style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);color:#fff;padding:60px 20px;text-align:center;font-family:Georgia,serif;">
  <div style="max-width:800px;margin:0 auto;">
    <p style="font-size:0.9rem;color:#c9a227;letter-spacing:2px;text-transform:uppercase;margin-bottom:15px;">${category}</p>
    <h1 style="font-size:2.4rem;margin-bottom:20px;line-height:1.3;font-weight:normal;color:#fff;">${title}</h1>
    ${subtitle ? `<p style="font-size:1.1rem;opacity:0.85;max-width:600px;margin:0 auto 20px;color:#fff;">${subtitle}</p>` : ''}
    <p style="font-size:0.9rem;color:#c9a227;">By Kelly Smith</p>
  </div>
</div>

<div style="background:#1a1a2e;padding:15px 20px;text-align:center;font-family:Georgia,serif;border-bottom:1px solid #c9a227;">
  <a href="https://first-horseman.com/" style="color:#c9a227;text-decoration:none;font-size:0.95rem;">&#8592; Home</a>
  <span style="color:#c9a227;opacity:0.4;margin:0 15px;">|</span>
  <a href="https://first-horseman.com/blog-6877" style="color:#c9a227;text-decoration:none;font-size:0.95rem;">All Articles</a>
  <span style="color:#c9a227;opacity:0.4;margin:0 15px;">|</span>
  <a href="https://first-horseman.com/the-first-horseman-273074#get-access" style="color:#c9a227;text-decoration:none;font-size:0.95rem;">Get the Book</a>
  <span style="color:#c9a227;opacity:0.4;margin:0 15px;">|</span>
  <a href="https://first-horseman.com/faqs" style="color:#c9a227;text-decoration:none;font-size:0.95rem;">FAQ</a>
</div>
`;

  document.write(html);
})();
