var img = [];
var i = 0;
var number = 0;
var closeButton = [];

function setup()
{
  createCanvas(windowWidth, windowHeight);

  inputValue = createInput();
  inputValue.size(60);
  inputValue.position(30,30);

  showImageButton = createButton("顯示圖片");
  showImageButton.mouseClicked(showImage);
  showImageButton.position(110, 30);

  createP("");
}

function draw()
{

}

function showImage()
{
  i = inputValue.value();

  img[number] = createImg("https://raw.githubusercontent.com/Celine10811020/show.image/main/"+ i +".png", "image not found");
  img[number].position(30, 60 + 510*number);

  closeButton[number] = createButton("X", number);
  closeButton[number].mouseClicked(closeImage);
  closeButton[number].position(530, 540 + 510*number);

  inputValue.value("");

  number++;
};

function closeImage()
{
  this.hide();
  var temp = this.value();
  img[temp].hide();

  var tmp = number-temp;

  for(var j=1; j<tmp; j++)
  {
    temp++;
    img[temp].position(30, 60 + 510*(temp-1));
    img[temp-1] = img[temp];
    closeButton[temp].position(530, 540 + 510*(temp-1));
    closeButton[temp-1] = closeButton[temp];
    closeButton[temp].value(temp-1);
  }

  if(number > 0)
  {
      number--;
  }
}
