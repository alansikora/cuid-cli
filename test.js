import test from "tape";
import { execa } from "execa";

test("cuid default length", async (assert) => {
  const child = execa("./cli.js");
  child.stdin.end();
  const { stdout } = await child;

  const message = "cuid must be 25 characters long by default";

  const actual = stdout.length;
  const expected = 25;

  assert.true(actual === expected, message);

  assert.end();
});

test("cuid custom length", async (assert) => {
  const child = execa("./cli.js", ["--length", "10"]);
  child.stdin.end();
  const { stdout } = await child;

  const message = "cuid must be 10 characters long by default";

  const actual = stdout.length;
  const expected = 10;

  assert.true(actual === expected, message);

  assert.end();
});

test("cuid number of generated items", async (assert) => {
  const { stdout } = await execa("./cli.js", [4]);

  const set = new Set(stdout.split("\n"));

  const message = "cuid should contain unique values only";

  const actual = [...set].length;
  const expected = 4;

  assert.equal(actual, expected, message);

  assert.end();
});

test("cuid number of generated items (stdin)", async (assert) => {
  const { stdout } = await execa("./cli.js", [], { input: "1" });

  const set = new Set(stdout.split("\n"));

  const message =
    "cuid should work with stdin and stdout should contain 1 entry";

  const actual = [...set].length;
  const expected = 1;

  assert.equal(actual, expected, message);

  assert.end();
});
