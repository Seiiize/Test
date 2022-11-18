const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
      { userId: "Afaf", rate: 2 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

/* =============================== QUESTION =============================================
        
    Complete the functions below to make them work. You will find in each function a
    description of what it should do.
  
  =========================================================================================== */

function signUp(newUser) {
  // Complete this function to add a new user to users array. Return true when done
  // If user already exists, return false
}

function signIn(email, password) {
  // Complete this function allow a user to sign in to the application.
  // If the user doesn't exist in users, return false
  // Return true if the user can sign in
}

function rateProduct(productId, userId, rate) {
  // Complete this function to allow a user to rate a product
}

function averageRating(productId) {
  // Complete this function to get the average rating of a product
}

function likeProduct(productId, userId) {
  // Complete this function to allow a user to like a product
  // If the user already liked the product, remove the like.
}
// Response:

// 1-Function sign up

function signUp(newUser, users) {
  const userExists = users.find((u) => u.email === newUser.email);

  if (userExists) {
    return {
      success: false,
      message: "User already exists",
    };
  }

  const NewUser = {
    _id: Math.random().toString(36).substr(2, 9),
    username: newUser.username,
    email: newUser.email,
    password: newUser.password,
    createdAt: new Date().toLocaleString(),
  };
  users.push(NewUser);
  return {
    success: true,
    user: NewUser,
  };
}
const newUser = {
  username: "null",
  email: "null@gmail.com",
  password: "null",
};

console.log(signUp(newUser, users));
console.log(signUp(newUser, users));
// 2-Function sign In
function signIn(email, password) {
  // Complete this function allow a user to sign in to the application.
  // If the user doesn't exist in users, return false
  // Return true if the user can sign in
}
function signIn(users, user) {
  const userExists = users.find((u) => u.email === user.email);
  if (!userExists) {
    return {
      success: false,
      message: "User does not exist",
    };
  }
  if (userExists.password === user.password) {
    return {
      success: true,
      user: userExists,
      message: "User logged in",
    };
  }
  return {
    success: false,
    message: "Password is incorrect",
  };
}
console.log(signIn(users, newUser));

// 3-Function rateProduct

function rateProduct(productId, userId, rate) {
  const userExists = users.find((u) => u._id === userId);
  if (!userExists) {
    return {
      success: false,
      message: "User does not exist",
    };
  }
  const productExists = products.find((u) => u._id === productId);
  if (!productExists) {
    return {
      success: false,
      message: "Product does not exist",
    };
  } else {
    products.map((u) => {
      if (u._id == productId) {
        u.ratings.push({ userId: userId, rate: rate });
      }
    });
  }
}
rateProduct("eedfcf", "ghderc", 5);
console.log(products);

// 4-Function AverageProduct

function averageRating(productId) {
  // Complete this function to get the average rating of a product
}
function averageRating(products, productId) {
  const productExists = products.find((p) => p._id === productId);
  if (!productExists) {
    return {
      success: false,
      message: "Product does not exist",
    };
  }
  let sum = 0;
  let count = 0;
  productExists.ratings.forEach((r) => {
    sum += r.rate;
    count++;
  });
  return {
    success: true,
    average: sum / count,
  };
}

console.log(averageRating(products, "eedfcf"));
// 5-Function LikeProduct

function likeProduct(productId, userId) {
  // Complete this function to allow a user to like a product
  // If the user already liked the product, remove the like.
}

function likeProduct(productId, userId) {
  const userExists = users.find((u) => u._id === userId);
  if (!userExists) {
    return {
      success: false,
      message: "User does not exist",
    };
  }
  const productExists = products.find((u) => u._id === productId);
  if (!productExists) {
    return {
      success: false,
      message: "Product does not exist",
    };
  } else {
    products.map((u) => {
      if (u._id == productId) {
        u.likes.push(userId);
      }
    });
  }
}
likeProduct("eedfcf", "ghderc");
console.log(products);
