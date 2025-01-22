// Function to hide the image, button, and footer
function hideElements() {
    document.getElementById('image').style.display = 'none';
    document.getElementById('changeButton').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
  }
  
  // Simulate page change by modifying the hash
  function simulatePageChange() {
    hideElements();
      // Change in page
      window.location.hash = "BrandsUsedForPhishing";
        // The new page
        document.getElementById('content').innerHTML = `
        <h1>The top 50 brands used for phishing.</h1>
        <p>Don't fall for fake websites like these, Be aware of what you're clicking on.</p>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Brand</th>
                    <th scope="col">Phishing Site</th>
                </tr>
            </thead>
            <tbody>
            <tr><td>AT&T Inc.</td><td>att-rsshelp[.]com</td></tr>
            <tr><td>PayPal</td><td>paypal-opladen[.]be</td></tr>
            <tr><td>Microsoft</td><td>login[.]microsoftonline.ccisystems[.]us</td></tr>
            <tr><td>DHL</td><td>dhlinfos[.]link</td></tr>
            <tr><td>Meta</td><td>facebookztv[.]com</td></tr>
            <tr><td>Internal Revenue Service</td><td>irs-contact-payments[.]com</td></tr>
            <tr><td>Verizon</td><td>loginnnaolcccom[.]weebly[.]com</td></tr>
            <tr><td>Mitsubishi UFJ NICOS Co., Ltd.</td><td>cufjaj[.]id</td></tr>
            <tr><td>Adobe</td><td>adobe-pdf-sick-alley[.]surge[.]sh</td></tr>
            <tr><td>Amazon</td><td>login-amazon-account[.]com</td></tr>
            <tr><td>Apple</td><td>apple-grx-support-online[.]com</td></tr>
            <tr><td>Wells Fargo & Company</td><td>connect-secure-wellsfargo-com.herokuapp[.]com</td></tr>
            <tr><td>eBay, Inc.</td><td>www[.]ebay8[.]bar</td></tr>
            <tr><td>Swiss Post</td><td>www[.]swiss-post-ch[.]com</td></tr>
            <tr><td>Naver</td><td>uzzmuqwv[.]naveicoipa[.]tech</td></tr>
            <tr><td>Instagram (Meta)</td><td>instagram-com-p[.]proxy.webtoppings[.]bar</td></tr>
            <tr><td>WhatsApp (Meta)</td><td>joingrub-whatsapp-pistol90[.]duckdns[.]org</td></tr>
            <tr><td>Rakuten</td><td>rakutentk[.]com</td></tr>
            <tr><td>East Japan Railway Company</td><td>www[.]jreast[.]co[.]jp[.]card[.]servicelist[].bcens[.]net</td></tr>
            <tr><td>American Express Company</td><td>www[.]webcome-aexp[.]com</td></tr>
            <tr><td>KDDI</td><td>aupay[.]kddi-fshruyrt[.]com</td></tr>
            <tr><td>Office365 (Microsoft)</td><td>office365loginonlinemicrosoft[.]weebly[.]com</td></tr>
            <tr><td>Chase Bank</td><td>safemailschaseonlineserviceupgrade09[.]weebly[.]com</td></tr>
            <tr><td>AEON</td><td>aeon-ver1fy[.]shop</td></tr>
            <tr><td>Singtel Optus Pty Limited</td><td>myoptus[.]mobi</td></tr>
            <tr><td>Coinbase Global, Inc.</td><td>supp0rt-coinbase[.]com</td></tr>
            <tr><td>Banco Bradesco S.A.</td><td>portalbradesco-acesso[.]com</td></tr>
            <tr><td>Caixa Econômica Federal</td><td>lnternetbanklng-caixa[.]com</td></tr>
            <tr><td>JCB Co., Ltd.</td><td>www[.]jcb-co-jp[.]ascaceeccea[.]ioukrg[.]top</td></tr>
            <tr><td>ING Group</td><td>ing-ingdirect-movil[.]com</td></tr>
            <tr><td>HSBC Holdings plc</td><td>hsbc-bm-online[.]com</td></tr>
            <tr><td>Netflix Inc</td><td>renew-netflix[.]com</td></tr>
            <tr><td>Sumitomo Mitsui Banking Corporation</td><td>smbc[.]co[.]jp[.]xazee[.]com</td></tr>
            <tr><td>Nubank</td><td>nuvip2[.]ru</td></tr>
            <tr><td>Bank Millennium SA</td><td>www[.]bankmillenium-pl[.]com</td></tr>
            <tr><td>National Police Agency Japan</td><td>sun[.]pollice[.]xyz</td></tr>
            <tr><td>Allegro</td><td>powiadomienieallegro[.]net</td></tr>
            <tr><td>InPost</td><td>www.inpost-polska-lox.order9512951[.]info</td></tr>
            <tr><td>Correos</td><td>correosa[.]online</td></tr>
            <tr><td>FedEx</td><td>fedexpress-couriers[.]com</td></tr>
            <tr><td>LinkedIn (Microsoft)</td><td>linkkedin-2[.]weebly[.]com</td></tr>
            <tr><td>United States Postal Service</td><td>uspstrack-7518276417-addressredelivery-itemnumber.netlify[.]app</td></tr>
            <tr><td>Alphabet</td><td>www[.]googlecom[.]vn10000[.]cc</td></tr>
            <tr><td>The Bank of America Corporation</td><td>baanofamericase8[.]hostfree[.]pw</td></tr>
            <tr><td>Deutscher Paketdienst</td><td>dpd-info[.]net</td></tr>
            <tr><td>Banco Itaú Unibanco S.A.</td><td>silly-itauu[.]netlify[.]app</td></tr>
            <tr><td>Steam</td><td>gift-steam-discord[.]com</td></tr>
            <tr><td>Swisscom AG</td><td>swiss-comch[.]duckdns[.]org</td></tr>
            <tr><td>LexisNexis</td><td>mexce[.]live</td></tr>
            <tr><td>Orange S.A.</td><td>orange-france24[.]yolasite[.]com</td></tr>
            </tbody>
        </table>
    `;
  }
  
  // Attach the simulatePageChange function to the button
  document.getElementById('changeButton').onclick = simulatePageChange;
  
  // Detect URL hash changes
  window.addEventListener('hashchange', function() {
    console.log('Page hash changed:', window.location.hash);
    document.body.style.backgroundColor = '#282c34';
    document.body.style.color = '#f1f1f1';
  });
  