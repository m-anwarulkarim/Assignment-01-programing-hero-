1. **any, unknown, never** এর পার্থক্য
2. **interface এবং type** এর মধ্যে পার্থক্য

# 1. any, unknown, never — পার্থক্য

## any

#### A. any যেকোনো ভ্যালুর type হতে পারে এবং তার দ্বারা সাধারনত যেকোনো type এর কাজ করা যায়। TypeScript কোনো warning দেবে না।\*\*

#### B. এটা ব্যবহার করলে রানটাইমে error আসতে পারে কিন্তূ তাতখনাত ঝামেলা থেকে মূক্ত হয়া জায়

#### C. এটা সরাসরি javscript এর মত কাজ করে

**উদাহরণ:**

```ts
type Data = any;

let data1: Data = "hello";
data1 = 5;
data1 = undefined;

let data2: any;
data2 = 10;
data2 = "Hello";
data2.toUpperCase();
```

## unknown

---

#### A.যেকোনো ভ্যালু রাখা যায়, কিন্তু ব্যবহার করতে চাইলে টাইপ চেক করতে হবে। বা Type Assertion ব্যবোহার করতে হবে

#### B.এটা any থেকে বেশি safety দেয় । এটা সরাসরি javscript এর মত কাজ করে না ।

#### C. type check করা ছাড়া ব্যবহার করলে error আসতে পারে

**উদাহরণ:**

```ts
const usingunknown = (value: unknown) => {
  if (typeof value === "string") {
    return "i'm string type";
  } else if (typeof value === "number") {
    return "i'm number type";
  } else {
    return "avabe onno type o hote pare";
  }
};

usingunknown("");
usingunknown(1);
usingunknown(true);
```

## never

---

#### A.কোন type এর কোন value ই return করে না ।

#### B.never সাধারণত তখনই হয় যখন ফাংশন error throw করে

#### C.অথবা infinit loop যখন হয়

**উদাহরণ:**

```ts
const usingNeverThrow = (mas: string): never => {
  throw Error(mas);
};

usingNeverThrow("Something  wrong!");

const usingNeverLoop = (): never => {
  while (true) {}
};

console.log(usingNeverLoop());
```

---

# 2. Interface vs Type — পার্থক্য

#### A. Interface এ extends ব্যবহার করে অন্য interface কে extends করা যায় এর এটা type দিয়ে করতে গেলে intersection (&) ব্যবোহার করতে হয়

```ts
interface User1 {
  name: string;
}
interface User2 extends User1 {
  role: string;
}

type Person = {
  name: string;
};
type AddPerson = Person & {
  salary: number;
};
```

---

#### B. একটা interface অন্য একটা interface কে marge করতে পারে মানে একই নামে আকধিক interface রাখলে marge হয়ে যাই কিন্ত type এর ভিতর এটা নাই

```ts
interface Box {
  id: number;
}
interface Box {
  name: number;
}
```

---

#### C. সব থেকে বড় পারথক্য হল type, এটা primitive non-primitive সব কিসুর type হতে পারে কিন্ত interface শধু object জাতিও অরথাত function, array, object এর type হতে পারে

```ts
type ID = string | number;
```

inertface দিয়ে এটা করা যাবে না
