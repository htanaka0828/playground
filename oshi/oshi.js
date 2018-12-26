(function(){
    var storage = localStorage;
    storage.oshi = storage.oshi || 0;
    window.addEventListener('DOMContentLoaded', function() {
        setDisplay(storage.oshi);
        document.getElementById('oshi').addEventListener('click', function(){
            storage.oshi++;
            setDisplay(storage.oshi);
            new Audio('precious.mp3').play();
        });
        document.getElementById('clear').addEventListener('click', function(){
            storage.oshi = 0;
            setDisplay(storage.oshi);
        });
    });

    function setDisplay(c) {
        document.getElementById('count').innerText = '' + c + '尊い';
    }
})();
