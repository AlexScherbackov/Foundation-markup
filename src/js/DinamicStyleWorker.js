
class DinamicStyleWorker{
	static elementClassToggle(elemEventId,  elementTargetId, className){
		document.querySelector(`#${elemEventId}`).classList.toggle(className);
		document.querySelector(`#${elementTargetId}`).classList.toggle(className);
	}
	static showGallery(){
		let colHeight = 0;
      const $galleryItems = $('.gallery__item');

      if ($galleryItems.length) {
        const firstItemHeight = $galleryItems.first().height();
        console.log(firstItemHeight)
        if (firstItemHeight) {
          colHeight = firstItemHeight + _initialize.options.colIndent;
        }
      }

      if (colHeight) {
        $('.gallery__collapse-wrapper').height(colHeight);
      }

      $('#gallary-trigger').on('click', function () {
        const colOpenHeight = $(this).parents('.gallery__content').find('.row').height();
        const colContainer = $(this).parents('.gallery__content').find('.gallery__collapse-wrapper');

        if (colContainer.height() != colOpenHeight) {
          colContainer.css("height", colOpenHeight);
          $(this).text('Hide projects');
        } else {
          if (colHeight) {
            colContainer.css("height", colHeight);
            $(this).text('view all projects');
          }
        }

      })
	}
}


