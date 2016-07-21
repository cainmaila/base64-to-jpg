# base64-to-jpg

## Base64 Image to jpeg

## 把Base64圖像資料輸出成jpg檔案

## How to use

install
```
npm install base64-to-jpg --save
```

build jpg
```
var Base64topjpg = require('base64-to-jpg');

//this string cain src in img tag
var base64Image = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDB.....

Base64topjpg(base64Image, 'base64.jpg')
	.then(function(path){
		console.log('success !!');
	})
	.catch(function(err){
		console.error(err);
	})

```

