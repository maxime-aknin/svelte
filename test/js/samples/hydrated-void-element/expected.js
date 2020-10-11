/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	attr,
	children,
	claim_element,
	claim_space,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "svelte/internal";

function create_fragment(ctx) {
	let img;
	let img_src_value;
	let t;
	let div;

	return {
		c() {
			img = element("img");
			t = space();
			div = element("div");
			this.h();
		},
		l(nodes) {
			img = claim_element(nodes, "IMG", null);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", null);
			children(div).children.forEach(detach);
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = "donuts.jpg")) attr(img, "src", img_src_value);
			attr(img, "alt", "donuts");
		},
		m(target, anchor) {
			insert(target, img, anchor);
			insert(target, t, anchor);
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(img);
			if (detaching) detach(t);
			if (detaching) detach(div);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;