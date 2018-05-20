document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){

  var siteName = document.getElementById("siteName").value;
  var siteUrl  = document.getElementById("siteUrl").value;
  var bookmark = { name: siteName, url:siteUrl}

  if(localStorage.getItem('bookmarks')===null){
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
   e.preventDefault();
}


function showBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  var result = '';
  var bookmarksResult = document.getElementById('bookmarksResults');
  bookmarksResult.innerHTML = '';

  for (var i=0 ; i<bookmarks.length;i++) {
      result += '<div><h3>SiteName: ' + bookmarks[i].name + ' </h3>'
              + '<h3>SiteUrl: ' + bookmarks[i].url + ' </h4></div>'
  }

bookmarksResult.innerHTML += result;
  console.log(result);

}

showBookmarks();
