import ConfigApp from "./ConfigApp";
import AsyncStorage from '@react-native-async-storage/async-storage';

////////////////////////////////// API

export async function getLatestWorkouts(page) {
  try {
    const url = `${ConfigApp.URL}json/data_workouts.php?page=${page}&limit=8`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getPremiumWorkouts(page) {
  try {
    const url = `${ConfigApp.URL}json/data_workouts.php?page=${page}&limit=8&price=premium`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getWorkoutById(id) {
  try {
    const url = `${ConfigApp.URL}json/data_workouts.php?id=${id}&limit=1`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getWorkoutByUser(id, page) {
  try {
    const url = `${ConfigApp.URL}json/data_workouts.php?user=${id}&page=${page}&limit=8`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function searchWorkout(query, page) {
  try {
    const url = `${ConfigApp.URL}json/data_workouts.php?query=${query}&page=${page}&limit=8`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getWorkoutsByGoal(id, page) {
  try {
    const url = `${ConfigApp.URL}json/data_workouts.php?goal=${id}&page=${page}&limit=8&order=desc`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getWorkoutsByLevel(id, page) {
  try {
    const url = `${ConfigApp.URL}json/data_workouts.php?level=${id}&page=${page}&limit=8&order=desc`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getExercisesByEquipment(id, page) {
  try {
    const url = `${ConfigApp.URL}json/data_exercises.php?equipment=${id}&page=${page}&limit=8&order=desc`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getExercisesByMuscle(id, page) {
  try {
    const url = `${ConfigApp.URL}json/data_exercises.php?muscle=${id}&page=${page}&limit=8&order=desc`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getExercisesById(id) {
  try {
    const url = `${ConfigApp.URL}json/data_exercises.php?id=${id}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function createPurchase(purchaseData) {
  try {
    const url = `${ConfigApp.URL}api/create_purchase.php`;

    const formData = new FormData();
    formData.append('uid', purchaseData.uid);
    formData.append('finalPrice', purchaseData.finalPrice);
    formData.append('productId', purchaseData.productId);
    formData.append('userId', purchaseData.userId);
    formData.append('discountCode', purchaseData.discountCode);
    formData.append('quantity', purchaseData.quantity);
    formData.append('selectedOption', purchaseData.selectedOption);

    const requestOptions = {
      method: 'POST',
      headers: {
        // No need to set Content-Type for FormData
        'Accept': 'application/json',
      },
      body: formData,
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to create purchase: ${errorMessage}`);
    }

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error('Error creating purchase:', error);
    throw error;
  }
}


export async function addReminder(payload) {
  try {
    console.log('__payload', payload);
    const url = `${ConfigApp.URL}json/reminder.php`;

    const formData = new FormData();
    formData.append('uid', payload.user_id);
    formData.append('productId', payload.product_id);
    formData.append('days', payload.days.join(', '));
    formData.append('morningTime', payload.morning_time);
    formData.append('eveningTime', payload.evening_time);
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to add reminder: ${errorMessage}`);
    }

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error('Error adding reminder:', error);
    throw error;
  }
}


export async function getUserPurchases(userId) {
  try {
    const url = `${ConfigApp.URL}json/data_purchases.php?userId=${userId}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error('Error fetching user purchases:', error);
    throw error;
  }
}


export async function getLatestDiets(page) {
  try {
    const url = `${ConfigApp.URL}json/data_diets.php?page=${page}&limit=6`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getDietsByUser(id, page) {
  try {
    const url = `${ConfigApp.URL}json/data_diets.php?user=${id}&page=${page}&limit=8`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getDietsByCategory(id, page) {
  try {
    const url = `${ConfigApp.URL}json/data_diets.php?category=${id}&page=${page}&limit=8&order=desc`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getDietById(id) {
  try {
    const url = `${ConfigApp.URL}json/data_diets.php?id=${id}&limit=1`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getPackages(page) {
  try {
    const url = `${ConfigApp.URL}json/data_packages.php`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}


export async function getLatestProducts(page) {
  try {
    const url = `${ConfigApp.URL}json/data_products.php`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getFeaturedProducts() {
  try {
    const url = `${ConfigApp.URL}json/data_products.php`;
    let response = await fetch(url);
    let responseJson = await response.json();

    // Check if 'image' property exists in each product
    if (responseJson.length > 0 && responseJson[0].image) {
      // Extract the first image for each product
      const productsWithFirstImage = responseJson.map(product => {
        const imagesArray = product.image.split(',');
        const firstImage = imagesArray[0];
        product.image = firstImage;
        return {
          ...product,
        };
      });

      return productsWithFirstImage;
    } else {
      // Handle the case where 'image' property is not present in any product
      console.error('Error: image property not found in the server response');
      return responseJson; // or handle it in a way that fits your use case
    }
  } catch (error) {
    // Handle errors
    console.error('Error fetching featured products:', error);
    throw error;
  }
}


export async function getProductById(id) {
  try {
    const url = `${ConfigApp.URL}json/data_products.php?id=${id}&limit=1`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getProductsByType(id, page) {
  try {
    const url = `${ConfigApp.URL}json/data_products.php?type=${id}&page=${page}&limit=8&order=desc`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getProductTypes() {
  try {
    const url = `${ConfigApp.URL}json/data_types.php`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getLatestPosts(page) {
  try {
    const url = `${ConfigApp.URL}json/data_posts.php?page=${page}&limit=6`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getPostsByTag(id, page) {
  try {
    const url = `${ConfigApp.URL}json/data_posts.php?tag=${id}&page=${page}&limit=8&order=desc`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getPostById(id) {
  try {
    const url = `${ConfigApp.URL}json/data_posts.php?id=${id}&limit=1`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getWorkoutByDay(id, day) {
  try {
    const url = `${ConfigApp.URL}json/data_days.php?id=${id}&day=${day}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export const getPromotions = () => {
  return new Promise((resolve) => {

    const promotionsData = [
      {
        id: "1",
        text1: "Promotion 1",
        text2: "Save 15%",
        image: "https://www.rdevsolutions.com/assets/img/phone-mockup/WashHub.png",
      },
      {
        id: "2",
        text1: "Promotion 2",
        text2: "30% off",
        image: "https://www.rdevsolutions.com/assets/img/phone-mockup/qvid.png",
      },
      {
        id: "2",
        text1: "30% off for Black Friday",
        text2: "Save 20%",
        image: "https://www.rdevsolutions.com/assets/img/phone-mockup/WashHub.png",
      },
    ];
    setTimeout(() => {
      resolve(promotionsData);
    }, 1000);
  });
};


export async function getFeaturedPosts() {
  try {
    const url = `${ConfigApp.URL}json/data_posts.php`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getCommunityPosts() {
  try {
    const url = `${ConfigApp.URL}json/data_community_posts.php?featured=1`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}


export async function getPostTags() {
  try {
    const url = `${ConfigApp.URL}json/data_tags.php`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getStrings() {

  const url = `${ConfigApp.URL}json/data_strings.php`;
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {

  }
}

export async function getGoals(page) {
  try {
    const url = `${ConfigApp.URL}json/data_goals.php?page=${page}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getCategories(page) {
  try {
    const url = `${ConfigApp.URL}json/data_categories.php?page=${page}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getLevels(page) {
  try {
    const url = `${ConfigApp.URL}json/data_levels.php?page=${page}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getBodyparts(page) {
  try {
    const url = `${ConfigApp.URL}json/data_bodyparts.php?page=${page}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getEquipments(page) {
  try {
    const url = `${ConfigApp.URL}json/data_equipments.php?page=${page}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export const contactForm = async (name, email, message) => {

  const url = `${ConfigApp.URL}json/contact_form.php`;

  try {

    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name: name,
        user_email: email,
        user_message: message
      })
    })
    const json = await resp.json();
    return json;

  } catch (e) {

    // console.log('Error...', e.message);

  }
}

////////////////////////////////// Favorites

export const setWorkoutBookmark = async (item) => {

  try {

    await AsyncStorage.getItem('workoutsFav').then(response => {

      const res = JSON.parse(response);

      if (res !== null) {
        let data = res.find(e => e.id === res.id);
        if (data == null) {
          res.push(item);
          AsyncStorage.setItem('workoutsFav', JSON.stringify(res));
        }
      } else {
        let data = [];
        data.push(item);
        AsyncStorage.setItem('workoutsFav', JSON.stringify(data));

      }

    });

    return true;

  } catch (error) {
    //console.log("Error", error);
  }

}

export const removeWorkoutBookmark = async (id) => {

  try {

    const data = await AsyncStorage.getItem('workoutsFav').then(token => {
      const res = JSON.parse(token);
      return res.filter(e => e.id !== id);

    });

    await AsyncStorage.setItem('workoutsFav', JSON.stringify(data));
    return true;

  } catch (error) {
    //console.log("Error", error);
  }

}

export const getFavWorkouts = async () => {

  try {
    let items = await AsyncStorage.getItem("workoutsFav");
    let data = JSON.parse(items);
    return data;
  } catch (error) {
    //console.log("Error", error);
  }
}

export const setDietBookmark = async (item) => {

  try {

    await AsyncStorage.getItem('dietsFav').then(response => {

      const res = JSON.parse(response);

      if (res !== null) {
        let data = res.find(e => e.id === res.id);
        if (data == null) {
          res.push(item);
          AsyncStorage.setItem('dietsFav', JSON.stringify(res));
        }
      } else {
        let data = [];
        data.push(item);
        AsyncStorage.setItem('dietsFav', JSON.stringify(data));

      }

    });

    return true;

  } catch (error) {
    //console.log("Error", error);
  }

}

export const removeDietBookmark = async (id) => {

  try {

    const data = await AsyncStorage.getItem('dietsFav').then(token => {
      const res = JSON.parse(token);
      return res.filter(e => e.id !== id);

    });

    await AsyncStorage.setItem('dietsFav', JSON.stringify(data));
    return true;

  } catch (error) {
    //console.log("Error", error);
  }

}

export const getFavDiets = async () => {

  try {
    let items = await AsyncStorage.getItem("dietsFav");
    let data = JSON.parse(items);
    return data;
  } catch (error) {
    //console.log("Error", error);
  }
}

// Mocked JSON data for devices
const deviceMockData = [
  {
    id: "1",
    name: "Device 1",
    image: "https://example.com/device1.jpg",
    detail: "Details about Device 1",
  },
  {
    id: "2",
    name: "Device 2",
    image: "https://example.com/device2.jpg",
    detail: "Details about Device 2",
  },
  // Add more devices as needed
];

// Mocked JSON data for skin care products
const skinCareProductMockData = [
  {
    id: "101",
    name: "Skin Care Product 1",
    image: "https://example.com/product1.jpg",
    detail: "Details about Product 1",
  },
  {
    id: "102",
    name: "Skin Care Product 2",
    image: "https://example.com/product2.jpg",
    detail: "Details about Product 2",
  },
  // Add more skin care products as needed
];

// Replace the actual API calls with these mocks during development
export async function getDeviceList() {
  return deviceMockData;
}

export async function getSkinCareProductList() {
  return skinCareProductMockData;
}
