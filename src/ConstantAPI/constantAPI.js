export async function addToWishlistDataAPI(productId, projectId, token) {
  try {
    let result = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`,
      {
        method: "PATCH",
        body: JSON.stringify({
          productId: productId,
        }),
        headers: {
          projectId: projectId,
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    let resultResponse = await result.json();
    console.log(resultResponse);

    //console.log(result);
  } catch {
    //toast.error("Some error occured");
    console.log("errorrrrrrrrrrrr");
    //navigate("/signup");
  }
}

export async function removeFromWishlistAPI(productId, projectId, token) {
  try {
    let result = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productId}`,
      {
        method: "DELETE",

        headers: {
          projectId: projectId,
          Authorization: "Bearer " + token,
        },
      }
    );
    let resultResponse = await result.json();
    console.log(resultResponse);
    //navigate("/wishlist");

    //console.log(result);
    // if (resultResponse.status === "success") {
    //   login();
    //   SetToken(resultResponse.token);

    //   navigate("/");
    // } else {
    //   navigate("/signup");
    // }
  } catch {
    //toast.error("Some error occured");
    console.log("errorrrrrrrrrrrr");
    //navigate("/");
  }
}

export async function removeFromCartAPI(productId, projectId, token) {
  try {
    let result = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`,
      {
        method: "DELETE",

        headers: {
          projectId: projectId,
          Authorization: "Bearer " + token,
        },
      }
    );
    let resultResponse = await result.json();
    console.log(resultResponse);
    //navigate("/wishlist");

    //console.log(result);
    // if (resultResponse.status === "success") {
    //   getCartData();
    //   //navigate("/cart");
    // } else {
    //   navigate("/");
    // }
  } catch {
    //toast.error("Some error occured");
    console.log("errorrrrrrrrrrrr");
    //navigate("/");
  }
}

export async function addToCartAPI(productId, projectId, token) {
  try {
    let result = await fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          quantity: 1,
          size: "S",
        }),
        headers: {
          projectId: projectId,
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    let resultResponse = await result.json();
    console.log(resultResponse);

    //console.log(result);
    // if (resultResponse.status === "success") {
    //   setAddedToCart(true);
    // } else {
    //   //navigate("/signup");
    // }
  } catch {
    //toast.error("Some error occured");
    console.log("errorrrrrrrrrrrr");
    //navigate("/");
  }
}
