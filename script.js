
document.getElementById('enquiryForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const company = document.getElementById('company').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  const body = [
    'Name: ' + name,
    'Company: ' + company,
    'Phone: ' + phone,
    '',
    message
  ].join('\n');

  window.location.href =
    'mailto:ramesh.c@moxamaxkleen.com?subject=' +
    encodeURIComponent('MOXA MAXKLEEN Website Enquiry') +
    '&body=' + encodeURIComponent(body);
});
