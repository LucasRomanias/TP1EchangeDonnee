//const API_URL = "https://api-server-5.glitch.me/api/bookmarks";
const API_URL = "http://observant-heathered-belly.glitch.me/api/bookmarks";
function API_GetBookmarks() {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL,
            success: Bookmarks => { resolve(Bookmarks); },
            error: (xhr) => { console.log(xhr); resolve(null); }
        });
    });
}
function API_GetBookmarks(BookmarksId) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL + "/" + BookmarksId,
            success: Bookmarks => { resolve(Bookmarks); },
            error: () => { resolve(null); }
        });
    });
}
function API_SaveBookmarks(Bookmarks, create) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL,
            type: create ? "POST" : "PUT",
            contentType: 'application/json',
            data: JSON.stringify(Bookmarks),
            success: (/*data*/) => { resolve(true); },
            error: (/*xhr*/) => { resolve(false /*xhr.status*/); }
        });
    });
}
function API_DeleteBookmarks(id) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL + "/" + id,
            type: "DELETE",
            success: () => { resolve(true); },
            error: (/*xhr*/) => { resolve(false /*xhr.status*/); }
        });
    });
}