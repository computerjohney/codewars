// flickr-fetcher.js
// see https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/

var FlickrFetcher;

// FlickrFetcher = {
//     photoObjToURL: function() {
//         return 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
//     }
// };

// flickr-fetcher.js general code
// FlickrFetcher = {
//   photoObjToURL: function (photoObj) {
//     return (
//       "https://farm" +
//       photoObj.farm +
//       ".staticflickr.com/" +
//       photoObj.server +
//       "/" +
//       photoObj.id +
//       "_" +
//       photoObj.secret +
//       "_b.jpg"
//     );
//   },
// };

// better...
FlickrFetcher = {
  photoObjToURL: function (photoObj) {
    return [
      "https://farm",
      photoObj.farm,
      ".staticflickr.com/",
      photoObj.server,
      "/",
      photoObj.id,
      "_",
      photoObj.secret,
      "_b.jpg",
    ].join("");
  },

  transformPhotoObj: function (photoObj) {
    // return {
    //   title: "Dog goes to desperate measure to avoid walking on a leash",
    //   url: "https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg",
    // };

    return {
      title: photoObj.title,
      url: FlickrFetcher.photoObjToURL(photoObj),
    };
  },
};
module.exports = FlickrFetcher;
