window.onload = function() {
  alert("歡迎來到和和聯合診所日捐紀錄資料區～\r\n本網頁資料紀錄從20210506開始。\r\n請先選擇欲查詢之實驗室，並輸入日期後，並按下「查詢」按鈕，即可顯示紀錄。\r\n若要關閉圖片，可按圖片右上角的「X」。");
};

function showImages() {
  const inputDate = document.getElementById('inputDate').value;
  const imageContainer = document.getElementById('imageContainer');
  const selection = document.getElementById('selectLab').value;
  let url;

  if(selection == "1")
  {
    if(parseInt(inputDate) >= parseInt(20240506)) //update
    {
      url = 'https://celine10811020.github.io/walkr/hoho.json';
    }else
    {
      url = 'https://celine10811020.github.io/walkr/hoho_history.json';
    }

  }else if(selection == "2")
  {
    if(parseInt(inputDate) >= parseInt(20240506)) //update
    {
      url = 'https://celine10811020.github.io/walkr/hoho3.json';
    }else
    {
      url = 'https://celine10811020.github.io/walkr/hoho3_history.json';
    }
  }else
  {
    imageContainer.innerHTML = '<p>請選擇實驗室。</p>';
    return;
  }

  if(inputDate == "")
  {
    imageContainer.innerHTML = '<p>請輸入日期。</p>';
    return;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const selectedImage = data.find(image => {
        return parseInt(inputDate) >= parseInt(image.start) && parseInt(inputDate) <= parseInt(image.end);
      });

      if(selectedImage)
      {
        const imagePath = selectedImage.path;
        const imageElement = document.createElement('img');
        imageElement.onload = function() {
          const containerHeight = imageElement.height;
          imageContainer.style.height = containerHeight + 'px';
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
      }else
      {
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
