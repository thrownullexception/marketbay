import { describe, expect, test } from "bun:test";
import { sanitizeHtml } from "./strings";

describe("sanitizeHtml", () => {
	test("preserves <strong> tags", () => {
		expect(sanitizeHtml("<strong>bold</strong>")).toBe("<strong>bold</strong>");
	});

	test("preserves <b> tags", () => {
		expect(sanitizeHtml("<b>bold</b>")).toBe("<b>bold</b>");
	});

	test("preserves <i> tags", () => {
		expect(sanitizeHtml("<i>italic</i>")).toBe("<i>italic</i>");
	});

	test("strips disallowed tags but keeps their text content", () => {
		expect(sanitizeHtml("<div>hello</div>")).toBe("hello");
		expect(sanitizeHtml("<script>alert('x')</script>")).toBe("alert('x')");
		expect(sanitizeHtml("<span>text</span>")).toBe("text");
		expect(sanitizeHtml("<a href='#'>link</a>")).toBe("link");
	});

	test("strips disallowed tags while preserving allowed ones", () => {
		expect(
			sanitizeHtml("<div>Hello <strong>world</strong> <i>nice</i></div>"),
		).toBe("Hello <strong>world</strong> <i>nice</i>");
	});

	test("handles nested disallowed tags around allowed tags", () => {
		expect(sanitizeHtml("<p><span><b>deep</b></span></p>")).toBe("<b>deep</b>");
	});

	test("handles allowed tags with attributes", () => {
		expect(sanitizeHtml('<strong class="highlight">text</strong>')).toBe(
			'<strong class="highlight">text</strong>',
		);
	});

	test("handles self-closing disallowed tags", () => {
		expect(sanitizeHtml("before<br/>after")).toBe("beforeafter");
		expect(sanitizeHtml("before<hr />after")).toBe("beforeafter");
	});

	test("returns plain text unchanged", () => {
		expect(sanitizeHtml("just plain text")).toBe("just plain text");
	});

	test("handles empty string", () => {
		expect(sanitizeHtml("")).toBe("");
	});

	test("handles multiple allowed tags in sequence", () => {
		expect(sanitizeHtml("<b>one</b> <i>two</i> <strong>three</strong>")).toBe(
			"<b>one</b> <i>two</i> <strong>three</strong>",
		);
	});

	test("is case-insensitive for tag names", () => {
		expect(sanitizeHtml("<STRONG>bold</STRONG>")).toBe("<STRONG>bold</STRONG>");
		expect(sanitizeHtml("<B>bold</B>")).toBe("<B>bold</B>");
		expect(sanitizeHtml("<DIV>text</DIV>")).toBe("text");
	});

	test("strips complex nested disallowed markup", () => {
		const input =
			'<div class="wrapper"><p>Some <b>bold</b> and <em>emphasis</em> and <i>italic</i> text</p></div>';
		expect(sanitizeHtml(input)).toBe(
			"Some <b>bold</b> and emphasis and <i>italic</i> text",
		);
	});
});
