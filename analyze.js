let but=document.getElementById("but");
but.addEventListener("click",analyze);
function analyze(){
    let tar=document.getElementById("txt").value;
    let word_div=document.getElementById("words");
    word_div.textContent="No. of words: "+tar.split(' ').length;
    let char_div=document.getElementById("chars");
    char_div.textContent="No. of chars: "+tar.length;
    let punc_div=document.getElementById("puns");
    let puns=0;
    for(let i=0;i<tar.length;i++){
        if(tar.charAt(i)=='.'||tar.charAt(i)==','||tar.charAt(i)=='?'||tar.charAt(i)==';'||tar.charAt(i)=='!')
            puns+=1;
    }
    punc_div.textContent="No. of punctuations: "+puns;
}