import Shuffle from "shufflejs";

const emoji = ["🌮", "🍕", "🍜", "🥓", "🍪"];
document.getElementById("emoji").textContent = emoji[Math.floor(Math.random() * emoji.length)];

class Projects {
	constructor(element) {
		this.element = element;
		this.shuffle = new Shuffle(element, {
			itemSelector: ".picture-item",
			sizer: element.querySelector(".my-sizer-element"),
		});

		this.addShuffleEventListeners();
		this._activeFilters = [];
		this.addFilterButtons();
	}

	addShuffleEventListeners() {
		this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {});
		this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {});
	}

	addFilterButtons() {
		const options = document.querySelector(".filter-options");
		if (!options) {
			return;
		}

		const filterButtons = Array.from(options.children);
		const onClick = this._handleFilterClick.bind(this);
		filterButtons.forEach((button) => {
			button.addEventListener("click", onClick, false);
		});
	}

	_handleFilterClick(evt) {
		const btn = evt.currentTarget;
		const isActive = btn.classList.contains("active");
		const btnGroup = btn.getAttribute("data-group");

		this._removeActiveClassFromChildren(btn.parentNode);

		let filterGroup;
		if (isActive) {
			btn.classList.remove("active");
			filterGroup = Shuffle.ALL_ITEMS;
		} else {
			btn.classList.add("active");
			filterGroup = btnGroup;
		}

		this.shuffle.filter(filterGroup);
	}

	_removeActiveClassFromChildren(parent) {
		const { children } = parent;
		for (let i = children.length - 1; i >= 0; i--) {
			children[i].classList.remove("active");
		}
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window.project = new Projects(document.getElementById("grid"));
});
