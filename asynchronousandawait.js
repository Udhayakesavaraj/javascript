async function commentCode(){
    return new Promise(
        function(commentValue){
            setTimeout(function(){
                commentValue("This is my 1st commentValue post")
            },1000);
        });
    }  
    async function likeCode(){
        return new Promise(
            function(commentValue){
                setTimeout(function(){
                    commentValue("This is my 1st likeCode post")
                },1000);
            });
        }  
async function post(){
    var post = new Promise(function(postResponse){
        setTimeout(function(){
            postResponse("This is my 1st post")
        },1000);
    });
    var [feed,comment,like]=await Promise.all([post,commentCode(),likeCode()])
console.log(feed);
console.log(comment);
console.log(like);
}
post()
