type FormatValue = number | string | boolean;
const formatValue = (value: FormatValue): FormatValue => {
  if (typeof value == "string") {
    return value.toUpperCase();
  } else if (typeof value == "number") {
    return value * 10;
  } else {
    return !value;
  }
};
formatValue("hello");
formatValue(5);
formatValue(true);

type GetLength = string | any[];

const getLength = (value: GetLength): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};
getLength("typescript");
getLength([10, 20, 30, 40]);

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("John Doe", 30);
person1.getDetails();

const person2 = new Person("Alice", 25);
person2.getDetails();

type FilterByRating = {
  title: string;
  rating: number;
};
const filterByRating = (books: FilterByRating[]): FilterByRating[] => {
  const rating = books.filter((item) => item.rating >= 4);
  return rating;
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

filterByRating(books);

interface FilterActiveUsers {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: FilterActiveUsers[]): FilterActiveUsers[] => {
  const activeUser = users.filter((item) => item.isActive === true);
  return activeUser;
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

filterActiveUsers(users);

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (books: Book): string => {
  const bookDetails = `Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${books.isAvailable}`;
  console.log(bookDetails);
  return bookDetails;
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

type GetUniqueValues = number | string;

const getUniqueValues = (
  array1: GetUniqueValues[],
  array2: GetUniqueValues[]
): GetUniqueValues[] => {
  const newarray: GetUniqueValues[] = [];

  const checkerFn = (array: GetUniqueValues[], value: GetUniqueValues) => {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element === value) {
        return true;
      }
    }
    return false;
  };

  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    if (!checkerFn(newarray, element)) {
      newarray[newarray.length] = element;
    }
  }

  for (let index = 0; index < array2.length; index++) {
    const element = array2[index];
    if (!checkerFn(newarray, element)) {
      newarray[newarray.length] = element;
    }
  }

  return newarray;
};
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
getUniqueValues(array1, array2);

type CalculateTotalPrice = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: CalculateTotalPrice[]): number => {
  if (products.length === 0) {
    return 0;
  }

  const totallMaping = products.map((item) => {
    const totallPrice = item.price * item.quantity;
    if (!item.discount) {
      return totallPrice;
    } else {
      const discountPercentage = totallPrice * (item.discount / 100);
      return totallPrice - discountPercentage;
    }
  });

  const finalPrice = totallMaping.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  return finalPrice;
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

calculateTotalPrice(products);
