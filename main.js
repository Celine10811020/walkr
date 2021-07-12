var imageHe = [];
var iHe = 0;
var numberHe = 0;
var closeButtonHe = [];

var imageHe3 = [];
var iHe3 = 0;
var numberHe3 = 0;
var closeButtonHe3 = [];

function setup()
{
  createCanvas(1200, 50);

  textSize(15);
  text("和和聯合日捐紀錄", 23, 21);

  inputValueHe = createInput("請輸入日期");
  inputValueHe.size(90);
  inputValueHe.position(30,40);
  inputValueHe.mouseClicked(clearInputHe);

  showImageButtonHe = createButton("顯示圖片");
  showImageButtonHe.mouseClicked(showImageHe);
  showImageButtonHe.position(30, 70);

  textSize(15);
  text("和和3館日捐紀錄", 853, 21);

  inputValueHe3 = createInput("請輸入日期");
  inputValueHe3.size(90);
  inputValueHe3.position(860,40);
  inputValueHe3.mouseClicked(clearInputHe3);

  showImageButtonHe3 = createButton("顯示圖片");
  showImageButtonHe3.mouseClicked(showImageHe3);
  showImageButtonHe3.position(860, 70);

  createP("");

  var welcomeMessage = "歡迎來到和和聯合診所日捐紀錄資料區～\r\n本網頁資料紀錄從20210506開始\r\n請在輸入框內輸入日期，並按下「顯示圖片」按鈕，即可顯示紀錄\r\n若要關閉圖片，可按圖片右下角的「X」\r\n日期輸入格式為「YYYYMMDD」，如：20210709\r\n自20210710後，若有合併計算日，則輸入格式為「YYYYMMDD–MMDD」，如：20210710–0711\r\n";
  alert(welcomeMessage);
}

function draw()
{

}

function clearInputHe()
{
  inputValueHe.value("");
}

function clearInputHe3()
{
  inputValueHe3.value("");
}

function mousePressed()
{
  if("" === inputValueHe.value())
  {
    inputValueHe.value("請輸入日期");
  }

  if("" === inputValueHe3.value())
  {
    inputValueHe3.value("請輸入日期");
  }
}

function showImageHe()
{
  iHe = inputValueHe.value();

  imageHe[numberHe] = createImg("https://raw.githubusercontent.com/Celine10811020/walkr/main/hoho/診所"+ iHe +".jpg", "image not found");
  imageHe[numberHe].position(30, 100 + 760*numberHe);

  closeButtonHe[numberHe] = createButton("X", numberHe);
  closeButtonHe[numberHe].mouseClicked(closeImageHe);
  closeButtonHe[numberHe].position(780, 830 + 760*numberHe);

  inputValueHe.value("請輸入日期");

  numberHe++;
}

function closeImageHe()
{
  this.hide();
  var temp = this.value();
  imageHe[temp].hide();

  var tmp = numberHe-temp;

  for(var j=1; j<tmp; j++)
  {
    temp++;
    imageHe[temp].position(30, 100 + 760*(temp-1));
    imageHe[temp-1] = imageHe[temp];
    closeButtonHe[temp].position(780, 830 + 810*(temp-1));
    closeButtonHe[temp-1] = closeButtonHe[temp];
    closeButtonHe[temp].value(temp-1);
  }

  if(numberHe > 0)
  {
      numberHe--;
  }
}

function showImageHe3()
{
  iHe3 = inputValueHe3.value();

  imageHe3[numberHe3] = createImg("https://raw.githubusercontent.com/Celine10811020/walkr/main/hoho3/和和3-"+ iHe3 +".jpg", "image not found");
  imageHe3[numberHe3].position(860, 100 + 760*numberHe3);

  closeButtonHe3[numberHe3] = createButton("X", numberHe3);
  closeButtonHe3[numberHe3].mouseClicked(closeImageHe3);
  closeButtonHe3[numberHe3].position(1610, 830 + 760*numberHe3);

  inputValueHe3.value("請輸入日期");

  numberHe3++;
}

function closeImageHe3()
{
  this.hide();
  var temp = this.value();
  imageHe3[temp].hide();

  var tmp = numberHe3-temp;

  for(var j=1; j<tmp; j++)
  {
    temp++;
    imageHe3[temp].position(860, 100 + 760*(temp-1));
    imageHe3[temp-1] = imageHe3[temp];
    closeButtonHe3[temp].position(1610, 830 + 760*(temp-1));
    closeButtonHe3[temp-1] = closeButtonHe3[temp];
    closeButtonHe3[temp].value(temp-1);
  }

  if(numberHe3 > 0)
  {
      numberHe3--;
  }
}
