/* =========================
   BTN STORAGE SYSTEM
========================= */

const BTN_STORAGE_KEY = "btn_posts";


function savePosts(posts){

    localStorage.setItem(
        BTN_STORAGE_KEY,
        JSON.stringify(posts)
    );

}


function loadPosts(){

    const data =
    localStorage.getItem(
        BTN_STORAGE_KEY
    );

    if(!data){

        return [];

    }

    try{

        return JSON.parse(data);

    }

    catch(error){

        console.error(
            "Storage Error:",
            error
        );

        return [];

    }

}


function clearAllPosts(){

    localStorage.removeItem(
        BTN_STORAGE_KEY
    );

}


/* =========================
   POST OBJECT TEMPLATE
========================= */

/*

{
    id: 12345,

    title:
    "My Post",

    content:
    "Post Content",

    image:
    "base64 image",

    likes: 0,

    comments: [

        {
            text:
            "Nice post"
        }

    ],

    createdAt:
    "2026-06-09"
}

*/


/* =========================
   HELPERS
========================= */

function generatePostId(){

    return Date.now();

}


function getCurrentDate(){

    const now =
    new Date();

    return now.toLocaleDateString();

}
