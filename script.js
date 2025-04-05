function openModal(title, imageUrl, description, price) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImg').src = imageUrl;
    document.getElementById('modalDesc').innerText = description;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('productModal').classList.remove('hidden');
  }
  
  function closeModal() {
    document.getElementById('productModal').classList.add('hidden');
  }
  