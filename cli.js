#!/usr/bin/env node

import meow from "meow";
import stdin from "get-stdin";
import { init } from "@paralleldrive/cuid2";

const cli = meow(
  `$ cuid --help

  Usage
    $ cuid [--length X] [number]
    $ echo [number] | cuid [--length X]

  Options
    -s, --length Set length

  Examples
    $ cuid
    ciyefyc630000x0y7mhd8o67n

    $ cuid 4
    ciyefyc630000x0y7mhd8o67n
    ciyefyc650001x0y7f9rqtegv
    ciyefyc650002x0y7e9826mhe
    ciyefyc650003x0y7az4v96ec

    $ cuid --length 7
    1m0z7cm

    $ cuid 4 --length 7
    1m0z7cm
    1n1z7om
    1o2z7ud
    1o3z73h

    $ echo '4' | cuid --length 7
    1m0z7cm
    1n1z7om
    1o2z7ud
    1o3z73h
`,
  {
    flags: {
      length: {
        type: "string",
        alias: "l",
        default: "25",
      },
    },
  }
);

const {
  input: [input],
  flags,
} = cli;
const { length = 25 } = flags;

const run = async ({ data = 1, length = 25 }) => {
  const cmd = init({ length });
  const loop = Number(data || 1);

  Array.from({ length: loop }).map(() => console.log(cmd()));
};

(async () => {
  if (input) {
    run({ data: input, length });
  } else {
    const data = await stdin();
    run({ data, length });
  }
})();
