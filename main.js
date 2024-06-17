function showImages() {
  const inputDate = document.getElementById('inputDate').value;
  const imageContainer = document.getElementById('imageContainer');
  const selection = document.getElementById('selectLab').value;
  let url;

  if(selection == "1")
  {
    url = 'https://celine10811020.github.io/test01/hoho.json';
  }else if(selection == "2")
  {
    url = 'https://celine10811020.github.io/test01/hoho3.json';
  }else
  {
    imageContainer.innerHTML = '<p>請選擇實驗室。</p>';
    return;
  }

console.log(selection);

  if(inputDate == "")
  {
    imageContainer.innerHTML = '<p>請輸入日期。</p>';
    return;
  }

  // Fetch images data from JSON file (or you can hardcode it in JS if preferred)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const selectedImage = data.find(image => {
        return parseInt(inputDate) >= parseInt(image.start) && parseInt(inputDate) <= parseInt(image.end);
      });

      if (selectedImage) {
        const imagePath = selectedImage.path;
        const imageElement = document.createElement('img');
        imageElement.onload = function() {
          const containerHeight = imageElement.height; // 取得圖片的實際高度
          imageContainer.style.height = containerHeight + 'px'; // 設置容器高度為圖片高度
        };
        imageElement.src = imagePath;

        const closeButton = document.createElement('button');
        closeButton.className = 'close-btn';
        closeButton.innerHTML = 'X';
        closeButton.onclick = function() {
          imageContainer.innerHTML = '';
        };

        imageContainer.innerHTML = ''; // Clear previous images
        imageContainer.appendChild(imageElement);
        imageContainer.appendChild(closeButton);
      } else {
        imageContainer.innerHTML = '<p>找不到符合日期範圍的結果。<br>請檢查輸入格式是否錯誤。</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching images data:', error);
      imageContainer.innerHTML = '<p>發生錯誤，無法取得圖片。</p>';
    });
}

document.getElementById("inputDate").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    showImages();
  }
});

document.getElementById("inputDate").onclick = function() {
  document.getElementById('inputDate').value = "";
};
