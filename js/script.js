(function () {
    
    var items = document.querySelectorAll("[data-animation]");

    function revealOnScroll() {
        var scrolled = window.scrollY,
            win_height_padded = window.innerHeight;

        items.forEach(function (i) {
            var offsetTop = i.offsetTop,
                animation = i.dataset.animation,
                repeat = i.dataset.repeat,
                itemHeight = i.clientHeight;

            if ((scrolled + win_height_padded >= offsetTop)
                &&
                (scrolled <= offsetTop + itemHeight)) {
                i.classList.add(animation);
            } 
        })

    }
    
    window.addEventListener("scroll", revealOnScroll);

})();

(function () {

    var anchors = document.querySelectorAll("a[href*='section']");

    window.addEventListener("animationend", function (e) {

    });

    anchors.forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            var target = item.hash,
                obj = document.querySelector(target),
                posObj = obj.offsetTop;

            window.scroll({
                top: posObj,
                left: 0,
                behavior: "smooth"
            });

            obj.setAttribute("tabindex", -1);
            obj.focus({ preventScroll: true });

        })
    })

})();