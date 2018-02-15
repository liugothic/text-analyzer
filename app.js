function handleFormSubmit(){
	$('.js-form').submit(function(event){
		event.preventDefault();

		var content = $(this).find('#user-text').val();		
		var splitArray = content.replace(/\n/g, ' ').split(' ').filter(notEmpty);

		var wordCount = splitArray.length;
		var uniqueWordCount = splitArray.filter(onlyUnique).length;
		var averageLength = splitArray.reduce(sum, 0)/wordCount;

		append(wordCount, uniqueWordCount, averageLength);
	})
}

function notEmpty(value){
	return value !== '';
}

function onlyUnique(value, index, self){
	return self.indexOf(value) === index;
}

function sum(total, value){
	return total + value.length;
}

function append(wordCount, uniqueWordCount, averageLength){
	$('.js-text-report').removeClass('hidden');
	$('.js-word-count').text(wordCount);
	$('.js-unique-word-count').text(uniqueWordCount);
	$('.js-average-word-length').text(averageLength + ' characters');
}

$(handleFormSubmit)