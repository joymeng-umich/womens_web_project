document.addEventListener('DOMContentLoaded', function () {
    var winHeight = window.innerHeight;
    var docHeight = document.documentElement.scrollHeight;
    var progressBar = document.querySelector('#content_progress');
    progressBar.max = docHeight - winHeight;
    progressBar.value = window.scrollY;

    document.addEventListener('scroll', function () {
          progressBar.max = document.documentElement.scrollHeight - window.innerHeight;
          progressBar.value = window.scrollY;
    });
});


// source: https://cloud.tencent.com/developer/article/1197346