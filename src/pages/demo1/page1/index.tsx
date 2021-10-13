import React from 'react';

function Page1() {
  return <div>demo1 page1</div>;
}

interface A {
  a: string;
  c: {cc: string};
}

interface C {
  aa: string;
  cc: {cc: string};
}

interface B extends A, C {
  b: string;
  c: {ccc: string; cc: string};
}

function test(value: A) {
  console.log(value.a);
}

const b: B = {
  a: 'test a',
  b: 'test b',
  c: {ccc: 'ccc', cc: 'cc'},
  aa: 'asdf',
  cc: {cc: 'asdf'},
};

test(b);

export default Page1;
