document.getElementById('findSubdomains').addEventListener('click', () => {
  const domain = document.getElementById('domainInput').value.trim();
  const subdomainList = document.getElementById('subdomainList');
  
  // Clear previous results
  subdomainList.innerHTML = '';

  if (domain === '') {
    alert('Please enter a domain!');
    return;
  }

  // Mock subdomains for demonstration
  const subdomains = [
    `admin.${domain}`,
    `mail.${domain}`,
    `blog.${domain}`,
    `shop.${domain}`,
    `api.${domain}`,
    `dev.${domain}`,
    `test.${domain}`,
    `support.${domain}`,
    `secure.${domain}`,
    `cloud.${domain}`,
  ];

  // Add subdomains to the list
  subdomains.forEach(subdomain => {
    const li = document.createElement('li');
    li.textContent = subdomain;
    subdomainList.appendChild(li);
  });
});