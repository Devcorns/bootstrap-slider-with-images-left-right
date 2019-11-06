
$("#myCarousel").on('slid.bs.carousel', function (e) {
    let rt = e.relatedTarget.children[0];
    let arr = [...rt.children];
    let getMycrousel = document.getElementById("myCarousel");
    let crouselWidth = getMycrousel.clientWidth;
    if(!arr.length) {
        return;
    }
    console.log(crouselWidth/arr.length);
    arr.forEach( (element,index) => {
        console.log( element, index );
        element.setAttribute("toatal-width",(crouselWidth/arr.length)-element.clientWidth);    
    });

});
window.onload = function( e ) {

    arr = [20,30];
    arr.forEach(element=>{
        console.log( Array.isArray( arr ) )
    })
}
