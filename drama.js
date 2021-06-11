$(document).ready(function(){

    /*Slider in Dramas*/
    let nodes = $('.node');
    let counter = $('#counter');
    let index = 12;
    counter.html(12);
    
    nodes.hide();
    nodes.eq(index).show();

    $('#prev').click(function(){
        nodes.eq(index).animate(
            {
            left: '-100px', 
            opacity: 0
            }, 
            function(){
                nodes.eq(index).hide();
                if(index == 0)
                    index = nodes.length - 1;
                else
                    index = index - 1;
                nodes.eq(index).show();
                nodes.eq(index).css('left', '100px');
                nodes.eq(index).animate({
                    left: 0, 
                    opacity: 1
                })
                counter.html(index);
            }
        ); 
    });

    $('#next').click(function(){
        nodes.eq(index).animate(
            {
            left: '100px', 
            opacity: 0
        }, 
        function(){
            nodes.eq(index).hide();
            if (index == nodes.length - 1)
                index = 0;
            else
                index = index + 1;
            nodes.eq(index).show();
            nodes.eq(index).css('left', '-100px');
            nodes.eq(index).animate({
                left: 0, 
                opacity: 1
            })
            counter.html(index);
            }
        );
    });    

    });