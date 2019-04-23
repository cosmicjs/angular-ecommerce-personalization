export class Product {
  _id: string;
  slug: string;
  title: string;
  price: string;
  categories: string[];
  image: string;

  constructor(obj) {
    this._id = obj._id;
    this.slug = obj.slug;
    this.title = obj.title;
    this.price = obj.metadata.price;
    this.categories = obj.metadata.categories;
    this.image = obj.metadata.image.url;
  }
}
