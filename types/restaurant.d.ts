declare interface IRestaurantFood {
  available: string;
  category: string;
  currency: string;
  description: string;
  discountedPrice: number;
  image: string;
  name: string;
  originalPrice: number;
}

declare interface IRestaurantMenu {
  category: string;
  foods: IRestaurantFood[];
}

declare interface IRestaurant {
  address?: string;
  image: string;
  name: string;
  categories: string[];
  currency: string;
  menu?: IRestaurantMenu[];
}
