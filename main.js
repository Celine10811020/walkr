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
  createCanvas(windowWidth, windowHeight);

  textSize(15);
  text("和和聯合日捐紀錄", 23, 21);

  inputValueHe = createInput();
  inputValueHe.size(90);
  inputValueHe.position(30,40);

  showImageButtonHe = createButton("顯示圖片");
  showImageButtonHe.mouseClicked(showImageHe);
  showImageButtonHe.position(30, 70);

  textSize(15);
  text("和和3館日捐紀錄", 883, 21);

  inputValueHe3 = createInput();
  inputValueHe3.size(90);
  inputValueHe3.position(890,40);

  showImageButtonHe3 = createButton("顯示圖片");
  showImageButtonHe3.mouseClicked(showImageHe3);
  showImageButtonHe3.position(890, 70);

  createP("");
}

function draw()
{

}

function showImageHe()
{
  iHe = inputValueHe.value();

  imageHe[numberHe] = createImg("https://raw.githubusercontent.com/Celine10811020/walkr/main/hehe/"+ iHe +".jpg", "image not found");
  imageHe[numberHe].position(30, 100 + 810*numberHe);

  closeButtonHe[numberHe] = createButton("X", numberHe);
  closeButtonHe[numberHe].mouseClicked(closeImageHe);
  closeButtonHe[numberHe].position(830, 880 + 810*numberHe);

  inputValueHe.value("");

  numberHe++;
};

function closeImageHe()
{
  this.hide();
  var temp = this.value();
  imageHe[temp].hide();

  var tmp = numberHe-temp;

  for(var j=1; j<tmp; j++)
  {
    temp++;
    imageHe[temp].position(30, 100 + 810*(temp-1));
    imageHe[temp-1] = imageHe[temp];
    closeButtonHe[temp].position(830, 880 + 810*(temp-1));
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

  imageHe3[numberHe3] = createImg("https://raw.githubusercontent.com/Celine10811020/walkr/main/hehe3/"+ iHe3 +".jpg", "image not found");
  imageHe3[numberHe3].position(890, 100 + 810*numberHe3);

  closeButtonHe3[numberHe3] = createButton("X", numberHe3);
  closeButtonHe3[numberHe3].mouseClicked(closeImageHe3);
  closeButtonHe3[numberHe3].position(1690, 880 + 810*numberHe3);

  inputValueHe3.value("");

  numberHe3++;
};

function closeImageHe3()
{
  this.hide();
  var temp = this.value();
  imageHe3[temp].hide();

  var tmp = numberHe3-temp;

  for(var j=1; j<tmp; j++)
  {
    temp++;
    imageHe3[temp].position(890, 100 + 810*(temp-1));
    imageHe3[temp-1] = imageHe3[temp];
    closeButtonHe3[temp].position(1690, 880 + 810*(temp-1));
    closeButtonHe3[temp-1] = closeButtonHe3[temp];
    closeButtonHe3[temp].value(temp-1);
  }

  if(numberHe3 > 0)
  {
      numberHe3--;
  }
}
