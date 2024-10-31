


  const productSelect = document.getElementById('product');
  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
  });
  
  
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
  
 
  window.onload = function() {
      const reviewCount = localStorage.getItem('reviewCount') || 0;
      localStorage.setItem('reviewCount', Number(reviewCount) + 1);
  };

  
  