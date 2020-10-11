/* generated by Svelte vX.Y.Z */
import {
	HtmlTag,
	SvelteComponent,
	append,
	attr,
	destroy_each,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "svelte/internal";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	child_ctx[6] = i;
	return child_ctx;
}

// (8:0) {#each comments as comment, i}
function create_each_block(ctx) {
	let div;
	let strong;
	let t0;
	let t1;
	let span;
	let t2_value = /*comment*/ ctx[4].author + "";
	let t2;
	let t3;
	let t4_value = /*elapsed*/ ctx[1](/*comment*/ ctx[4].time, /*time*/ ctx[2]) + "";
	let t4;
	let t5;
	let t6;
	let html_tag;
	let raw_value = /*comment*/ ctx[4].html + "";

	return {
		c() {
			div = element("div");
			strong = element("strong");
			t0 = text(/*i*/ ctx[6]);
			t1 = space();
			span = element("span");
			t2 = text(t2_value);
			t3 = text(" wrote ");
			t4 = text(t4_value);
			t5 = text(" ago:");
			t6 = space();
			html_tag = new HtmlTag(raw_value);
			attr(span, "class", "meta");
// <<<<<<< HEAD
// 			html_tag = new HtmlTag(null);
// =======
			html_tag.a = null;
// >>>>>>> fork_avi/fast-hydration
			attr(div, "class", "comment");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, strong);
			append(strong, t0);
			append(div, t1);
			append(div, span);
			append(span, t2);
			append(span, t3);
			append(span, t4);
			append(span, t5);
			append(div, t6);
			html_tag.m(raw_value, div);
		},
		p(ctx, dirty) {
			if (dirty & /*comments*/ 1 && t2_value !== (t2_value = /*comment*/ ctx[4].author + "")) set_data(t2, t2_value);
			if (dirty & /*elapsed, comments, time*/ 7 && t4_value !== (t4_value = /*elapsed*/ ctx[1](/*comment*/ ctx[4].time, /*time*/ ctx[2]) + "")) set_data(t4, t4_value);
			if (dirty & /*comments*/ 1 && raw_value !== (raw_value = /*comment*/ ctx[4].html + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function create_fragment(ctx) {
	let t0;
	let p;
	let t1;
	let each_value = /*comments*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			p = element("p");
			t1 = text(/*foo*/ ctx[3]);
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, t0, anchor);
			insert(target, p, anchor);
			append(p, t1);
		},
		p(ctx, [dirty]) {
			if (dirty & /*comments, elapsed, time*/ 7) {
				each_value = /*comments*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(t0.parentNode, t0);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*foo*/ 8) set_data(t1, /*foo*/ ctx[3]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(t0);
			if (detaching) detach(p);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { comments } = $$props;
	let { elapsed } = $$props;
	let { time } = $$props;
	let { foo } = $$props;

	$$self.$$set = $$props => {
		if ("comments" in $$props) $$invalidate(0, comments = $$props.comments);
		if ("elapsed" in $$props) $$invalidate(1, elapsed = $$props.elapsed);
		if ("time" in $$props) $$invalidate(2, time = $$props.time);
		if ("foo" in $$props) $$invalidate(3, foo = $$props.foo);
	};

	return [comments, elapsed, time, foo];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { comments: 0, elapsed: 1, time: 2, foo: 3 });
	}
}

export default Component;
