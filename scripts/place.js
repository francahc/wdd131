document.addEventListener('DOMContentLoaded', function() {
  
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    
    
    console.log('Last Modified:', document.lastModified);
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
    
  
    showWeather();
});


