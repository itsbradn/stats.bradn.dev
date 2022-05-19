<template>
	<div class="accordion" :id="`accordion-item-${props.itemId}`">
		<div class="accordion__header">
			<div class="accordion__collapse"
						@click="toggleDrop">
				<div class="accordion__title">
					<h3
						class="text text-primary-500"
						data-weight="B"
						data-size="L"
					>
						<slot name="title" />
					</h3>
				</div>
				<div class="accordion__featured">
					<slot name="featured-stats" />
				</div>
			</div>
		</div>
		<div class="accordion__drop" style="max-height: 0">
            <div class="accordion__content">
                <div class="divider margin-top-8"></div>
			    <slot name="content" />
            </div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		itemId: String,
	});

	function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
var transitionEnd = whichTransitionEvent();

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

	let isOpen = false;
	function toggleDrop() {
		isOpen = !isOpen;
		const Container = document.getElementById(`accordion-item-${props.itemId}`);
		let dropContainer = Container.querySelector(".accordion__drop");
		let dropContent = Container.querySelector(".accordion__content");
		let containerHeight = getComputedStyle(dropContent, null).height;
		if (isOpen) {
			dropContainer.addEventListener(transitionEnd, () => {
				if (isOpen) dropContainer.style.maxHeight = "none";
			}, false);
			dropContainer.style.maxHeight = containerHeight;
		} else {
			dropContainer.style.maxHeight = containerHeight;
		}

		setTimeout(function () {
			if (!isOpen) {
				dropContainer.style.maxHeight = '0px';
			}
		}, 1);
	}
</script>