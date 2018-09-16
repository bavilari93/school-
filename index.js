$(()=>{
	function makeLines(num, left) {
  if (num > 0 & left < 450) {
    left += 30;
    var cm = '<div class="cm" id="line' + num + '"></div>';
    var mm = '<div class="mm" id="mm' + num + '"></div>';
    $('.ruler').append(cm);
    $('.ruler').append(mm);
    $('#line' + num).css('left', left);
    $('#mm' + num).css('left', left + 10);
    num--;
    makeLines(num, left);
  }
}

makeLines(25, 15);
})

